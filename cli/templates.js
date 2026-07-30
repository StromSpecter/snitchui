export const components = {
  button: {
    name: 'button',
    deps: [
      '@radix-ui/react-slot',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/button/button.jsx',
        content: `import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/utils.js'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  label: {
    name: 'label',
    deps: [
      '@radix-ui/react-label',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/label/label.jsx',
        content: `import { forwardRef } from 'react'
import { Label as RadixLabel } from '@radix-ui/react-label'
import { cn } from '../../../lib/utils.js'

const Label = forwardRef(({ className, ...props }, ref) => {
  return (
    <RadixLabel
      className={cn('text-sm font-medium text-foreground', className)}
      ref={ref}
      {...props}
    />
  )
})
Label.displayName = 'Label'

export { Label }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  input: {
    name: 'input',
    deps: [
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/input/input.jsx',
        content: `import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    )
  )
})
Input.displayName = 'Input'

export { Input }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  select: {
    name: 'select',
    deps: [
      '@radix-ui/react-select',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/select/select.jsx',
        content: `import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitive.Trigger
        className={cn(
          'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    )
  }
)
SelectTrigger.displayName = 'SelectTrigger'

const SelectContent = forwardRef(({ className, children, position = 'popper', ...props }, ref) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          'relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-background text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        ref={ref}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
})
SelectContent.displayName = 'SelectContent'

const SelectItem = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitive.Item
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
SelectItem.displayName = 'SelectItem'

const SelectLabel = forwardRef(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Label
      className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
      ref={ref}
      {...props}
    />
  )
})
SelectLabel.displayName = 'SelectLabel'

const SelectSeparator = forwardRef(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Separator
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      ref={ref}
      {...props}
    />
  )
})
SelectSeparator.displayName = 'SelectSeparator'

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
}`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  checkbox: {
    name: 'checkbox',
    deps: [
      '@radix-ui/react-checkbox',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/checkbox/checkbox.jsx',
        content: `import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Checkbox = forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <CheckboxPrimitive.Root
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          className
        )}
        checked={checked}
        onCheckedChange={onCheckedChange}
        ref={ref}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
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
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  textarea: {
    name: 'textarea',
    deps: [
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/textarea/textarea.jsx',
        content: `import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  switch: {
    name: 'switch',
    deps: [
      '@radix-ui/react-switch',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/switch/switch.jsx',
        content: `import * as SwitchPrimitive from '@radix-ui/react-switch'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Switch = forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <SwitchPrimitive.Root
        className={cn(
          'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
          className
        )}
        checked={checked}
        onCheckedChange={onCheckedChange}
        ref={ref}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
          )}
        />
      </SwitchPrimitive.Root>
    )
  }
)
Switch.displayName = 'Switch'

