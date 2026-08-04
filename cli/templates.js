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
    />
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
tooltip: {
    name: 'tooltip',
    deps: ['@radix-ui/react-tooltip', 'clsx', 'tailwind-merge'],
    files: [
      {
        path: 'components/ui/tooltip/tooltip.jsx',
        content: `import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = forwardRef(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 overflow-hidden rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
})
TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }`,
      },
    ],
    utils: { path: 'lib/utils.js', content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}` },
  },
  popover: {
    name: 'popover',
    deps: ['@radix-ui/react-popover', 'clsx', 'tailwind-merge'],
    files: [
      {
        path: 'components/ui/popover/popover.jsx',
        content: `import * as PopoverPrimitive from '@radix-ui/react-popover'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = forwardRef(({ className, align = 'center', sideOffset = 4, ...props }, ref) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-md border border-border bg-background p-4 text-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
})
PopoverContent.displayName = 'PopoverContent'

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }`,
      },
    ],
    utils: { path: 'lib/utils.js', content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}` },
  },
  toast: {
    name: 'toast',
    deps: ['sonner'],
    files: [
      {
        path: 'components/ui/toast/toaster.jsx',
        content: `import { Toaster as SonnerToaster } from 'sonner'

function Toaster() {
  return (
    <SonnerToaster
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
    />
  )
}

export { Toaster }`,
      },
    ],
    utils: null,
  },
  sheet: {
    name: 'sheet',
    deps: ['lucide-react', 'clsx', 'tailwind-merge'],
    files: [
      {
        path: 'components/ui/sheet/sheet.jsx',
        content: `import { forwardRef, createContext, useContext, useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../../lib/utils.js'

const SheetContext = createContext()

function Sheet({ open: controlledOpen, onOpenChange, children }) {
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
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}
Sheet.displayName = 'Sheet'

function SheetTrigger({ asChild, children, ...props }) {
  const { setOpen } = useContext(SheetContext)
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp onClick={() => setOpen(true)} {...props}>
      {children}
    </Comp>
  )
}
SheetTrigger.displayName = 'SheetTrigger'

function SheetClose({ children, ...props }) {
  const { setOpen } = useContext(SheetContext)
  return (
    <button onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}
SheetClose.displayName = 'SheetClose'

const SheetContent = forwardRef(
  ({ className, side = 'right', position = 'fixed', overlay = true, children, ...props }, ref) => {
    const { open, setOpen } = useContext(SheetContext)

    useEffect(() => {
      if (!open) return
      const handleEsc = (e) => {
        if (e.key === 'Escape') setOpen(false)
      }
      if (position === 'fixed') document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEsc)
      return () => {
        document.removeEventListener('keydown', handleEsc)
        if (position === 'fixed') document.body.style.overflow = ''
      }
    }, [open, setOpen, position])

    if (!open) return null

    return (
      <>
        {overlay && (
          <div
            className={cn(
              'z-50 bg-black/50 backdrop-blur-md animate-in fade-in-0 duration-200',
              position === 'fixed' ? 'fixed inset-0' : 'absolute inset-0'
            )}
            onClick={() => setOpen(false)}
          />
        )}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            'z-50 flex flex-col gap-4 bg-background p-6 shadow-lg',
            position === 'fixed' ? 'fixed' : 'absolute',
            side === 'top' && 'inset-x-0 top-0 max-h-full border-b animate-in slide-in-from-top duration-300',
            side === 'bottom' && 'inset-x-0 bottom-0 max-h-full border-t animate-in slide-in-from-bottom duration-300',
            side === 'left' && 'inset-y-0 left-0 h-full w-3/4 border-r max-w-sm animate-in slide-in-from-left duration-300',
            side === 'right' && 'inset-y-0 right-0 h-full w-3/4 border-l max-w-sm animate-in slide-in-from-right duration-300',
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
      </>
    )
  }
)
SheetContent.displayName = 'SheetContent'

const SheetHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-4', className)}
      {...props}
    />
  )
})
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4', className)}
      {...props}
    />
  )
})
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
})
SheetTitle.displayName = 'SheetTitle'

const SheetDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
SheetDescription.displayName = 'SheetDescription'

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}`,
      },
    ],
    utils: { path: 'lib/utils.js', content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}` },
  },
  command: {
    name: 'command',
    deps: ['cmdk', 'lucide-react', 'clsx', 'tailwind-merge'],
    files: [
      {
        path: 'components/ui/command/command.jsx',
        content: `import { forwardRef } from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import { cn } from '../../../lib/utils.js'

const Command = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-foreground',
        className
      )}
      {...props}
    />
  )
})
Command.displayName = 'Command'

const CommandInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
      <Search className="mr-2 size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  )
})
CommandInput.displayName = 'CommandInput'

const CommandList = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
      {...props}
    />
  )
})
CommandList.displayName = 'CommandList'

const CommandEmpty = forwardRef((props, ref) => {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-6 text-center text-sm text-muted-foreground"
      {...props}
    />
  )
})
CommandEmpty.displayName = 'CommandEmpty'

const CommandGroup = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        className
      )}
      {...props}
    />
  )
})
CommandGroup.displayName = 'CommandGroup'

const CommandSeparator = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 h-px bg-border', className)}
      {...props}
    />
  )
})
CommandSeparator.displayName = 'CommandSeparator'

const CommandItem = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        className
      )}
      {...props}
    />
  )
})
CommandItem.displayName = 'CommandItem'

const CommandShortcut = forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  )
})
CommandShortcut.displayName = 'CommandShortcut'

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}`,
      },
    ],
    utils: { path: 'lib/utils.js', content: `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}` },
  },
  pagination: {
    name: 'pagination',
    deps: [
      '@radix-ui/react-slot',
      'class-variance-authority',
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/pagination/pagination.jsx',
        content: `/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useState, useCallback } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from 'lucide-react'
import { cn } from '../../../lib/utils.js'

