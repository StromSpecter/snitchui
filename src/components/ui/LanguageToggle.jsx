import { useState } from 'react'

const OPTIONS = [
  { value: 'js', label: 'JS' },
  { value: 'ts', label: 'TS' },
]

export function LanguageToggle({ value, onChange }) {
  const [fallback, setFallback] = useState('js')
  const val = value ?? fallback
  const pick = onChange ?? setFallback

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-md border border-border/60 bg-muted/40 p-0.5"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          aria-pressed={val === opt.value}
          onClick={() => pick(opt.value)}
          className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
            val === opt.value
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}