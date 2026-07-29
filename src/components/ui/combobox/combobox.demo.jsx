import { Combobox } from './combobox.jsx'

export function ComboboxDemo() {
  return (
    <div className="space-y-4">
      <Combobox>
        <Combobox.Trigger placeholder="Select framework" />
        <Combobox.Content>
          <Combobox.Group>
            <Combobox.Label>Frameworks</Combobox.Label>
            <Combobox.Item value="react">React</Combobox.Item>
            <Combobox.Item value="vue">Vue</Combobox.Item>
            <Combobox.Item value="svelte">Svelte</Combobox.Item>
          </Combobox.Group>
        </Combobox.Content>
      </Combobox>
    </div>
  )
}
