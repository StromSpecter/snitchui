import { useMemo, useState } from 'react'
import { CodeBlock } from './CodeBlock.jsx'
import { LanguageToggle } from './LanguageToggle.jsx'
import {
  toComponentSource,
  toUtilsSource,
  componentExt,
  indexExt,
} from '../../../cli/tsx-core.js'

function transformKey(file) {
  const m = file.match(/components\/ui\/([^/]+)\//)
  return m ? m[1] : 'generic'
}

function isUtils(file) {
  return /\/lib\/utils\.(js|ts)$/.test(file)
}

function extFor(file, lang) {
  if (file.endsWith('.js')) return `.${indexExt(lang)}`
  if (file.endsWith('.jsx')) return `.${componentExt(lang)}`
  return file
}

function renderDep(dep, lang) {
  const file = dep.file.replace(/\.(js|jsx)$/, extFor(dep.file, lang))
  let source = dep.source
  if (lang === 'ts') {
    source = isUtils(file)
      ? toUtilsSource(source, 'ts')
      : toComponentSource(source, transformKey(file))
  }
  return { ...dep, file, source }
}

export function SourceSection({ deps }) {
  const [lang, setLang] = useState('js')
  const rendered = useMemo(
    () => deps.map((d) => renderDep(d, lang)),
    [deps, lang]
  )

  return (
    <section className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Source</h2>
        <LanguageToggle value={lang} onChange={setLang} />
      </div>
      {rendered.map((dep) => (
        <div key={dep.file} className="mb-4">
          <CodeBlock code={dep.source} filename={dep.file} />
        </div>
      ))}
    </section>
  )
}