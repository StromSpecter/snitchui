import { RadioButtonGroup, RadioButtonItem, RadioButtonLabel } from './radiobutton.jsx'

export function RadioButtonDemo() {
  return (
    <div className="space-y-2">
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
    </div>
  )
}
