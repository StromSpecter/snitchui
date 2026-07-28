import { useCallback, useState } from 'react'

export function useClipboard(resetMs = 2000) {
  const [copiedKey, setCopiedKey] = useState(null)

  const copy = useCallback(async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), resetMs)
  }, [resetMs])

  return { copiedKey, copy }
}

export function downloadSource(source, filename) {
  const blob = new Blob([source], { type: 'text/javascript' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
