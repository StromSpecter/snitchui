import { useHighlightedCode } from '../../lib/useHighlightedCode.js'

export function HighlightedCode({ code, language = 'plaintext' }) {
  const html = useHighlightedCode(code, language)

  return (
    <pre className="p-4 text-sm overflow-x-auto">
      {html ? (
        <code dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <code>{code}</code>
      )}
    </pre>
  )
}
