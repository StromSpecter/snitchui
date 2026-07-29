import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'
import { useState } from 'react'

const DatePicker = forwardRef(
  ({ className, value, onChange, placeholder, ...props }, ref) => {
    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedDate, setSelectedDate] =
      useState(value ? new Date(value) : null)

    const handleSelect = (date) => {
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
              >
                Previous
              </button>
              <span className="text-sm font-medium">
                {selectedDate?.toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <button
                type="button"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Next
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                <div key={d} className="text-muted-foreground font-medium">
                  {d}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <button
                  key={i + 1}
                  type="button"
                  className={cn(
                    'h-8 w-8 rounded-md text-sm hover:bg-accent hover:text-accent-foreground',
                    selectedDate?.getDate() === i + 1 &&
                      selectedDate?.getMonth() === new Date().getMonth() &&
                      'bg-primary text-primary-foreground'
                  )}
                  onClick={() =>
                    handleSelect(
                      new Date(
                        selectedDate?.getFullYear() || new Date().getFullYear(),
                        selectedDate?.getMonth() || new Date().getMonth(),
                        i + 1
                      )
                    )
                  }
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
)
DatePicker.displayName = 'DatePicker'

export { DatePicker }
