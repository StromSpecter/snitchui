import { DatePicker } from './datepicker.jsx'
import { useState } from 'react'

export function DatePickerDemo() {
  const [date, setDate] = useState('')

  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Basic</h3>
        <DatePicker
          value={date}
          onChange={setDate}
          placeholder="Pick a date"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Selected: {date || 'none'}
        </p>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Default Value</h3>
        <DatePicker
          value="2026-07-15"
          placeholder="Pick a date"
        />
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <div className="space-y-3">
          <DatePicker placeholder="Default" />
          <DatePicker placeholder="Disabled" disabled />
        </div>
      </section>
    </div>
  )
}
