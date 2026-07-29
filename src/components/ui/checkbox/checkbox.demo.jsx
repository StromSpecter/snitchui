import { Checkbox } from './checkbox.jsx'

export function CheckboxDemo() {
  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox />
        Accept terms and conditions
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox checked />
        Subscribe to newsletter
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox disabled />
        Disable account
      </label>
    </div>
  )
}
