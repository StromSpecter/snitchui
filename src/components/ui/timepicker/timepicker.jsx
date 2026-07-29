import { forwardRef, useState, useCallback } from 'react'
import { cn } from '../../../lib/utils.js'

const pad = (n) => String(n).padStart(2, '0')

function parseTime(value) {
  if (!value) return { h: 0, m: 0, s: 0 }
  const parts = value.split(':').map(Number)
  return { h: parts[0] || 0, m: parts[1] || 0, s: parts[2] || 0 }
}

function formatTime(h, m, s) {
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}

const TimePicker = forwardRef(
  (
    {
      className,
      value,
      onChange,
      disabled = false,
      use12Hour = false,
      showSeconds = false,
      ...props
    },
    ref
  ) => {
    const [focusedField, setFocusedField] = useState(null)
    const { h, m, s } = parseTime(value)

    const updateTime = useCallback(
      (field, val) => {
        const next =
          field === 'h'
            ? { h: val, m, s }
            : field === 'm'
            ? { h, m: val, s }
            : { h, m, s: val }
        if (onChange) onChange(formatTime(next.h, next.m, next.s))
      },
      [h, m, s, onChange]
    )

    const handleInput = useCallback(
      (field) => (e) => {
        const max = field === 'h' ? (use12Hour ? 12 : 23) : 59
        const val = clamp(parseInt(e.target.value, 10) || 0, 0, max)
        updateTime(field, val)
      },
      [use12Hour, updateTime]
    )

    const ampm = h >= 12 ? 'PM' : 'AM'
    const h12 = h % 12 || 12

    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

    return (
      <div
        className={cn(
          'inline-flex flex-col gap-3 p-3 rounded-xl border border-input bg-background shadow-sm',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Time
          </span>
          <span className="text-xs text-muted-foreground/60 font-mono">
            {formatTime(h, m, s)}
          </span>
        </div>

        <div className="inline-flex items-start gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              HH
            </span>
            <input
              type="number"
              min={use12Hour ? 1 : 0}
              max={use12Hour ? 12 : 23}
              value={use12Hour ? h12 : h}
              onChange={handleInput('h')}
              onFocus={() => setFocusedField('h')}
              onBlur={() => setFocusedField(null)}
              className={cn(
                'w-14 h-11 rounded-lg border border-input bg-transparent px-2 py-2 text-center text-lg font-semibold tracking-tight outline-none transition-all duration-150',
                'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                'hover:border-accent-foreground/50',
                disabled && 'cursor-not-allowed opacity-50',
                focusedField === 'h' && 'border-primary bg-primary/5'
              )}
              disabled={disabled}
              aria-label="Hours"
            />
          </div>

          <span className="text-lg font-light text-muted-foreground/50 mt-4 select-none">
            :
          </span>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              MM
            </span>
            <input
              type="number"
              min={0}
              max={59}
              value={m}
              onChange={handleInput('m')}
              onFocus={() => setFocusedField('m')}
              onBlur={() => setFocusedField(null)}
              className={cn(
                'w-14 h-11 rounded-lg border border-input bg-transparent px-2 py-2 text-center text-lg font-semibold tracking-tight outline-none transition-all duration-150',
                'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                'hover:border-accent-foreground/50',
                disabled && 'cursor-not-allowed opacity-50',
                focusedField === 'm' && 'border-primary bg-primary/5'
              )}
              disabled={disabled}
              aria-label="Minutes"
            />
          </div>

          {showSeconds && (
            <>
              <span className="text-lg font-light text-muted-foreground/50 mt-4 select-none">
                :
              </span>

              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                  SS
                </span>
                <input
                  type="number"
                  min={0}
                  max={59}
                  value={s}
                  onChange={handleInput('s')}
                  onFocus={() => setFocusedField('s')}
                  onBlur={() => setFocusedField(null)}
                  className={cn(
                    'w-14 h-11 rounded-lg border border-input bg-transparent px-2 py-2 text-center text-lg font-semibold tracking-tight outline-none transition-all duration-150',
                    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                    'hover:border-accent-foreground/50',
                    disabled && 'cursor-not-allowed opacity-50',
                    focusedField === 's' && 'border-primary bg-primary/5'
                  )}
                  disabled={disabled}
                  aria-label="Seconds"
                />
              </div>
            </>
          )}

          {use12Hour && (
            <div className="flex flex-col items-center gap-1.5 ml-2">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                AM/PM
              </span>
              <div className="flex rounded-lg border border-input overflow-hidden shadow-sm">
                <button
                  type="button"
                  className={cn(
                    'h-11 w-14 flex items-center justify-center text-xs font-bold transition-all duration-150',
                    ampm === 'AM'
                      ? 'bg-primary text-primary-foreground shadow-inner'
                      : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                  onClick={() => {
                    const newH = ampm === 'AM' ? h : (h - 12 + 12) % 24
                    updateTime('h', newH)
                  }}
                  disabled={disabled}
                  aria-label="AM"
                >
                  AM
                </button>
                <div className="w-px bg-input" />
                <button
                  type="button"
                  className={cn(
                    'h-11 w-14 flex items-center justify-center text-xs font-bold transition-all duration-150',
                    ampm === 'PM'
                      ? 'bg-primary text-primary-foreground shadow-inner'
                      : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                  onClick={() => {
                    let newH = h
                    if (ampm === 'AM' && h < 12) newH = h + 12
                    if (ampm === 'PM' && h >= 12) newH = h - 12
                    updateTime('h', newH)
                  }}
                  disabled={disabled}
                  aria-label="PM"
                >
                  PM
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)
TimePicker.displayName = 'TimePicker'

export { TimePicker }