import { TimePicker } from './timepicker.jsx'

export function TimePickerDemo() {
  return (
    <div className="space-y-4">
      <TimePicker placeholder="Select time" />
      <TimePicker placeholder="Disabled time picker" disabled />
    </div>
  )
}
