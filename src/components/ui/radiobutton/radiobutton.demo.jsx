import { RadioButtonGroup, RadioButtonItem, RadioButtonLabel } from './radiobutton.jsx'

export function RadioButtonDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Vertical</h3>
        <RadioButtonGroup defaultValue="option1">
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="option1" />
            <RadioButtonLabel>Option 1</RadioButtonLabel>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="option2" />
            <RadioButtonLabel>Option 2</RadioButtonLabel>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="option3" />
            <RadioButtonLabel>Option 3</RadioButtonLabel>
          </div>
        </RadioButtonGroup>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Horizontal</h3>
        <RadioButtonGroup defaultValue="left" className="flex gap-6">
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="left" />
            <RadioButtonLabel>Left</RadioButtonLabel>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="center" />
            <RadioButtonLabel>Center</RadioButtonLabel>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="right" />
            <RadioButtonLabel>Right</RadioButtonLabel>
          </div>
        </RadioButtonGroup>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <RadioButtonGroup defaultValue="a">
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="a" />
            <RadioButtonLabel>Selected</RadioButtonLabel>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="b" />
            <RadioButtonLabel>Unselected</RadioButtonLabel>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RadioButtonItem value="c" disabled />
            <RadioButtonLabel className="text-muted-foreground">Disabled</RadioButtonLabel>
          </div>
        </RadioButtonGroup>
      </section>
    </div>
  )
}