function range(start, end) {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

function paginate({ totalPages, page, siblingCount = 1, boundaryCount = 1 }) {
  const totalNumbers = siblingCount * 2 + boundaryCount * 2 + 1
  if (totalPages <= totalNumbers + 1) {
    return range(1, totalPages)
  }

  const leftSibling = Math.max(page - siblingCount, boundaryCount + 1)
  const rightSibling = Math.min(page + siblingCount, totalPages - boundaryCount)

  const showStartEllipsis = leftSibling > boundaryCount + 1
  const showEndEllipsis = rightSibling < totalPages - boundaryCount

  if (!showStartEllipsis && showEndEllipsis) {
    const leftCount = boundaryCount + siblingCount * 2
    return [...range(1, leftCount), 'end-ellipsis', totalPages]
  }

  if (showStartEllipsis && !showEndEllipsis) {
    const rightCount = boundaryCount + siblingCount * 2
    return [1, 'start-ellipsis', ...range(totalPages - rightCount + 1, totalPages)]
  }

  return [1, 'start-ellipsis', ...range(leftSibling, rightSibling), 'end-ellipsis', totalPages]
}

const Pagination = forwardRef(
  (
    {
      page: controlledPage,
      defaultPage = 1,
      totalPages,
      onPageChange,
      siblingCount = 1,
      boundaryCount = 1,
      showFirstLast = false,
      disabled = false,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledPage !== undefined
    const [uncontrolledPage, setUncontrolledPage] = useState(defaultPage)
    const page = isControlled ? controlledPage : uncontrolledPage

    const setPage = useCallback(
      (value) => {
        if (disabled) return
        const next = Math.min(Math.max(value, 1), totalPages)
        if (!isControlled) setUncontrolledPage(next)
        onPageChange?.(next)
      },
      [disabled, isControlled, onPageChange, totalPages]
    )

    const items = paginate({ totalPages, page, siblingCount, boundaryCount })

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn('mx-auto w-full', className)}
        {...props}
      >
        <PaginationContent size={size}>
          {showFirstLast && (
            <PaginationItem>
              <PaginationLink
                size="icon"
                disabled={disabled || page <= 1}
                onClick={() => setPage(1)}
                aria-label="Go to first page"
              >
                <ChevronsLeft className="size-4" />
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              size="icon"
              disabled={disabled || page <= 1}
              onClick={() => setPage(page - 1)}
              aria-label="Go to previous page"
            >
              <ChevronLeft className="size-4" />
            </PaginationLink>
          </PaginationItem>

          {items.map((item, i) =>
            typeof item === 'number' ? (
              <PaginationItem key={\`page-\${item}\`}>
                <PaginationLink
                  active={item === page}
                  disabled={disabled}
                  onClick={() => setPage(item)}
                  aria-label={\`Go to page \${item}\`}
                  aria-current={item === page ? 'page' : undefined}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ) : (
              <PaginationItem key={\`\${item}-\${i}\`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationLink
              size="icon"
              disabled={disabled || page >= totalPages}
              onClick={() => setPage(page + 1)}
              aria-label="Go to next page"
            >
              <ChevronRight className="size-4" />
            </PaginationLink>
          </PaginationItem>

          {showFirstLast && (
            <PaginationItem>
              <PaginationLink
                size="icon"
                disabled={disabled || page >= totalPages}
                onClick={() => setPage(totalPages)}
                aria-label="Go to last page"
              >
                <ChevronsRight className="size-4" />
              </PaginationLink>
            </PaginationItem>
          )}
        </PaginationContent>
      </nav>
    )
  }
)
Pagination.displayName = 'Pagination'

const PaginationContent = forwardRef(({ className, size = 'md', ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn(
        'flex items-center justify-center gap-1.5',
        size === 'sm' && 'gap-1',
        size === 'lg' && 'gap-2',
        className
      )}
      {...props}
    />
  )
})
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = forwardRef(({ className, ...props }, ref) => {
  return <li ref={ref} className={cn('', className)} {...props} />
})
PaginationItem.displayName = 'PaginationItem'

const paginationLinkVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-8 min-w-8 px-3 text-xs',
        md: 'h-9 min-w-9 px-4 text-sm',
        lg: 'h-10 min-w-10 px-5 text-base',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  }
)

const PaginationLink = forwardRef(
  ({ className, variant, size = 'md', active = false, asChild = false, disabled, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        onClick={(e) => {
          if (active || disabled) {
            e.preventDefault()
            return
          }
          onClick?.(e)
        }}
        className={cn(
          paginationLinkVariants({ variant: active ? 'default' : variant, size }),
          active && 'pointer-events-none',
          className
        )}
        {...props}
      />
    )
  }
)
PaginationLink.displayName = 'PaginationLink'

const PaginationEllipsis = forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4 text-muted-foreground" />
      <span className="sr-only">More pages</span>
    </span>
  )
})
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  paginationLinkVariants,
  paginate,
}`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  table: {
    name: 'table',
    requires: ['pagination'],
    deps: [
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    files: [
      {
        path: 'components/ui/table/table.jsx',
        content: `import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Table = forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
))
Table.displayName = 'Table'

const TableHeader = forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('[&_tr]:border-b', className)}
    {...props}
  />
))
TableHeader.displayName = 'TableHeader'

const TableBody = forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
))
TableBody.displayName = 'TableBody'

const TableFooter = forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
))
TableFooter.displayName = 'TableFooter'

const TableRow = forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b border-border/50 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
))
TableRow.displayName = 'TableRow'

const TableHead = forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-10 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap',
      className
    )}
    {...props}
  />
))
TableHead.displayName = 'TableHead'

const TableCell = forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('px-4 py-3 align-middle', className)}
    {...props}
  />
))
TableCell.displayName = 'TableCell'

const TableCaption = forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
}`,
      },
      {
        path: 'components/ui/table/data-table.jsx',
        content: `import { forwardRef, useState, useMemo, useEffect } from 'react'
import { ArrowDown, ArrowUp, ArrowUpDown, Search } from 'lucide-react'
import { cn } from '../../../lib/utils.js'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from './table.jsx'
import { Pagination } from '../pagination/pagination.jsx'

const getValue = (row, column) => {
  if (column.accessor) return column.accessor(row)
  return row[column.key]
}

const getAlign = (column) =>
  cn(
    column.align === 'center' && 'text-center',
    column.align === 'right' && 'text-right'
  )

const DataTable = forwardRef(
  (
    {
      columns,
      data = [],
      pageSize = 10,
      showPageSize = false,
      pageSizeOptions = [5, 10, 20, 50],
      searchPlaceholder = 'Search...',
      emptyMessage = 'No results found.',
      showActions = false,
      actions,
      actionsHeader = 'Actions',
      className,
      ...props
    },
    ref
  ) => {
    const [sort, setSort] = useState(null)
    const [searches, setSearches] = useState({})
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(pageSize)

    const handleSort = (key) => {
      setSort((prev) => {
        if (!prev || prev.key !== key) return { key, direction: 'asc' }
        if (prev.direction === 'asc') return { key, direction: 'desc' }
        return null
      })
      setPage(1)
    }

    const handleSearch = (key, value) => {
      setSearches((prev) => ({ ...prev, [key]: value }))
      setPage(1)
    }

    const filteredRows = useMemo(() => {
      let rows = data
      for (const column of columns) {
        if (!column.searchable) continue
        const query = String(searches[column.key] ?? '').trim().toLowerCase()
        if (!query) continue
        rows = rows.filter((row) =>
          String(getValue(row, column) ?? '')
            .toLowerCase()
            .includes(query)
        )
      }
      return rows
    }, [data, columns, searches])

    const sortedRows = useMemo(() => {
      if (!sort) return filteredRows
      const column = columns.find((c) => c.key === sort.key)
      if (!column) return filteredRows
      const direction = sort.direction === 'asc' ? 1 : -1
      return [...filteredRows].sort((a, b) => {
        const aValue = getValue(a, column)
        const bValue = getValue(b, column)
        if (column.sortFn) return column.sortFn(aValue, bValue) * direction
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return (aValue - bValue) * direction
        }
        return (
          String(aValue ?? '').localeCompare(String(bValue ?? ''), undefined, {
            numeric: true,
          }) * direction
        )
      })
    }, [filteredRows, sort, columns])

    const totalPages = Math.max(1, Math.ceil(sortedRows.length / size))

    useEffect(() => {
      if (page > totalPages) setPage(totalPages)
    }, [page, totalPages])

    const visibleRows = useMemo(() => {
      const start = (page - 1) * size
      return sortedRows.slice(start, start + size)
    }, [sortedRows, page, size])

    const startIndex = sortedRows.length === 0 ? 0 : (page - 1) * size + 1
    const endIndex = Math.min(page * size, sortedRows.length)

    return (
      <div
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      >
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={cn(column.width, getAlign(column))}
                >
                  <div className={cn('flex flex-col gap-1.5', getAlign(column))}>
                    <button
                      type="button"
                      disabled={!column.sortable}
                      onClick={() => handleSort(column.key)}
                      className={cn(
                        'inline-flex items-center gap-1 font-medium text-muted-foreground',
                        getAlign(column),
                        column.sortable
                          ? 'cursor-pointer select-none hover:text-foreground'
                          : 'cursor-default'
                      )}
                    >
                      {column.header}
                      {column.sortable &&
                        (sort?.key === column.key ? (
                          sort.direction === 'asc' ? (
                            <ArrowUp className="size-3.5" />
                          ) : (
                            <ArrowDown className="size-3.5" />
                          )
                        ) : (
                          <ArrowUpDown className="size-3.5 opacity-50" />
                        ))}
                    </button>

                    {column.searchable && (
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          value={searches[column.key] ?? ''}
                          onChange={(e) =>
                            handleSearch(column.key, e.target.value)
                          }
                          placeholder={searchPlaceholder}
                          aria-label={\`Search \${column.header}\`}
                          className="h-8 w-full min-w-[120px] rounded-md border border-input bg-background pl-7 pr-2 text-xs shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                      </div>
                    )}
                  </div>
                </TableHead>
              ))}

              {showActions && (
                <TableHead className="w-[80px] text-right">
                  <span className="inline-flex items-center justify-end font-medium text-muted-foreground">
                    {actionsHeader}
                  </span>
                </TableHead>
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {visibleRows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (showActions ? 1 : 0)}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              visibleRows.map((row, index) => (
                <TableRow key={row.id ?? index}>
                  {columns.map((column) => {
                    const value = getValue(row, column)
                    return (
                      <TableCell
                        key={column.key}
                        className={getAlign(column)}
                      >
                        {column.render ? column.render(value, row) : value}
                      </TableCell>
                    )
                  })}
                  {showActions && (
                    <TableCell className="whitespace-nowrap text-right">
                      {actions ? actions(row) : null}
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="whitespace-nowrap text-sm text-muted-foreground">
            Showing {startIndex}–{endIndex} of {sortedRows.length}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
            {showPageSize && (
              <label className="flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground">
                Rows per page
                <select
                  value={size}
                  onChange={(e) => {
                    setSize(Number(e.target.value))
                    setPage(1)
                  }}
                  className="h-8 rounded-md border border-input bg-background px-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {pageSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
              className="sm:mx-0"
            />
          </div>
        </div>
      </div>
    )
  }
)
DataTable.displayName = 'DataTable'

export { DataTable }`,
      },
    ],
    utils: {
      path: 'lib/utils.js',
      content: `import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`,
    },
  },
  chart: {
    name: 'chart',
    requires: [],
    deps: ['clsx', 'tailwind-merge'],
    files: [
      {
        path: 'components/ui/chart/chart.jsx',
        content: `/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '../../../lib/utils.js'

export const DEFAULT_PALETTE = [
  'var(--color-chart-1)',
  'var(--color-chart-2)',
  'var(--color-chart-3)',
  'var(--color-chart-4)',
  'var(--color-chart-5)',
]

export const CHART_MARGIN = { top: 12, right: 12, bottom: 30, left: 44 }

const NICE = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]

export function niceMax(value) {
  const v = Number(value)
  if (!Number.isFinite(v) || v <= 0) return 1
  const exp = Math.pow(10, Math.floor(Math.log10(v)))
  for (const n of NICE) if (n * exp >= v - 1e-9) return n * exp
  return 10 * exp
}

export function getTicks(max, count = 5) {
  const step = max / count
  return Array.from({ length: count + 1 }, (_, i) => Number((i * step).toFixed(2)))
}

export function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) }
}

export function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return \`M \${start.x} \${start.y} A \${r} \${r} 0 \${largeArc} 1 \${end.x} \${end.y}\`
}

export function wedgeSector(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, startAngle)
  const end = polarToCartesian(cx, cy, r, endAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return \`M \${cx} \${cy} L \${start.x} \${start.y} A \${r} \${r} 0 \${largeArc} 1 \${end.x} \${end.y} Z\`
}

export function annularSector(cx, cy, outerRadius, innerRadius, startAngle, endAngle) {
  const outerStart = polarToCartesian(cx, cy, outerRadius, startAngle)
  const outerEnd = polarToCartesian(cx, cy, outerRadius, endAngle)
  const innerStart = polarToCartesian(cx, cy, innerRadius, startAngle)
  const innerEnd = polarToCartesian(cx, cy, innerRadius, endAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return [
    \`M \${outerStart.x} \${outerStart.y}\`,
    \`A \${outerRadius} \${outerRadius} 0 \${largeArc} 1 \${outerEnd.x} \${outerEnd.y}\`,
    \`L \${innerEnd.x} \${innerEnd.y}\`,
    \`A \${innerRadius} \${innerRadius} 0 \${largeArc} 0 \${innerStart.x} \${innerStart.y}\`,
    'Z',
  ].join(' ')
}

export function linePath(points) {
  if (points.length < 2) return points.length ? \`M \${points[0].x} \${points[0].y}\` : ''
  return points.map((p, i) => \`\${i === 0 ? 'M' : 'L'} \${p.x} \${p.y}\`).join(' ')
}

export function smoothPath(points) {
  if (points.length < 2) return points.length ? \`M \${points[0].x} \${points[0].y}\` : ''
  return points.reduce((acc, p, i, arr) => {
    if (i === 0) return \`M \${p.x} \${p.y}\`
    const prev = arr[i - 1]
    const pprev = arr[i - 2] ?? prev
    const pnext = arr[i + 1] ?? p
    const c1x = prev.x + (p.x - pprev.x) / 6
    const c1y = prev.y + (p.y - pprev.y) / 6
    const c2x = p.x - (pnext.x - prev.x) / 6
    const c2y = p.y - (pnext.y - prev.y) / 6
    return \`\${acc} C \${c1x} \${c1y} \${c2x} \${c2y} \${p.x} \${p.y}\`
  }, '')
}

export function chartConfig(series, config = {}) {
  const merged = {}
  series.forEach((s, i) => {
    merged[s.key] = {
      label: config[s.key]?.label ?? s.label ?? s.key,
      color: config[s.key]?.color ?? s.color ?? DEFAULT_PALETTE[i % DEFAULT_PALETTE.length],
    }
  })
  return merged
}

export function legendItems(series, config) {
  return series.map((s) => ({
    label: config[s.key]?.label ?? s.label ?? s.key,
    color: \`var(--color-\${s.key})\`,
  }))
}

const ChartContext = createContext(null)

export function useChartContext() {
  const ctx = useContext(ChartContext)
  if (!ctx) {
    throw new Error('Chart components must be used inside a <ChartContainer>.')
  }
  return ctx
}

export function useChartSize() {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) setWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, width }
}

export function useCartesianScale({ width, height, data, maxValue, margin = CHART_MARGIN }) {
  return useMemo(() => {
    const innerW = Math.max(0, width - margin.left - margin.right)
    const innerH = Math.max(0, height - margin.top - margin.bottom)
    const yScale = (v) => margin.top + innerH - (v / maxValue) * innerH
    const bandWidth = data.length ? innerW / data.length : innerW
    const xCenter = (i) => margin.left + bandWidth * (i + 0.5)
    const xPoint = (i) =>
      data.length > 1
        ? margin.left + (i / (data.length - 1)) * innerW
        : margin.left + innerW / 2
    return { innerW, innerH, yScale, xCenter, xPoint, bandWidth }
  }, [width, height, data, maxValue, margin])
}

export function CartesianAxes({
  height,
  maxValue,
  xLabels,
  showGrid = true,
  formatValue,
  margin = CHART_MARGIN,
}) {
  const { width } = useChartContext()
  const ticks = getTicks(maxValue)
  const innerH = height - margin.top - margin.bottom
  const y = (v) => margin.top + innerH - (v / maxValue) * innerH

  return (
    <g>
      {showGrid &&
        ticks.map((t) => (
          <line
            key={\`grid-\${t}\`}
            x1={margin.left}
            x2={width - margin.right}
            y1={y(t)}
            y2={y(t)}
            stroke="currentColor"
            className="text-border/40"
            strokeWidth="1"
            strokeDasharray={t === 0 ? undefined : '3 4'}
          />
        ))}
      {ticks.map((t) => (
        <text
          key={\`tick-\${t}\`}
          x={margin.left - 8}
          y={y(t)}
          textAnchor="end"
          dominantBaseline="middle"
          fontSize="10"
          className="fill-muted-foreground"
        >
          {formatValue ? formatValue(t) : t}
        </text>
      ))}
      <line
        x1={margin.left}
        x2={width - margin.right}
        y1={y(0)}
        y2={y(0)}
        stroke="currentColor"
        className="text-border"
        strokeWidth="1"
      />
      {xLabels &&
        xLabels.map(({ x, label }) => (
          <text
            key={\`x-\${label}-\${x}\`}
            x={x}
            y={height - margin.bottom / 2}
            textAnchor="middle"
            fontSize="10"
            className="fill-muted-foreground"
          >
            {label}
          </text>
        ))}
    </g>
  )
}

const ChartContainer = forwardRef(({ config = {}, formatValue, className, children, ...props }, ref) => {
  const { ref: sizeRef, width } = useChartSize()
  const [hover, setHover] = useState(null)

  const styleVars = useMemo(() => {
    const vars = {}
    Object.entries(config).forEach(([key, entry], i) => {
      vars[\`--color-\${key}\`] = entry?.color ?? DEFAULT_PALETTE[i % DEFAULT_PALETTE.length]
    })
    return vars
  }, [config])

  const value = useMemo(
    () => ({
      width,
      config,
      formatValue: formatValue ?? ((v) => String(v)),
      showTooltip: setHover,
      hideTooltip: () => setHover(null),
    }),
    [width, config, formatValue]
  )

  return (
    <ChartContext.Provider value={value}>
      <div
        ref={(node) => {
          sizeRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        className={cn('relative w-full', className)}
        style={styleVars}
        {...props}
      >
        {children}
        {hover && <ChartTooltip {...hover} />}
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = 'ChartContainer'

const ChartTooltip = forwardRef(({ x, y, label, rows = [], className, ...props }, ref) => {
  const { width } = useChartContext()
  const flip = x > width * 0.55
  return (
    <div
      ref={ref}
      className={cn(
        'chart-tooltip pointer-events-none absolute z-50 min-w-[9rem] rounded-md border border-border/60 bg-card/95 px-3 py-2 text-xs shadow-lg backdrop-blur-sm',
        className
      )}
      style={{
        left: x,
        top: y,
        transform: \`translate(\${flip ? 'calc(-100% - 12px)' : '12px'}, -50%)\`,
      }}
      {...props}
    >
      {label != null && label !== '' && (
        <p className="mb-1.5 font-medium text-muted-foreground">{label}</p>
      )}
      <div className="space-y-1">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ background: row.color }}
            />
            <span className="text-muted-foreground">{row.label}</span>
            <span className="ml-auto pl-4 font-medium tabular-nums text-foreground">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})
ChartTooltip.displayName = 'ChartTooltip'

const ChartLegend = forwardRef(({ items = [], className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex select-none flex-wrap items-center justify-center gap-x-4 gap-y-1.5', className)}
    {...props}
  >
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span className="size-2.5 rounded-full ring-1 ring-border/40" style={{ background: item.color }} />
        {item.label}
      </span>
    ))}
  </div>
))
ChartLegend.displayName = 'ChartLegend'

export { ChartContainer, ChartTooltip, ChartLegend }
`,
      },
      {
        path: 'components/ui/chart/bar-chart.jsx',
        content: `import { cn } from '../../../lib/utils.js'
import {
  CartesianAxes,
  ChartLegend,
  useCartesianScale,
  useChartSize,
  useChartContext,
  niceMax,
} from './chart.jsx'
import { getValue, resolveColor } from './helpers.js'

export function BarChart({
  data = [],
  config,
  height = 260,
  showTooltip = true,
  showLegend = false,
  stacked = false,
  radius = 4,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const seriesConfig = config ?? ctx.config
  const series = Object.entries(seriesConfig)
  const keys = series.map(([key]) => key)

  const maxValue = niceMax(
    Math.max(
      1,
      ...data.map((d) =>
        stacked
          ? keys.reduce((sum, k) => sum + getValue(d, k, 0), 0)
          : Math.max(0, ...keys.map((k) => getValue(d, k, 0)))
      )
    )
  )

  const scale = useCartesianScale({ width, height, data, maxValue })

  const xLabels = data.map((d, i) => ({
    x: scale.xCenter(i),
    label: String(d?.label ?? d?.name ?? i),
  }))

  const buildTooltip = (i, x, y) => {
    const d = data[i]
    if (!d || !showTooltip) return
    ctx.showTooltip({
      x,
      y,
      label: d?.label ?? d?.name,
      rows: keys.map((key, s) => ({
        label: seriesConfig[key]?.label ?? key,
        color: resolveColor(key, seriesConfig[key], s),
        value: ctx.formatValue(getValue(d, key, i)),
      })),
    })
  }

  const onLeave = () => ctx.hideTooltip()

  const onBarMove = (e, i) => {
    if (!showTooltip) return
    const el = e.currentTarget
    const svg = el.ownerSVGElement
    const c = svg.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    buildTooltip(i, r.left - c.left + r.width / 2, r.top - c.top + r.height / 2)
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      {showLegend && (
        <ChartLegend
          className="mb-2"
          items={keys.map((key, s) => ({
            label: seriesConfig[key]?.label ?? key,
            color: resolveColor(key, seriesConfig[key], s),
          }))}
        />
      )}
      <svg width={width} height={height} className="block overflow-visible">
        <CartesianAxes
          height={height}
          maxValue={maxValue}
          xLabels={xLabels}
          formatValue={ctx.formatValue}
        />
        {keys.length === 0 ? null : (
          <>
            {data.map((d, i) => {
              if (stacked) {
                let offset = 0
                return keys.map((key, s) => {
                  const value = Math.max(0, getValue(d, key, i))
                  const y0 = scale.yScale(offset)
                  const y1 = scale.yScale(offset + value)
                  offset += value
                  return (
                    <rect
                      key={\`\${i}-\${key}\`}
                      className="chart-bar transition-opacity duration-150 hover:opacity-80"
                      x={scale.xCenter(i) - scale.bandWidth / 2 + 2}
                      y={y1}
                      width={Math.max(1, scale.bandWidth - 4)}
                      height={Math.max(0, y0 - y1)}
                      rx={radius}
                      fill={resolveColor(key, seriesConfig[key], s)}
                      style={{ cursor: showTooltip ? 'pointer' : 'default' }}
                      onPointerMove={(e) => onBarMove(e, i)}
                      onPointerLeave={onLeave}
                    />
                  )
                })
              }
              const gap = 4
              const barWidth = Math.max(2, (scale.bandWidth - gap * (keys.length - 1)) / keys.length)
              const groupX = scale.xCenter(i) - scale.bandWidth / 2
              return keys.map((key, s) => {
                const value = Math.max(0, getValue(d, key, i))
                const y = scale.yScale(value)
                return (
                  <rect
                    key={\`\${i}-\${key}\`}
                    className="chart-bar transition-opacity duration-150 hover:opacity-80"
                    x={groupX + s * (barWidth + gap)}
                    y={y}
                    width={barWidth}
                    height={Math.max(0, scale.yScale(0) - y)}
                    rx={radius}
                    fill={resolveColor(key, seriesConfig[key], s)}
                    style={{ cursor: showTooltip ? 'pointer' : 'default' }}
                    onPointerMove={(e) => onBarMove(e, i)}
                    onPointerLeave={onLeave}
                  />
                )
              })
            })}
          </>
        )}
      </svg>
    </div>
  )
}
`,
      },
      {
        path: 'components/ui/chart/line-chart.jsx',
        content: `import { useId, useState } from 'react'
import { cn } from '../../../lib/utils.js'
import {
  CartesianAxes,
  ChartLegend,
  CHART_MARGIN,
  useCartesianScale,
  useChartSize,
  useChartContext,
  niceMax,
  linePath,
  smoothPath,
} from './chart.jsx'
import { getValue, resolveColor, clamp } from './helpers.js'

export function LineChart(props) {
  return <LineBase {...props} area={false} />
}

export function AreaChart(props) {
  return <LineBase {...props} area />
}

function LineBase({
  data = [],
  config,
  height = 260,
  showTooltip = true,
  showLegend = false,
  showDots = true,
  area = false,
  curve = 'smooth',
  strokeWidth = 2,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const gradientId = useId()
  const seriesConfig = config ?? ctx.config
  const series = Object.entries(seriesConfig)
  const keys = series.map(([key]) => key)

  const maxValue = niceMax(
    Math.max(
      1,
      ...data.map((d) => Math.max(0, ...keys.map((k) => getValue(d, k, 0))))
    )
  )

  const scale = useCartesianScale({ width, height, data, maxValue })
  const pathFn = curve === 'straight' ? linePath : smoothPath

  const points = keys.map((key) =>
    data.map((d, i) => ({
      x: scale.xPoint(i),
      y: scale.yScale(getValue(d, key, i)),
    }))
  )

  const xLabels = data.map((d, i) => ({
    x: scale.xPoint(i),
    label: String(d?.label ?? d?.name ?? i),
  }))

  const [activeIndex, setActiveIndex] = useState(null)

  const onMove = (e) => {
    if (!showTooltip) return
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = clamp(e.clientX - rect.left, 0, scale.innerW)
    const idx =
      data.length > 1
        ? clamp(Math.round((relX / scale.innerW) * (data.length - 1)), 0, data.length - 1)
        : 0
    setActiveIndex(idx)
    const d = data[idx]
    const py = Math.min(
      ...keys.map((k) => scale.yScale(getValue(d, k, idx)))
    )
    ctx.showTooltip({
      x: scale.xPoint(idx),
      y: py,
      label: d?.label ?? d?.name,
      rows: keys.map((key, s) => ({
        label: seriesConfig[key]?.label ?? key,
        color: resolveColor(key, seriesConfig[key], s),
        value: ctx.formatValue(getValue(d, key, idx)),
      })),
    })
  }

  const onLeave = () => {
    ctx.hideTooltip()
    setActiveIndex(null)
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      {showLegend && (
        <ChartLegend
          className="mb-2"
          items={keys.map((key, s) => ({
            label: seriesConfig[key]?.label ?? key,
            color: resolveColor(key, seriesConfig[key], s),
          }))}
        />
      )}
      <svg width={width} height={height} className="block overflow-visible">
        {area && (
          <defs>
            {series.map(([key], s) => (
              <linearGradient
                key={key}
                id={\`\${gradientId}-\${s}\`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={resolveColor(key, seriesConfig[key], s)}
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor={resolveColor(key, seriesConfig[key], s)}
                  stopOpacity="0"
                />
              </linearGradient>
            ))}
          </defs>
        )}
        <CartesianAxes
          height={height}
          maxValue={maxValue}
          xLabels={xLabels}
          formatValue={ctx.formatValue}
        />
        {keys.map((key, s) => {
          const pts = points[s]
          const color = resolveColor(key, seriesConfig[key], s)
          const d = pathFn(pts)
          const baselineY = scale.yScale(0)
          return (
            <g key={key}>
              {area && (
                <path
                  d={\`\${d} L \${pts[pts.length - 1].x} \${baselineY} L \${pts[0].x} \${baselineY} Z\`}
                  fill={\`url(#\${gradientId}-\${s})\`}
                />
              )}
              <path
                className="chart-line"
                pathLength="1"
                d={d}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {showDots &&
                pts.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={3.5}
                    fill={color}
                    stroke="var(--color-background)"
                    strokeWidth={2}
                  />
                ))}
            </g>
          )
        })}
        {activeIndex != null && showTooltip && (
          <line
            x1={scale.xPoint(activeIndex)}
            x2={scale.xPoint(activeIndex)}
            y1={CHART_MARGIN.top}
            y2={CHART_MARGIN.top + scale.innerH}
            stroke="currentColor"
            className="text-border/80"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        )}
        {activeIndex != null &&
          showTooltip &&
          keys.map((key, s) => {
            const color = resolveColor(key, seriesConfig[key], s)
            const p = points[s][activeIndex]
            return (
              <circle
                key={\`active-\${key}\`}
                cx={p.x}
                cy={p.y}
                r={5}
                fill={color}
                stroke="var(--color-background)"
                strokeWidth={2.5}
                className="pointer-events-none"
              />
            )
          })}
        {showTooltip && (
          <rect
            x={CHART_MARGIN.left}
            y={CHART_MARGIN.top}
            width={scale.innerW}
            height={scale.innerH}
            fill="transparent"
            style={{ cursor: 'crosshair' }}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
          />
        )}
      </svg>
    </div>
  )
}
`,
      },
      {
        path: 'components/ui/chart/pie-chart.jsx',
        content: `import { useMemo, useState } from 'react'
import { cn } from '../../../lib/utils.js'
import {
  ChartLegend,
  useChartSize,
  useChartContext,
  polarToCartesian,
  wedgeSector,
  annularSector,
} from './chart.jsx'
import { getValue, resolveColor } from './helpers.js'

export function PieChart({
  data = [],
  config,
  height = 260,
  showTooltip = true,
  showLegend = true,
  innerRadius = 0,
  padAngle = 2,
  centerLabel,
  centerValue,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const resolvedConfig = config ?? ctx.config
  const [active, setActive] = useState(null)
  const cx = width / 2
  const cy = height / 2
  const radius = Math.max(0, Math.min(width, height) / 2 - 16)
  const total = data.reduce((sum, d, i) => sum + Math.abs(getValue(d, 'value', i)), 0)

  const items = useMemo(() => {
    let angle = 0
    const list = []
    for (let i = 0; i < data.length; i++) {
      const d = data[i]
      const raw = Math.abs(getValue(d, 'value', i))
      const sweep = total > 0 ? (raw / total) * 360 : 0
      const pad = raw > 0 ? Math.min(padAngle, sweep / 2) : 0
      const start = angle + pad
      const end = angle + sweep - pad
      const finalEnd = i === data.length - 1 && pad > 0 ? 360 : end
      const mid = (start + finalEnd) / 2
      const midR = innerRadius > 0 ? (innerRadius + radius) / 2 : radius * 0.66
      const { x, y } = polarToCartesian(cx, cy, midR, mid)
      const key = d?.key ?? d?.label ?? d?.name ?? i
      const path =
        raw > 0
          ? innerRadius > 0
            ? annularSector(cx, cy, radius, innerRadius, start, finalEnd)
            : wedgeSector(cx, cy, radius, start, finalEnd)
          : ''
      list.push({
        d,
        index: i,
        path,
        x,
        y,
        raw,
        key,
        label: resolvedConfig[key]?.label ?? d?.label ?? d?.name ?? key,
        color: resolveColor(key, resolvedConfig[key]),
      })
      angle += sweep
    }
    return list
  }, [data, resolvedConfig, total, radius, innerRadius, padAngle, cx, cy])

  const onMove = (e, item) => {
    if (!showTooltip) return
    ctx.showTooltip({
      x: item.x,
      y: item.y,
      rows: [
        {
          label: item.label,
          color: item.color,
          value: \`\${ctx.formatValue(item.raw)}\${
            total > 0 ? \` (\${((item.raw / total) * 100).toFixed(1)}%)\` : ''
          }\`,
        },
      ],
    })
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      <div className="relative mx-auto" style={{ width, height }}>
        <svg width={width} height={height} className="block">
          {items.map(
            (item) =>
              item.path && (
                <path
                  key={item.key}
                  d={item.path}
                  fill={item.color}
                  stroke="var(--color-background)"
                  strokeWidth="1.5"
                  className="transition-opacity duration-150"
                  style={{
                    cursor: 'pointer',
                    opacity: active != null && active !== item.index ? 0.45 : 1,
                  }}
                  onPointerEnter={() => setActive(item.index)}
                  onPointerMove={(e) => onMove(e, item)}
                  onPointerLeave={() => {
                    setActive(null)
                    ctx.hideTooltip()
                  }}
                />
              )
          )}
        </svg>
        {innerRadius > 0 && (centerValue || centerLabel) && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            {centerValue && (
              <span className="text-3xl font-semibold tabular-nums">{centerValue}</span>
            )}
            {centerLabel && (
              <span className="mt-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {centerLabel}
              </span>
            )}
          </div>
        )}
      </div>
      {showLegend && (
        <ChartLegend
          className="mt-3"
          items={items.map((item) => ({ label: item.label, color: item.color }))}
        />
      )}
    </div>
  )
}
`,
      },
      {
        path: 'components/ui/chart/radar-chart.jsx',
        content: `import { cn } from '../../../lib/utils.js'
import {
  ChartLegend,
  useChartSize,
  useChartContext,
  polarToCartesian,
  niceMax,
} from './chart.jsx'
import { getValue, resolveColor } from './helpers.js'

export function RadarChart({
  data = [],
  config,
  height = 280,
  showTooltip = true,
  showLegend = true,
  showDots = true,
  levels = 4,
  strokeWidth = 2,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const seriesConfig = config ?? ctx.config
  const series = Object.entries(seriesConfig)
  const keys = series.map(([key]) => key)

  const cx = width / 2
  const cy = height / 2 - 6
  const radius = Math.max(0, Math.min(width, height) / 2 - 34)
  const n = data.length
  const per = n > 0 ? 360 / n : 360
  const angleFor = (i) => -90 + i * per

  const maxValue = niceMax(
    Math.max(
      1,
      ...data.map((d) => Math.max(0, ...keys.map((k) => getValue(d, k, 0))))
    )
  )

  const vertex = (i, v) => {
    const r = maxValue > 0 ? (v / maxValue) * radius : 0
    return polarToCartesian(cx, cy, r, angleFor(i))
  }

  const ring = (level) =>
    Array.from({ length: n }, (_, i) =>
      polarToCartesian(cx, cy, (radius * level) / levels, angleFor(i))
    )

  const onMove = (e) => {
    if (!showTooltip) return
    const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect()
    const mx = e.clientX - svgRect.left
    const my = e.clientY - svgRect.top
    let angle = (Math.atan2(mx - cx, cy - my) * 180) / Math.PI
    if (angle < 0) angle += 360
    const idx = n > 0 ? Math.round(angle / per) % n : 0
    const d = data[idx]
    if (!d) return
    ctx.showTooltip({
      x: mx,
      y: my,
      label: d?.label ?? d?.name,
      rows: keys.map((key, s) => ({
        label: seriesConfig[key]?.label ?? key,
        color: resolveColor(key, seriesConfig[key], s),
        value: ctx.formatValue(getValue(d, key, idx)),
      })),
    })
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      <svg width={width} height={height} className="block overflow-visible">
        {n > 0 && (
          <>
            <g>
              {ring(levels).map((p, i) => (
                <line
                  key={\`axis-\${i}\`}
                  x1={cx}
                  y1={cy}
                  x2={p.x}
                  y2={p.y}
                  stroke="currentColor"
                  className="text-border/60"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: levels }, (_, l) => (
                <polygon
                  key={\`ring-\${l}\`}
                  points={ring(l + 1)
                    .map((p) => \`\${p.x},\${p.y}\`)
                    .join(' ')}
                  fill="none"
                  stroke="currentColor"
                  className="text-border/60"
                  strokeWidth="1"
                />
              ))}
              {data.map((d, i) => {
                const { x, y } = polarToCartesian(cx, cy, radius + 14, angleFor(i))
                return (
                  <text
                    key={\`label-\${i}\`}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    className="fill-muted-foreground"
                  >
                    {String(d?.label ?? d?.name ?? i)}
                  </text>
                )
              })}
            </g>
            {keys.map((key, s) => {
              const pts = data.map((d, i) => vertex(i, getValue(d, key, i)))
              const color = resolveColor(key, seriesConfig[key], s)
              return (
                <g
                  key={key}
                  onPointerMove={onMove}
                  onPointerLeave={ctx.hideTooltip}
                  style={{ cursor: showTooltip ? 'crosshair' : 'default' }}
                >
                  <polygon
                    points={pts.map((p) => \`\${p.x},\${p.y}\`).join(' ')}
                    fill={color}
                    fillOpacity="0.18"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                  />
                  {showDots &&
                    pts.map((p, i) => (
                      <circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r={3}
                        fill={color}
                        stroke="var(--color-background)"
                        strokeWidth="1.5"
                      />
                    ))}
                </g>
              )
            })}
          </>
        )}
      </svg>
      {showLegend && (
        <ChartLegend
          className="mt-2"
          items={keys.map((key, s) => ({
            label: seriesConfig[key]?.label ?? key,
            color: resolveColor(key, seriesConfig[key], s),
          }))}
        />
      )}
    </div>
  )
}
`,
      },
      {
        path: 'components/ui/chart/radial-chart.jsx',
        content: `import { cn } from '../../../lib/utils.js'
import {
  useChartSize,
  useChartContext,
  describeArc,
} from './chart.jsx'
import { resolveColor, clamp } from './helpers.js'

export function RadialChart({
  value = 0,
  min = 0,
  max = 100,
  config,
  height = 200,
  showTooltip = true,
  showValue = true,
  showLabel = false,
  label,
  strokeWidth = 10,
  trackColor = 'var(--color-border)',
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const resolvedConfig = config ?? ctx.config
  const progress = clamp((value - min) / (max - min), 0, 1) * 360
  const cx = width / 2
  const cy = height / 2
  const radius = Math.max(0, Math.min(width, height) / 2 - strokeWidth / 2 - 4)
  const entries = Object.entries(resolvedConfig)
  const color = resolveColor(entries[0]?.[0] ?? 'value', entries[0]?.[1], 0)
  const arc = progress > 359.9 ? null : describeArc(cx, cy, radius, 0, progress)

  const onMove = (e) => {
    if (!showTooltip) return
    const rect = e.currentTarget.getBoundingClientRect()
    ctx.showTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      rows: [
        {
          label: label ?? entries[0]?.[1]?.label ?? 'Value',
          color,
          value: ctx.formatValue(value),
        },
      ],
    })
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={ctx.hideTooltip}
      className={cn('relative mx-auto w-full text-foreground', className)}
      style={{ width, height }}
      {...props}
    >
      <svg width={width} height={height} className="block">
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {arc ? (
          <path
            d={arc}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        ) : (
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        )}
      </svg>
      {(showValue || showLabel) && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          {showValue && (
            <span className="text-2xl font-semibold tabular-nums">
              {ctx.formatValue(value)}
            </span>
          )}
          {showLabel && (
            <span className="text-xs text-muted-foreground">
              {label ?? entries[0]?.[1]?.label ?? 'Value'}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
`,
      },
      {
        path: 'components/ui/chart/scatter-chart.jsx',
        content: `import { cn } from '../../../lib/utils.js'
import {
  CartesianAxes,
  ChartLegend,
  CHART_MARGIN,
  useChartContext,
  niceMax,
} from './chart.jsx'
import { useChartSize } from './chart.jsx'
import { getValue, resolveColor } from './helpers.js'

export function ScatterChart({
  data = [],
  config,
  height = 260,
  showTooltip = true,
  showLegend = false,
  pointSize = 7,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const series = Object.entries(config ?? ctx.config)
  const key = series[0]?.[0] ?? 'point'
  const color = resolveColor(key, series[0]?.[1], 0)
  const label = series[0]?.[1]?.label ?? 'Series'

  const xs = data.map((d, i) => getValue(d, 'x', i))
  const xMin = xs.length ? Math.min(...xs) : 0
  const xMax = xs.length ? Math.max(...xs) : 1
  const yMax = niceMax(Math.max(1, ...data.map((d, i) => getValue(d, 'y', i))))

  const innerW = Math.max(0, width - CHART_MARGIN.left - CHART_MARGIN.right)
  const innerH = Math.max(0, height - CHART_MARGIN.top - CHART_MARGIN.bottom)
  const xScale = (v) => CHART_MARGIN.left + ((v - xMin) / (xMax - xMin || 1)) * innerW
  const yScale = (v) => CHART_MARGIN.top + innerH - (v / yMax) * innerH

  const xLabels = Array.from({ length: 4 }, (_, i) => {
    const t = xMin + (i / 3) * (xMax - xMin)
    return { x: xScale(t), label: Number(t.toFixed(2)) }
  })

  const onMove = (e, d, i) => {
    if (!showTooltip) return
    const el = e.currentTarget
    const svg = el.ownerSVGElement
    const c = svg.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    ctx.showTooltip({
      x: r.left - c.left + r.width / 2,
      y: r.top - c.top + r.height / 2,
      label: d?.label ?? d?.name,
      rows: [
        {
          label,
          color,
          value: \`x: \${ctx.formatValue(getValue(d, 'x', i))}, y: \${ctx.formatValue(
            getValue(d, 'y', i)
          )}\`,
        },
      ],
    })
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      {showLegend && (
        <ChartLegend className="mb-2" items={[{ label, color }]} />
      )}
      <svg width={width} height={height} className="block overflow-visible">
        <CartesianAxes
          height={height}
          maxValue={yMax}
          xLabels={xLabels}
          formatValue={ctx.formatValue}
        />
        {data.map((d, i) => (
          <circle
            key={i}
            cx={xScale(getValue(d, 'x', i))}
            cy={yScale(getValue(d, 'y', i))}
            r={pointSize}
            fill={color}
            stroke="var(--color-background)"
            strokeWidth="1.5"
            style={{ cursor: showTooltip ? 'pointer' : 'default' }}
            onPointerMove={(e) => onMove(e, d, i)}
            onPointerLeave={ctx.hideTooltip}
          />
        ))}
      </svg>
    </div>
  )
}
`,
      },
      {
        path: 'components/ui/chart/helpers.js',
        content: `import { DEFAULT_PALETTE } from './chart.jsx'

export function getValue(datum, key, index) {
  if (datum == null) return 0
  if (typeof datum !== 'object') return Number(datum) || 0
  const v = datum[key]
  return typeof v === 'function' ? v(datum, index) : Number(v) || 0
}

export function resolveColor(key, entry) {
  if (entry?.color) {
    if (typeof entry.color === 'number') {
      return DEFAULT_PALETTE[Math.abs(entry.color) % DEFAULT_PALETTE.length]
    }
    return entry.color
  }
  return \`var(--color-\${key})\`
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}
`,
      },
    ],
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

const forgotPasswordFormContent = `import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

export function ForgotPasswordForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot password?</CardTitle>
          <CardDescription>
            Enter your email below and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <Button type="submit" className="w-full">Send Reset Link</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Remembered your password?{" "}
            <a href="/signin" className="underline">Back to Sign In</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}`

const resetPasswordFormContent = `import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

export function ResetPasswordForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Reset password</CardTitle>
          <CardDescription>
            Enter your new password below to reset your account password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm Password</Label>
                <Input id="confirm" type="password" required />
              </div>
              <Button type="submit" className="w-full">Reset Password</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Remembered your password?{" "}
            <a href="/signin" className="underline">Back to Sign In</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}`

const checkEmailFormContent = `import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function CheckEmailForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </div>
          <CardTitle className="text-2xl">Check your email</CardTitle>
          <CardDescription>
            We've sent a password reset link to your email. Check your inbox to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full">Open Email App</Button>
          <Button variant="outline" className="w-full">Resend Email</Button>
        </CardContent>
        <p className="px-6 pb-6 text-center text-sm text-muted-foreground">
          <a href="/signin" className="underline">Back to Sign In</a>
        </p>
      </Card>
    </div>
  )
}`

const verifyEmailFormContent = `import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function VerifyEmailForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </div>
          <CardTitle className="text-2xl">Verify your email</CardTitle>
          <CardDescription>
            We sent a verification link to your email address. Click the link to activate your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full">Resend Verification Email</Button>
        </CardContent>
        <p className="px-6 pb-6 text-center text-sm text-muted-foreground">
          Already verified?{" "}
          <a href="/signin" className="underline">Sign In</a>
        </p>
      </Card>
    </div>
  )
}`

const emailVerifiedFormContent = `import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function EmailVerifiedForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
          </div>
          <CardTitle className="text-2xl">Email verified</CardTitle>
          <CardDescription>
            Your email has been verified successfully. You can now continue to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full">Continue to Dashboard</Button>
          <Button variant="outline" className="w-full">Go to Sign In</Button>
        </CardContent>
      </Card>
    </div>
  )
}`

const otpVerificationFormContent = `import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function OtpVerificationForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Enter verification code</CardTitle>
          <CardDescription>
            We've sent a 6-digit code to your email. Enter it below to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="flex justify-center gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <Input
                    key={i}
                    maxLength={1}
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    className="h-12 w-12 text-center text-lg"
                    aria-label={\`Digit \${i + 1}\`}
                  />
                ))}
              </div>
              <Button type="submit" className="w-full">Verify Code</Button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <a href="#" className="underline">Resend Code</a>
          </p>
        </CardContent>
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
  'forgot-password': {
    name: 'forgot-password',
    deps: [],
    uiDeps: ['button', 'input', 'label', 'card'],
    files: [
      {
        path: 'components/templates/ForgotPasswordForm.jsx',
        content: forgotPasswordFormContent,
      },
    ],
  },
  'reset-password': {
    name: 'reset-password',
    deps: [],
    uiDeps: ['button', 'input', 'label', 'card'],
    files: [
      {
        path: 'components/templates/ResetPasswordForm.jsx',
        content: resetPasswordFormContent,
      },
    ],
  },
  'check-email': {
    name: 'check-email',
    deps: [],
    uiDeps: ['button', 'card'],
    files: [
      {
        path: 'components/templates/CheckEmailForm.jsx',
        content: checkEmailFormContent,
      },
    ],
  },
  'verify-email': {
    name: 'verify-email',
    deps: [],
    uiDeps: ['button', 'card'],
    files: [
      {
        path: 'components/templates/VerifyEmailForm.jsx',
        content: verifyEmailFormContent,
      },
    ],
  },
  'email-verified': {
    name: 'email-verified',
    deps: [],
    uiDeps: ['button', 'card'],
    files: [
      {
        path: 'components/templates/EmailVerifiedForm.jsx',
        content: emailVerifiedFormContent,
      },
    ],
  },
  'otp-verification': {
    name: 'otp-verification',
    deps: [],
    uiDeps: ['button', 'input', 'card'],
    files: [
      {
        path: 'components/templates/OtpVerificationForm.jsx',
        content: otpVerificationFormContent,
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