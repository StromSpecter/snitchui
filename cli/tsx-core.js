/**
 * Pure JS -> TS transform for SnitchUI component sources.
 *
 * Browser-safe: no Node builtins. Shared by the CLI (cli/index.js) and the
 * documentation website (which renders a live JS/TS toggle over every
 * component's Source section).
 *
 * The transform is intentionally conservative: every React `forwardRef` is
 * typed `forwardRef<any, any>` and unbound params are annotated `: any`. This
 * guarantees the output compiles under strict tsconfigs (`noImplicitAny`,
 * `strict`) for every component while still producing real `.ts` files with
 * proper extensions and imports.
 */

export function componentExt(lang) {
  return lang === 'ts' ? 'tsx' : 'jsx'
}

export function indexExt(lang) {
  return lang === 'ts' ? 'ts' : 'js'
}

export function toUtilsSource(content, lang) {
  if (lang !== 'ts') return content
  // Rest params must be typed in strict TS.
  return content.replace(/function\s+cn\(\s*\.\.\.inputs\s*\)/g, 'function cn(...inputs: any[])')
}

// ---------------------------------------------------------------------- helpers

function splitTopLevel(str, separator = ',') {
  const parts = []
  let depth = 0
  let current = ''
  for (const ch of str) {
    if (ch === '(' || ch === '[' || ch === '{') depth++
    else if (ch === ')' || ch === ']' || ch === '}') depth--
    if (ch === separator && depth === 0) {
      parts.push(current)
      current = ''
    } else {
      current += ch
    }
  }
  if (current.trim() !== '') parts.push(current)
  return parts
}

function findBalanced(str, open, close) {
  let depth = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === open) depth++
    else if (str[i] === close) {
      depth--
      if (depth === 0) return i + 1
    }
  }
  return -1
}

// `name`, `name = default` or object `{ ... }`
function annotateParam(token) {
  const t = token.trim()
  if (t === '') return t
  const eq = t.indexOf('=')
  if (eq === -1) return `${t}: any`
  const left = t.slice(0, eq).trim()
  const right = t.slice(eq).trim()
  const match = left.match(/^([A-Za-z_$][\w$]*)\s*/)
  if (!match) return t
  return `${match[1]}: any ${right}`
}

function annotateParamList(args) {
  const t = (args ?? '').trim()
  if (t === '') return ''
  if (t.startsWith('{')) {
    const end = findBalanced(t, '{', '}')
    if (end === -1) return `${t}: any`
    return `${t.slice(0, end)}: any`
  }
  return splitTopLevel(t)
    .map(annotateParam)
    .join(', ')
}

// ------------------------------------------------------------------ rewrites

