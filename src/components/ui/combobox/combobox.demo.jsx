import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItem,
  ComboboxLabel,
  ComboboxGroup,
} from './combobox.jsx'

export function ComboboxDemo() {
  return (
    <div className="space-y-4">
      <Combobox>
        <ComboboxTrigger placeholder="Select framework" />
        <ComboboxContent>
          <ComboboxGroup>
            <ComboboxLabel>Frameworks</ComboboxLabel>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxItem value="svelte">Svelte</ComboboxItem>
          </ComboboxGroup>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
