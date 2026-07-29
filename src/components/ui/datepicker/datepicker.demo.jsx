import { DatePicker } from './datepicker.jsx'

export function DatePickerDemo() {
  return (
    <div className="space-y-4">
      <DatePicker placeholder="Pick a date" />
      <DatePicker placeholder="Disabled date picker" disabled />
    </div>
  )
}
