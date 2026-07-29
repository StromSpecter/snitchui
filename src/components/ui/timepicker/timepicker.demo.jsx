import { TimePicker } from './timepicker.jsx'
import { useState } from 'react'

export function TimePickerDemo() {
  const [time, setTime] = useState('')

  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Basic</h3>
        <TimePicker
          value={time}
          onChange={setTime}
          placeholder="Select time"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Selected: {time || 'none'}
        </p>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Default Value</h3>
        <TimePicker
          value="14:30:00"
          placeholder="Select time"
        />
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <div className="space-y-3">
          <TimePicker placeholder="Default" />
          <TimePicker placeholder="Disabled" disabled />
        </div>
      </section>
    </div>
  )
}
