import { useEffect, useState } from 'react'
import { highlightCode } from './highlight.js'

export function useHighlightedCode(code, language, enabled = true) {
  const [html, setHtml] = useState(null)

  useEffect(() => {
    if (!enabled) return
    let cancelled = false
    highlightCode(code, language).then((h) => {
      if (!cancelled) setHtml(h)
    })
    return () => {
      cancelled = true
    }
  }, [code, language, enabled])

  return html
}
