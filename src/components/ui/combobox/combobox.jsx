import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'
import { useState } from 'react'

const Combobox = forwardRef(
  (
    {
      className,
      children,
      value = [],
      onChange,
      placeholder = 'Select...',
      searchPlaceholder = 'Search...',
      emptyMessage = 'No results found.',
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const options = children

    const selectedValues = Array.isArray(value) ? value : [value]

    const filteredOptions = options.filter((child) => {
      if (!search) return true
      const label =
        child.props.label ||
        child.props.children ||
        ''
      return String(label).toLowerCase().includes(search.toLowerCase())
    })

    const handleToggle = (val) => {
      const next = selectedValues.includes(val)
        ? selectedValues.filter((v) => v !== val)
        : [...selectedValues, val]
      if (onChange) onChange(next)
    }

    const handleRemove = (val, e) => {
      e.stopPropagation()
      handleToggle(val)
    }

    return (
      <div className={cn('relative', className)} ref={ref} {...props}>
        <div
          className={cn(
            'flex min-h-[40px] flex-wrap items-center gap-1 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-1 focus-within:ring-ring cursor-pointer',
            !selectedValues.length && 'text-muted-foreground'
          )}
          onClick={() => setOpen(!open)}
        >
          {selectedValues.length === 0 ? (
            <span className="text-muted-foreground">{placeholder}</span>
          ) : (
            selectedValues.map((val) => (
              <span
                key={val}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium"
              >
                {val}
                <button
                  type="button"
                  className="ml-0.5 rounded-full hover:bg-primary/20 px-0.5"
                  onMouseDown={(e) => handleRemove(val, e)}
                >
                  ✕
                </button>
              </span>
            ))
          )}
          <div className="flex-1" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              'opacity-50 transition-transform',
              open && 'rotate-180'
            )}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        {open && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-border/50 bg-background/80 backdrop-blur-xl shadow-md">
            <div className="p-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-md border border-input bg-transparent px-3 py-1.5 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
                autoFocus
              />
            </div>
            <div className="max-h-[200px] overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-muted-foreground text-center">
                  {emptyMessage}
                </div>
              ) : (
                filteredOptions.map((child, i) => {
                  const val = child.props.value ?? child.props.children
                  const label = child.props.label || child.props.children
                  const isSelected = selectedValues.includes(val)
                  return (
                    <button
                      key={i}
                      type="button"
                      className={cn(
                        'flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-left cursor-pointer hover:bg-accent hover:text-accent-foreground',
                        isSelected && 'bg-accent text-accent-foreground'
                      )}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        handleToggle(val)
                      }}
                    >
                      <span
                        className={cn(
                          'flex h-4 w-4 items-center justify-center rounded-sm border',
                          isSelected
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'border-input'
                        )}
                      >
                        {isSelected && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                      </span>
                      {label}
                    </button>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)
Combobox.displayName = 'Combobox'

const ComboboxItem = forwardRef(
  ({ className, children, value, ...props }, ref) => {
    return (
      <button
        type="button"
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
          className
        )}
        ref={ref}
        value={value}
        {...props}
      >
        {children}
      </button>
    )
  }
)
ComboboxItem.displayName = 'ComboboxItem'

export { Combobox, ComboboxItem }