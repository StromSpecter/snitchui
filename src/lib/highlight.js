import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

import githubDark from 'shiki/dist/themes/github-dark.mjs'

const LANG_LOADERS = {
  javascript: () => import('shiki/dist/langs/javascript.mjs'),
  jsx: () => import('shiki/dist/langs/jsx.mjs'),
  typescript: () => import('shiki/dist/langs/typescript.mjs'),
  tsx: () => import('shiki/dist/langs/tsx.mjs'),
  css: () => import('shiki/dist/langs/css.mjs'),
  bash: () => import('shiki/dist/langs/bash.mjs'),
  json: () => import('shiki/dist/langs/json.mjs'),
}

const SUPPORTED = new Set([
  'javascript',
  'jsx',
  'typescript',
  'tsx',
  'css',
  'bash',
  'json',
  'plaintext',
])

const EXT_TO_LANG = {
  jsx: 'jsx',
  js: 'javascript',
  mjs: 'javascript',
  cjs: 'javascript',
  ts: 'typescript',
  tsx: 'tsx',
  css: 'css',
  scss: 'css',
  sh: 'bash',
  bash: 'bash',
  json: 'json',
  txt: 'plaintext',
}

let highlighterPromise

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [githubDark],
      engine: createJavaScriptRegexEngine(),
    })
  }
  return highlighterPromise
}

const loaded = new Set()

async function ensureLang(highlighter, lang) {
  if (loaded.has(lang) || !LANG_LOADERS[lang]) return
  const mod = await LANG_LOADERS[lang]()
  await highlighter.loadLanguage(mod.default)
  loaded.add(lang)
}

export function langFromFilename(filename) {
  if (!filename) return 'jsx'
  if (filename === 'Terminal' || filename.toLowerCase().includes('terminal')) return 'bash'
  const ext = filename.split('.').pop().toLowerCase()
  return EXT_TO_LANG[ext] || 'plaintext'
}

export async function highlightCode(code, lang = 'plaintext') {
  const resolvedLang = SUPPORTED.has(lang) ? lang : 'plaintext'
  const highlighter = await getHighlighter()
  await ensureLang(highlighter, resolvedLang)
  const html = highlighter.codeToHtml(code, {
    lang: resolvedLang,
    theme: 'github-dark',
  })
  return html.replace(/^<pre[^>]*><code[^>]*>|<\/code><\/pre>$/g, '')
}
