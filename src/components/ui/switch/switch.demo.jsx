import { Switch } from './switch.jsx'

export function SwitchDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Toggles</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 text-sm cursor-pointer">
            <Switch />
            <span>Enable notifications</span>
          </label>
          <label className="flex items-center gap-3 text-sm cursor-pointer">
            <Switch defaultChecked />
            <span>Dark mode</span>
          </label>
          <label className="flex items-center gap-3 text-sm cursor-pointer">
            <Switch defaultChecked />
            <span>Auto-save</span>
          </label>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 text-sm cursor-pointer">
            <Switch />
            <span>Off</span>
          </label>
          <label className="flex items-center gap-3 text-sm cursor-pointer">
            <Switch defaultChecked />
            <span>On</span>
          </label>
          <label className="flex items-center gap-3 text-sm cursor-not-allowed">
            <Switch disabled />
            <span className="text-muted-foreground">Disabled (off)</span>
          </label>
          <label className="flex items-center gap-3 text-sm cursor-not-allowed">
            <Switch disabled defaultChecked />
            <span className="text-muted-foreground">Disabled (on)</span>
          </label>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Description</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Wi-Fi</p>
              <p className="text-xs text-muted-foreground">Connect to wireless networks</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Bluetooth</p>
              <p className="text-xs text-muted-foreground">Manage Bluetooth devices</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Airplane Mode</p>
              <p className="text-xs text-muted-foreground">Disable all wireless</p>
            </div>
            <Switch />
          </div>
        </div>
      </section>
    </div>
  )
}