export { Switch }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  radiobutton: {
    name: 'radiobutton',
    deps: [
      '@radix-ui/react-radio-group',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/radiobutton/radiobutton.jsx',
        content: `import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const RadioButtonGroup = RadioGroupPrimitive.Root
const RadioButtonItem = forwardRef(
  ({ className, value, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-full border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary',
          className
        )}
        value={value}
        ref={ref}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    )
  }
)
RadioButtonItem.displayName = 'RadioButtonItem'

const RadioButtonLabel = forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
RadioButtonLabel.displayName = 'RadioButtonLabel'

export { RadioButtonGroup, RadioButtonItem, RadioButtonLabel }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  combobox: {
    name: 'combobox',
    deps: [
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/combobox/combobox.jsx',
        content: `import { forwardRef } from 'react'
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
          <div className="absolute z-10 mt-1 w-full rounded-md border border-border bg-background shadow-md">
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

export { Combobox, ComboboxItem }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  datepicker: {
    name: 'datepicker',
    deps: [
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/datepicker/datepicker.jsx',
        content: `import { forwardRef, useState, useMemo, useCallback } from 'react'
import { cn } from '../../../lib/utils.js'

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
function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}
function isToday(d) {
  const t = new Date()
  return isSameDay(d, t)
}
function isWeekend(d) {
  const day = d.getDay()
  return day === 0 || day === 6
}

const DatePicker = forwardRef(
  ({
    className,
    value,
    onChange,
    placeholder,
    disabled = false,
    ...props
  }, ref) => {
    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null)
    const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date())

    const year = viewDate.getFullYear()
    const month = viewDate.getMonth()
    const totalDays = daysInMonth(year, month)
    const startDay = firstDayOfMonth(year, month)

    const prevMonth = useCallback(() => {
      setViewDate((prev) => {
        const y = prev.getMonth() === 0 ? prev.getFullYear() - 1 : prev.getFullYear()
        const m = prev.getMonth() === 0 ? 11 : prev.getMonth() - 1
        return new Date(y, m, 1)
      })
    }, [])

    const nextMonth = useCallback(() => {
      setViewDate((prev) => {
        const y = prev.getMonth() === 11 ? prev.getFullYear() + 1 : prev.getFullYear()
        const m = prev.getMonth() === 11 ? 0 : prev.getMonth() + 1
        return new Date(y, m, 1)
      })
    }, [])

    const isSelected = useCallback(
      (d) =>
        selectedDate &&
        isSameDay(d, selectedDate),
      [selectedDate]
    )

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

    const handleSelect = useCallback(
      (d) => {
        setSelectedDate(d)
        setShowCalendar(false)
        if (onChange) {
          onChange(d.toISOString().split('T')[0])
        }
      },
      [onChange]
    )

    const formatDate = useCallback((d) => {
      if (!d) return ''
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }, [])

    const handleTriggerClick = useCallback(() => {
      if (disabled) return
      setShowCalendar((prev) => !prev)
    }, [disabled])

    const handleKeyEscape = useCallback(() => {
      setShowCalendar(false)
    }, [])

    return (
      <div className={cn('relative', className)} ref={ref} {...props}>
        <input
          type="text"
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            'cursor-pointer'
          )}
          value={formatDate(selectedDate) || ''}
          placeholder={placeholder || 'Select date...'}
          readOnly
          onClick={handleTriggerClick}
          onKeyDown={(e) => e.key === 'Escape' && handleKeyEscape()}
          ref={ref}
          disabled={disabled}
          aria-label="Date picker"
        />

        {showCalendar && (
          <div className="absolute z-10 mt-2 w-72 rounded-xl border border-border bg-background p-4 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                onClick={prevMonth}
                aria-label="Previous month"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <span className="text-sm font-semibold">
                {MONTHS[month]} {year}
              </span>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                onClick={nextMonth}
                aria-label="Next month"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAYS.map((d) => (
                <div
                  key={d}
                  className="h-8 w-8 flex items-center justify-center rounded-full text-xs font-medium text-muted-foreground"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, i) =>
                date === null ? (
                      <div key={\`empty-\${i}\`} className="h-8" />
                ) : (
                  <button
                    key={i}
                    type="button"
                    className={cn(
                      'relative h-8 w-8 rounded-full text-sm font-medium transition-all duration-150',
                      'hover:bg-accent hover:text-accent-foreground',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      isToday(date) && !isSelected(date) && 'bg-muted text-muted-foreground font-semibold',
                      isSelected(date) && 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90',
                      isWeekend(date) && !isToday(date) && !isSelected(date) && 'text-muted-foreground',
                      'cursor-pointer'
                    )}
                    onClick={() => handleSelect(date)}
                    aria-label={date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    aria-pressed={isSelected(date)}
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

export { DatePicker }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  card: {
    name: 'card',
    deps: [
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/card/card.jsx',
        content: `import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Card = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  )
})
Card.displayName = 'Card'

const CardHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
})
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
})
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
})
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
})
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  badge: {
    name: 'badge',
    deps: [
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/badge/badge.jsx',
        content: `import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/utils.js'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'text-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        success: 'border-transparent bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400',
        warning: 'border-transparent bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Badge = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge, badgeVariants }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  dialog: {
    name: 'dialog',
    deps: [
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/dialog/dialog.jsx',
        content: `import { forwardRef, createContext, useContext, useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../../lib/utils.js'

const DialogContext = createContext()

function Dialog({ open: controlledOpen, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = useCallback(
    (val) => {
      if (!isControlled) setUncontrolledOpen(val)
      onOpenChange?.(val)
    },
    [isControlled, onOpenChange]
  )

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}
Dialog.displayName = 'Dialog'

function DialogTrigger({ asChild, children, ...props }) {
  const { setOpen } = useContext(DialogContext)
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp onClick={() => setOpen(true)} {...props}>
      {children}
    </Comp>
  )
}
DialogTrigger.displayName = 'DialogTrigger'

function DialogClose({ children, ...props }) {
  const { setOpen } = useContext(DialogContext)
  return (
    <button onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}
DialogClose.displayName = 'DialogClose'

const DialogContent = forwardRef(({ className, children, ...props }, ref) => {
  const { open, setOpen } = useContext(DialogContext)

  useEffect(() => {
    if (!open) return
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [open, setOpen])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative z-50 w-full max-w-lg rounded-xl border border-border bg-background shadow-lg p-6 mx-4',
          'animate-in fade-in-0 zoom-in-95 duration-200',
          className
        )}
        {...props}
      >
        {children}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  )
})
DialogContent.displayName = 'DialogContent'

const DialogHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-4', className)}
      {...props}
    />
  )
})
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4', className)}
      {...props}
    />
  )
})
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
})
DialogTitle.displayName = 'DialogTitle'

const DialogDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
DialogDescription.displayName = 'DialogDescription'

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  dropdown: {
    name: 'dropdown',
    deps: [
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/dropdown/dropdown.jsx',
        content: `import { forwardRef, createContext, useContext, useState, useRef, useEffect } from 'react'
import { cn } from '../../../lib/utils.js'

const DropdownContext = createContext()

function Dropdown({ children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [open])

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  )
}
Dropdown.displayName = 'Dropdown'

function DropdownTrigger({ asChild, children, ...props }) {
  const { open, setOpen } = useContext(DropdownContext)
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-haspopup="true"
      {...props}
    >
      {children}
    </Comp>
  )
}
DropdownTrigger.displayName = 'DropdownTrigger'

const DropdownContent = forwardRef(({ className, align = 'start', sideOffset = 8, children, ...props }, ref) => {
  const { open } = useContext(DropdownContext)

  return open ? (
    <div
      ref={ref}
      className={cn(
        'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-background p-1 shadow-md',
        'animate-in fade-in-0 zoom-in-95 duration-150',
        align === 'end' ? 'right-0' : 'left-0',
        className
      )}
      onClick={() => setOpen(false)}
      role="menu"
      {...props}
    >
      {children}
    </div>
  ) : null
})
DropdownContent.displayName = 'DropdownContent'

const DropdownItem = forwardRef(({ className, inset, ...props }, ref) => {
  return (
    <button
      ref={ref}
      role="menuitem"
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
})
DropdownItem.displayName = 'DropdownItem'

const DropdownSeparator = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
})
DropdownSeparator.displayName = 'DropdownSeparator'

const DropdownLabel = forwardRef(({ className, inset, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('px-2 py-1.5 text-xs font-medium text-muted-foreground', inset && 'pl-8', className)}
      {...props}
    />
  )
})
DropdownLabel.displayName = 'DropdownLabel'

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
}`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  tabs: {
    name: 'tabs',
    deps: [
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/tabs/tabs.jsx',
        content: `import { forwardRef, createContext, useContext, useState } from 'react'
import { cn } from '../../../lib/utils.js'

const TabsContext = createContext()

function Tabs({ value: controlledValue, onValueChange, defaultValue, children, className, ...props }) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || '')
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const setValue = (val) => {
    if (!isControlled) setUncontrolledValue(val)
    onValueChange?.(val)
  }

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn('', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}
Tabs.displayName = 'Tabs'

const TabsList = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="tablist"
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    />
  )
})
TabsList.displayName = 'TabsList'

const TabsTrigger = forwardRef(({ className, value, disabled, children, ...props }, ref) => {
  const { value: selectedValue, setValue } = useContext(TabsContext)
  const isActive = selectedValue === value

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => setValue(value)}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-background text-foreground shadow-sm'
          : 'hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = forwardRef(({ className, value, children, ...props }, ref) => {
  const { value: selectedValue } = useContext(TabsContext)
  if (selectedValue !== value) return null

  return (
    <div
      ref={ref}
      role="tabpanel"
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  accordion: {
    name: 'accordion',
    deps: [
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/accordion/accordion.jsx',
        content: `import { forwardRef, createContext, useContext, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../../lib/utils.js'

const AccordionContext = createContext()
const AccordionItemContext = createContext()

function Accordion({ type = 'single', defaultValue, children, className, ...props }) {
  const [openValues, setOpenValues] = useState(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  )

  const toggleItem = (value) => {
    if (type === 'single') {
      setOpenValues((prev) => (prev.includes(value) ? [] : [value]))
    } else {
      setOpenValues((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ openValues, toggleItem, type }}>
      <div className={cn('divide-y divide-border rounded-lg border border-border', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}
Accordion.displayName = 'Accordion'

const AccordionItem = forwardRef(({ value, className, children, ...props }, ref) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div ref={ref} className={cn('', className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
})
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef(({ className, children, ...props }, ref) => {
  const { openValues, toggleItem } = useContext(AccordionContext)
  const { value } = useContext(AccordionItemContext)
  const isOpen = openValues.includes(value)

  return (
    <button
      ref={ref}
      onClick={() => toggleItem(value)}
      className={cn(
        'flex w-full items-center justify-between py-4 px-4 text-sm font-medium transition-all hover:underline text-left',
        className
      )}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          'size-4 shrink-0 text-muted-foreground transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  )
})
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = forwardRef(({ className, children, ...props }, ref) => {
  const { openValues } = useContext(AccordionContext)
  const { value } = useContext(AccordionItemContext)
  const isOpen = openValues.includes(value)

  return (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-96 pb-4' : 'max-h-0',
        className
      )}
      role="region"
      {...props}
    >
      <div className="px-4 text-sm text-muted-foreground">{children}</div>
    </div>
  )
})
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  avatar: {
    name: 'avatar',
    deps: [
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/avatar/avatar.jsx',
        content: `import { forwardRef, useState, useEffect } from 'react'
import { cn } from '../../../lib/utils.js'

const Avatar = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    />
  )
})
Avatar.displayName = 'Avatar'

const AvatarImage = forwardRef(({ className, src, alt = '', onError, ...props }, ref) => {
  const [error, setError] = useState(false)

  if (!src || error) return null

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={(e) => {
        setError(true)
        onError?.(e)
      }}
      className={cn('aspect-square h-full w-full object-cover', className)}
      {...props}
    />
  )
})
AvatarImage.displayName = 'AvatarImage'

const AvatarFallback = forwardRef(({ className, delayMs, children, ...props }, ref) => {
  const [show, setShow] = useState(!delayMs)

  useEffect(() => {
    if (!delayMs || show) return
    const id = setTimeout(() => setShow(true), delayMs)
    return () => clearTimeout(id)
  }, [delayMs, show])

  if (!show) return null

  return (
    <div
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
AvatarFallback.displayName = 'AvatarFallback'

export { Avatar, AvatarImage, AvatarFallback }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  alert: {
    name: 'alert',
    deps: [
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/alert/alert.jsx',
        content: `import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/utils.js'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        success: 'border-emerald-500/50 text-emerald-600 dark:border-emerald-500/50 dark:text-emerald-400 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400',
        warning: 'border-amber-500/50 text-amber-600 dark:border-amber-500/50 dark:text-amber-400 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Alert = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
})
Alert.displayName = 'Alert'

const AlertTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
})
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
})
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
}

const signinFormContent = `import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

export function SigninForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Sign In</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="/signup" className="underline">Sign Up</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}`

const signupFormContent = `import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

export function SignupForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Sign Up</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/signin" className="underline">Sign In</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}`

export const templates = {
  signin: {
    name: 'signin',
    deps: [],
    uiDeps: ['button', 'input', 'label', 'card'],
    files: [
      {
        path: 'components/templates/SigninForm.jsx',
        content: signinFormContent,
      },
    ],
  },
  signup: {
    name: 'signup',
    deps: [],
    uiDeps: ['button', 'input', 'label', 'card'],
    files: [
      {
        path: 'components/templates/SignupForm.jsx',
        content: signupFormContent,
      },
    ],
  },
}

export function getComponent(name) {
  return components[name.toLowerCase()]
}

export function getTemplate(name) {
  return templates[name.toLowerCase()]
}