import fs from 'node:fs'
import path from 'node:path'

import { toComponentSource, componentExt, indexExt, toUtilsSource } from './tsx-core.js'

/**
 * TypeScript detection + file wiring for the CLI.
 *
 * The pure string transforms live in ./tsx-core.js (browser-safe) so the docs
 * website can reuse them in the browser to render a live JS/TS toggle over
 * every component's Source section.
 */

export { componentExt, indexExt, toUtilsSource }

export function isTypeScriptProject(projectRoot) {
  const tsconfigPath = path.join(projectRoot, 'tsconfig.json')
  if (fs.existsSync(tsconfigPath)) return true

  const pkgPath = path.join(projectRoot, 'package.json')
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
    const deps = {
      ...(pkg.dependencies || {}),
      ...(pkg.devDependencies || {}),
    }
    if (deps.typescript) return true
  } catch {
    /* ignore */
  }

  for (const dir of ['src', 'app', 'pages', 'lib']) {
    const root = path.join(projectRoot, dir)
    if (fs.existsSync(root) && hasTsFiles(root)) return true
  }
  return false
}

function hasTsFiles(dir) {
  try {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const name = entry.name
      if (name.startsWith('.')) continue
      if (name === 'node_modules' || name === 'dist' || name === 'build') continue
      const full = path.join(dir, name)
      if (entry.isDirectory()) {
        if (hasTsFiles(full)) return true
      } else if (name.endsWith('.ts') || name.endsWith('.tsx')) {
        return true
      }
    }
  } catch {
    /* ignore */
  }
  return false
}

export function resolveLang(projectRoot, options = {}) {
  if (
    options.typescript ||
    options.ts ||
    options.lang === 'ts' ||
    options.lang === 'typescript'
  ) {
    return 'ts'
  }
  if (
    options.javascript ||
    options.js ||
    options.lang === 'js' ||
    options.lang === 'javascript'
  ) {
    return 'js'
  }
  return isTypeScriptProject(projectRoot) ? 'ts' : 'js'
}

/** Convert a component registry entry's file paths & content to a language. */
export function toFiles(files, name, lang) {
  if (lang !== 'ts') return files
  return files.map((f) => {
    const isJsx = f.path.endsWith('.jsx')
    const newPath = isJsx ? f.path.replace(/\.jsx$/, '.tsx') : f.path.replace(/\.js$/, '.ts')
    return { ...f, path: newPath, content: toComponentSource(f.content, name) }
  })
}