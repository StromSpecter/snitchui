import { Textarea } from './textarea.jsx'

export function TextareaDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Variants</h3>
        <div className="space-y-3">
          <Textarea placeholder="Default textarea" />
          <Textarea placeholder="Smaller" className="h-20" />
          <Textarea placeholder="Larger content area" className="h-40" />
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <div className="space-y-3">
          <Textarea placeholder="Default" />
          <Textarea placeholder="Disabled" disabled />
          <Textarea placeholder="Read only" readOnly value="This is read-only content that cannot be edited by the user." />
          <Textarea placeholder="With error" className="border-destructive focus-visible:ring-destructive" />
          <div>
            <Textarea placeholder="Character limit" maxLength={100} />
            <p className="mt-1 text-xs text-muted-foreground text-right">0/100</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Label</h3>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="bio">Biography</label>
          <Textarea id="bio" placeholder="Tell us about yourself..." />
          <p className="text-xs text-muted-foreground">Brief description for your profile.</p>
        </div>
      </section>
    </div>
  )
}
