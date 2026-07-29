import { forwardRef, useState, useMemo, useCallback } from 'react'
import { cn } from '../../../lib/utils.js'

const pad = (n) => String(n).padStart(2, '0')

const HOURS_12 = Array.from({ length: 12 }, (_, i) => i + 1)
const HOURS_24 = Array.from({ length: 24 }, (_, i) => i)
const MINUTES = Array.from({ length: 12 }, (_, i) => i * 5)

const TimePicker = forwardRef(
  (
    {
      className,
      value,
      onChange,
      placeholder,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState('12h')
    const [ampm, setAmpm] = useState('AM')
    const [selH, setSelH] = useState(null)
    const [selM, setSelM] = useState(null)

    const init = useCallback(() => {
      if (value) {
        const [hStr, mStr] = value.split(':')
        const h = parseInt(hStr, 10) || 0
        const m = parseInt(mStr, 10) || 0
        if (mode === '12h') {
          const h12 = h % 12 || 12
          setSelH(h12)
          setAmpm(h >= 12 ? 'PM' : 'AM')
        } else {
          setSelH(h)
          setAmpm(h >= 12 ? 'PM' : 'AM')
        }
        setSelM(m)
      } else {
        setSelH(null)
        setSelM(null)
        setAmpm('AM')
      }
    }, [value, mode])

    const handleOpen = useCallback(() => {
      if (disabled) return
      init()
      setOpen(true)
    }, [disabled, init])

    const handleClose = useCallback(() => {
      setOpen(false)
    }, [])

    const handleModeSwitch = useCallback((m) => {
      setMode(m)
      setSelH(null)
      setSelM(null)
      setAmpm('AM')
    }, [])

    const handleHour = useCallback((h) => {
      setSelH(h)
    }, [])

    const handleMinute = useCallback((m) => {
      setSelM(m)
    }, [])

    const handleAmpm = useCallback((v) => {
      setAmpm(v)
    }, [])

    const handleOk = useCallback(() => {
      if (selH === null || selM === null) return
      let h24 = selH
      if (mode === '12h') {
        if (ampm === 'AM') h24 = selH === 12 ? 0 : selH
        else h24 = selH === 12 ? 12 : selH + 12
      }
      const formatted = `${pad(h24)}:${pad(selM)}:00`
      if (onChange) onChange(formatted)
      setOpen(false)
    }, [selH, selM, mode, ampm, onChange])

    const formattedDisplay = useMemo(() => {
      if (!value) return ''
      const parts = value.split(':').map(Number)
      const h = parts[0] || 0
      const m = parts[1] || 0
      if (mode === '12h') {
        const h12 = h % 12 || 12
        return `${pad(h12)}:${pad(m)} ${h >= 12 ? 'PM' : 'AM'}`
      }
      return `${pad(h)}:${pad(m)}`
    }, [value, mode])

    const hours = mode === '12h' ? HOURS_12 : HOURS_24

    return (
      <div className={cn('relative', className)} ref={ref} {...props}>
        <input
          type="text"
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            'cursor-pointer'
          )}
          value={formattedDisplay}
          placeholder={placeholder || 'Select time...'}
          readOnly
          onClick={handleOpen}
          onKeyDown={(e) => e.key === 'Escape' && handleClose()}
          disabled={disabled}
          aria-label="Time picker"
        />

        {open && (
          <div className="absolute z-10 mt-2 w-72 rounded-xl border border-border bg-background p-4 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Select Time
              </span>
              <div className="flex rounded-lg border border-input overflow-hidden">
                <button
                  type="button"
                  className={cn(
                    'px-3 h-7 text-xs font-semibold transition-colors',
                    mode === '12h'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-muted-foreground hover:bg-accent'
                  )}
                  onClick={() => handleModeSwitch('12h')}
                >
                  AM/PM
                </button>
                <div className="w-px bg-input" />
                <button
                  type="button"
                  className={cn(
                    'px-3 h-7 text-xs font-semibold transition-colors',
                    mode === '24h'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-muted-foreground hover:bg-accent'
                  )}
                  onClick={() => handleModeSwitch('24h')}
                >
                  All
                </button>
              </div>
            </div>

            <div className="mb-3">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Hour
              </span>
              <div className="grid grid-cols-6 gap-1.5 max-h-28 overflow-y-auto">
                {hours.map((h) => (
                  <button
                    key={h}
                    type="button"
                    className={cn(
                      'h-8 w-full rounded-md text-sm font-medium transition-all duration-100',
                      'hover:bg-accent hover:text-accent-foreground',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      selH === h
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-foreground'
                    )}
                    onClick={() => handleHour(h)}
                  >
                    {pad(h)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Minute
              </span>
              <div className="grid grid-cols-6 gap-1.5">
                {MINUTES.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={cn(
                      'h-8 w-full rounded-md text-sm font-medium transition-all duration-100',
                      'hover:bg-accent hover:text-accent-foreground',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      selM === m
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-foreground'
                    )}
                    onClick={() => handleMinute(m)}
                  >
                    {pad(m)}
                  </button>
                ))}
              </div>
            </div>

            {mode === '12h' && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                  Period
                </span>
                <div className="flex rounded-lg border border-input overflow-hidden ml-auto">
                  <button
                    type="button"
                    className={cn(
                      'px-4 h-8 text-xs font-bold transition-colors',
                      ampm === 'AM'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-muted-foreground hover:bg-accent'
                    )}
                    onClick={() => handleAmpm('AM')}
                  >
                    AM
                  </button>
                  <div className="w-px bg-input" />
                  <button
                    type="button"
                    className={cn(
                      'px-4 h-8 text-xs font-bold transition-colors',
                      ampm === 'PM'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-muted-foreground hover:bg-accent'
                    )}
                    onClick={() => handleAmpm('PM')}
                  >
                    PM
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-2 border-t border-border pt-3">
              <button
                type="button"
                className="h-9 px-4 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className={cn(
                  'h-9 px-4 rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  selH !== null && selM !== null
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                )}
                onClick={handleOk}
                disabled={selH === null || selM === null}
              >
                OK
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
