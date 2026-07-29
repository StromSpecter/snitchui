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
      showSeconds = true,
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
        const time = formatTime(next.h, next.m, next.s)
        if (onChange) onChange(time)
      },
      [h, m, s, onChange]
    )

    const handleInput = useCallback(
      (field) => (e) => {
        const max = field === 'h' ? (use12Hour ? 12 : 23) : 59
        const val = Math.min(max, Math.max(0, parseInt(e.target.value, 10) || 0))
        updateTime(field, val)
      },
      [use12Hour, updateTime]
    )

    const ampm = h >= 12 ? 'PM' : 'AM'
    const h12 = h % 12 || 12

    const inputClass = cn(
      'w-12 rounded-md border border-input bg-transparent px-1 py-2 text-center text-sm font-medium shadow-sm outline-none transition-colors',
      'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'hover:bg-accent'
    )

    const labelClass = cn(
      'block text-center text-xs font-medium text-muted-foreground mb-1'
    )

    const fieldWrapper = cn('flex flex-col items-center gap-0.5 min-w-[52px]')

    return (
      <div
        className={cn('inline-flex items-start gap-3', className)}
        ref={ref}
        {...props}
      >
        <div className={fieldWrapper}>
          <span className={labelClass}>Hours</span>
          <input
            type="number"
            min={use12Hour ? 1 : 0}
            max={use12Hour ? 12 : 23}
            value={use12Hour ? h12 : h}
            onChange={handleInput('h')}
            onFocus={() => setFocusedField('h')}
            onBlur={() => setFocusedField(null)}
            className={cn(
              inputClass,
              focusedField === 'h' && 'border-ring bg-accent'
            )}
            disabled={disabled}
            aria-label="Hours"
          />
        </div>

        <span className="text-muted-foreground text-sm pt-5 select-none">
          :
        </span>

        <div className={fieldWrapper}>
          <span className={labelClass}>Minutes</span>
          <input
            type="number"
            min={0}
            max={59}
            value={m}
            onChange={handleInput('m')}
            onFocus={() => setFocusedField('m')}
            onBlur={() => setFocusedField(null)}
            className={cn(
              inputClass,
              focusedField === 'm' && 'border-ring bg-accent'
            )}
            disabled={disabled}
            aria-label="Minutes"
          />
        </div>

        {showSeconds && (
          <>
            <span className="text-muted-foreground text-sm pt-5 select-none">
              :
            </span>

            <div className={fieldWrapper}>
              <span className={labelClass}>Seconds</span>
              <input
                type="number"
                min={0}
                max={59}
                value={s}
                onChange={handleInput('s')}
                onFocus={() => setFocusedField('s')}
                onBlur={() => setFocusedField(null)}
                className={cn(
                  inputClass,
                  focusedField === 's' && 'border-ring bg-accent'
                )}
                disabled={disabled}
                aria-label="Seconds"
              />
            </div>
          </>
        )}

        {use12Hour && (
          <div className="flex flex-col items-center gap-1 pt-1">
            <span className={labelClass}>Period</span>
            <div className="flex rounded-md border border-input overflow-hidden">
              <button
                type="button"
                className={cn(
                  'px-3 py-2 text-xs font-medium transition-colors',
                  ampm === 'AM'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-muted-foreground hover:bg-accent'
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
              <button
                type="button"
                className={cn(
                  'px-3 py-2 text-xs font-medium transition-colors border-l border-input',
                  ampm === 'PM'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-muted-foreground hover:bg-accent'
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
    )
  }
)
TimePicker.displayName = 'TimePicker'

export { TimePicker }
