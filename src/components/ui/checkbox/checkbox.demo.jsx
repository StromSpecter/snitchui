import { Checkbox } from './checkbox.jsx'

export function CheckboxDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Uncontrolled</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox />
            Accept terms and conditions
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox defaultChecked />
            Subscribe to newsletter
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox defaultChecked={false} />
            Remember me
          </label>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox />
            Unchecked
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox defaultChecked />
            Checked
          </label>
          <label className="flex items-center gap-2 text-sm cursor-not-allowed">
            <Checkbox disabled />
            Disabled (unchecked)
          </label>
          <label className="flex items-center gap-2 text-sm cursor-not-allowed">
            <Checkbox disabled defaultChecked />
            Disabled (checked)
          </label>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Inline</h3>
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox defaultChecked />
            Option A
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox />
            Option B
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox />
            Option C
          </label>
        </div>
      </section>
    </div>
  )
}
