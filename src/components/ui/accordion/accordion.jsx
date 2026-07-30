import { forwardRef, createContext, useContext, useState } from 'react'
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
      <div className={cn('divide-y divide-border/50 rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl', className)} {...props}>
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

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
