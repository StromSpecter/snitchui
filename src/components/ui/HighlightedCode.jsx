import { useEffect, useState } from 'react'
import { highlightCode } from '../../lib/highlight.js'

export function HighlightedCode({ code, language = 'plaintext', className = '' }) {
  const [html, setHtml] = useState(null)

  useEffect(() => {
    let cancelled = false
    highlightCode(code, language).then((h) => {
      if (!cancelled) setHtml(h)
    })
    return () => {
      cancelled = true
    }
  }, [code, language])

  return (
    <pre className={`p-4 text-sm overflow-x-auto ${className}`}>
      {html ? (
        <code dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <code>{code}</code>
      )}
    </pre>
  )
}
