import { Copy, Check, Download } from 'lucide-react'
import { useClipboard, downloadSource } from '../../lib/copy.js'
import { langFromFilename } from '../../lib/highlight.js'
import { HighlightedCode } from './HighlightedCode.jsx'

export function CodeBlock({ code, filename, language }) {
  const { copiedKey, copy } = useClipboard()
  const lang = language || langFromFilename(filename)

  return (
    <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between bg-muted/50 px-4 py-2.5 border-b border-border/50 backdrop-blur-sm">
          <span className="text-sm font-mono">{filename}</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => copy(code, `copy-${filename}`)}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {copiedKey === `copy-${filename}` ? (
                <><Check className="size-3.5 text-green-600" /> Copied</>
              ) : (
                <><Copy className="size-3.5" /> Copy</>
              )}
            </button>
            <button
              onClick={() => downloadSource(code, filename)}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Download className="size-3.5" /> Download
            </button>
          </div>
        </div>
      )}
      <HighlightedCode code={code} language={lang} className="bg-[#09090b] text-[#fafafa]" />
    </div>
  )
}
