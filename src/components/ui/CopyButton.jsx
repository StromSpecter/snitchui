import { Copy, Check } from 'lucide-react'
import { useClipboard } from '../../lib/copy.js'

export function CopyButton({ text, label }) {
  const { copiedKey, copy } = useClipboard()

  return (
    <button
      onClick={() => copy(text, label)}
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label={`Copy ${label}`}
    >
      {copiedKey === label ? (
        <Check className="size-4 text-green-600" />
      ) : (
        <Copy className="size-4" />
      )}
    </button>
  )
}
