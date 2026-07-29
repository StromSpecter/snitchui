import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'
import { useState } from 'react'

const TimePicker = forwardRef(
  ({ className, value, onChange, ...props }, ref) => {
    const [hours, setHours] = useState(
      value ? parseInt(value.split(':')[0]) : 0
    )
    const [minutes, setMinutes] = useState(
      value ? parseInt(value.split(':')[1]) : 0
    )
    const [seconds, setSeconds] = useState(
      value ? parseInt(value.split(':')[2]) || 0 : 0
    )

    const pad = (n) => String(n).padStart(2, '0')

    const handleChange = (h, m, s) => {
      const time = `${pad(h)}:${pad(m)}:${pad(s)}`
      if (onChange) onChange(time)
    }

    const handleHourChange = (e) => {
      const h = Math.min(23, Math.max(0, parseInt(e.target.value) || 0))
      setHours(h)
      handleChange(h, minutes, seconds)
    }

    const handleMinuteChange = (e) => {
      const m = Math.min(59, Math.max(0, parseInt(e.target.value) || 0))
      setMinutes(m)
      handleChange(hours, m, seconds)
    }

    const handleSecondChange = (e) => {
      const s = Math.min(59, Math.max(0, parseInt(e.target.value) || 0))
      setSeconds(s)
      handleChange(hours, minutes, s)
    }

    return (
      <div className={cn('flex items-center gap-1', className)}>
        <input
          type="number"
          min="0"
          max="23"
          value={hours}
          onChange={handleHourChange}
          className="w-12 rounded-md border border-input bg-transparent px-1 py-1 text-center text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          ref={ref}
          {...props}
        />
        <span className="text-muted-foreground text-sm">:</span>
        <input
          type="number"
          min="0"
          max="59"
          value={minutes}
          onChange={handleMinuteChange}
          className="w-12 rounded-md border border-input bg-transparent px-1 py-1 text-center text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <span className="text-muted-foreground text-sm">:</span>
        <input
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={handleSecondChange}
          className="w-12 rounded-md border border-input bg-transparent px-1 py-1 text-center text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>
    )
  }
)
TimePicker.displayName = 'TimePicker'

export { TimePicker }
