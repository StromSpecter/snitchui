import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'
import { useState, useMemo } from 'react'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function firstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

const DatePicker = forwardRef(
  ({ className, value, onChange, placeholder, ...props }, ref) => {
    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedDate, setSelectedDate] = useState(
      value ? new Date(value) : null
    )
    const [viewDate, setViewDate] = useState(
      value ? new Date(value) : new Date()
    )

    const year = viewDate.getFullYear()
    const month = viewDate.getMonth()
    const totalDays = daysInMonth(year, month)
    const startDay = firstDayOfMonth(year, month)
    const today = new Date()
    const isToday = (d) =>
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    const isSelected = (d) =>
      selectedDate &&
      d.getDate() === selectedDate.getDate() &&
      d.getMonth() === selectedDate.getMonth() &&
      d.getFullYear() === selectedDate.getFullYear()

    const handleSelect = (day) => {
      const date = new Date(year, month, day)
      setSelectedDate(date)
      setShowCalendar(false)
      if (onChange) {
        onChange(date.toISOString().split('T')[0])
      }
    }

    const formatDate = (date) => {
      if (!date) return ''
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }

    const prevMonth = () => {
      setViewDate((prev) => {
        const next = new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
        return next
      })
    }

    const nextMonth = () => {
      setViewDate((prev) => {
        const next = new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
        return next
      })
    }

    const calendarDays = useMemo(() => {
      const days = []
      for (let i = 0; i < startDay; i++) {
        days.push(null)
      }
      for (let day = 1; day <= totalDays; day++) {
        days.push(new Date(year, month, day))
      }
      return days
    }, [year, month, startDay, totalDays])

    return (
      <div className="relative">
        <input
          type="text"
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          value={formatDate(selectedDate) || ''}
          placeholder={placeholder || 'Select date...'}
          readOnly
          onClick={() => setShowCalendar(!showCalendar)}
          ref={ref}
          {...props}
        />
        {showCalendar && (
          <div className="absolute z-10 mt-1 rounded-md border border-border bg-background p-3 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <button
                type="button"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={prevMonth}
              >
                Previous
              </button>
              <span className="text-sm font-medium">
                {MONTHS[month]} {year}
              </span>
              <button
                type="button"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={nextMonth}
              >
                Next
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {DAYS.map((d) => (
                <div key={d} className="text-muted-foreground font-medium">
                  {d}
                </div>
              ))}
              {calendarDays.map((date, i) =>
                date === null ? (
                  <div key={`empty-${i}`} className="h-8" />
                ) : (
                  <button
                    key={i}
                    type="button"
                    className={cn(
                      'h-8 w-8 rounded-md text-sm hover:bg-accent hover:text-accent-foreground',
                      isToday(date) &&
                        'bg-muted text-muted-foreground font-medium',
                      isSelected(date) &&
                        'bg-primary text-primary-foreground',
                      !isToday(date) && !isSelected(date) &&
                        'text-foreground'
                    )}
                    onClick={() => handleSelect(date.getDate())}
                  >
                    {date.getDate()}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)
DatePicker.displayName = 'DatePicker'

export { DatePicker }
