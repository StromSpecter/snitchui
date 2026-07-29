import { Switch } from './switch.jsx'

export function SwitchDemo() {
  return (
    <div className="space-y-4">
      <label className="flex items-center gap-3 text-sm">
        <Switch />
        Enable notifications
      </label>
      <label className="flex items-center gap-3 text-sm">
        <Switch checked />
        Dark mode
      </label>
      <label className="flex items-center gap-3 text-sm">
        <Switch disabled />
        Auto-save
      </label>
    </div>
  )
}