// module-level / component function params:  function name(ARGS) {
const FUNCTION_RE = /function\s+([A-Za-z_$][\w$]*)\s*\(([\s\S]*?)\)\s*\{/g
// standalone helper arrow consts:  const name = (ARGS) =>
// `[^()]*?` keeps this from matching parenthesized expressions like
// `const start = (page - 1) * size` and jumping to an unrelated `) =>`.
const ARROW_CONST_RE = /\bconst\s+([A-Za-z_$][\w$]*)\s*=\s*\(([^()]*?)\)\s*=>/g

// Array-method callbacks whose receiver is typed `any`. Under `noImplicitAny`
// TS leaves these params untyped, so we annotate them explicitly: .map((a, b));
const METHOD_CALLBACK_RE =
  /\.(map|flatMap|forEach|filter|reduce|find|some|every|sort)\s*\(\s*\(([^()]*?)\)\s*=>/g
// useCallback(fn) wrappers have the same issue:  useCallback((x) => {
const USECALLBACK_RE = /useCallback\(\s*\(([^()]*?)\)\s*=>/g
// Array.from({ ... }, (_, i) => {...})
const ARRAYFROM_RE = /Array\.from\(\s*\{([^{}]*)\}\s*,\s*\(([^()]*?)\)\s*=>/g

/**
 * Per-component rewrites for things that are simpler to describe bespoke than
 * generically. Keyed by component folder name used in ./templates.js.
 */
const TARGETED = {
  select: [
    // Radix `SelectItem` requires an explicit `value` prop; pull it out of the
    // spread instead of nesting it in the implicit `any` rest.
    [/forwardRef<any, any>\(\s*\(\{ className, children, \.\.\.props \}, ref\) => \{/g, 'forwardRef<any, any>(({ className, children, value, ...props }, ref) => {'],
    [/<SelectPrimitive\.Item\s*\n/g, '<SelectPrimitive.Item\n        value={value}\n'],
  ],
  datepicker: [
    // `isSelected` may return null and `aria-pressed` rejects null in TS.
    [/aria-pressed=\{isSelected\(date\)\}/g, 'aria-pressed={!!isSelected(date)}'],
  ],
  chart: [
    // IIFE-ish formatValue fallback.
    [/\s\(\(v\)\s*=>\s*String\(v\)\)/g, ' ((v: any) => String(v))'],
    // Accumulator objects start empty and are indexed dynamically.
    [/const\s+(merged|vars)\s*=\s*\{\s*\}/g, 'const $1: Record<string, any> = {}'],
    // `Object.entries` on an implicitly-typed receiver collapses values to `{}`.
    [/const\s+entries\s*=\s*Object\.entries\(/g, 'const entries: [string, any][] = Object.entries('],
    [/const\s+series\s*=\s*Object\.entries\(/g, 'const series: [string, any][] = Object.entries('],
    // JS tolerated extra args to the 2-param `resolveColor`; strip them so the
    // arity matches and TS2554 is avoided.
    [/(resolveColor\([^)]*),\s*(?:s|0)\s*\)/g, '$1)'],
  ],
}

function applyTargeted(source, name) {
  const rules = TARGETED[name]
  if (!rules) return source
  let s = source
  for (const [from, to] of rules) s = s.replace(from, to)
  return s
}

export function toComponentSource(source, name) {
  let s = source
  s = s.replace(/createContext\(\)/g, 'createContext<any>(null as any)')
  s = s.replace(/createContext\(null\)/g, 'createContext<any>(null as any)')
  s = s.replace(/forwardRef\(/g, 'forwardRef<any, any>(')
  // Drop explicit JS extensions so imports resolve to the generated .ts/.tsx.
  s = s.replace(/from\s+['"]([^'"]+)\.jsx?['"]/g, "from '$1'")
  s = s.replace(FUNCTION_RE, (m, fn, args) => `function ${fn}(${annotateParamList(args)}) {`)
  s = s.replace(ARROW_CONST_RE, (m, fn, args) => `const ${fn} = (${annotateParamList(args)}) =>`)
  // Array-method / hook callback params: annotate as `any`.
  s = s.replace(METHOD_CALLBACK_RE, (m, fn, args) => `.${fn}((${annotateParamList(args)}) =>`)
  s = s.replace(USECALLBACK_RE, (m, args) => `useCallback((${annotateParamList(args)}) =>`)
  s = s.replace(ARRAYFROM_RE, (m, obj, args) => `Array.from({${obj}}, (${annotateParamList(args)}) =>`)
  // Hooks whose `null` / `{}` initializers would otherwise type state as `never`.
  s = s.replace(/useState\(\s*null\s*\)/g, 'useState<any>(null)')
  s = s.replace(/useState\(\s*\{\s*\}\s*\)/g, 'useState<any>({})')
  s = s.replace(/useRef\(\s*null\s*\)/g, 'useRef<any>(null)')
  // setState((prev) => ...) callsbacks get no contextual typing through `any`.
  s = s.replace(/\(prev\)\s*=>/g, '(prev: any) =>')
  s = applyTargeted(s, name)
  return s
}