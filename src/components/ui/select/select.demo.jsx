import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select.jsx'

export function SelectDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Basic</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Groups</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose a framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Frontend</SelectLabel>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Backend</SelectLabel>
              <SelectItem value="node">Node.js</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="go">Go</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <div className="space-y-3">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
          </Select>
          <Select defaultValue="option1">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="border-destructive ring-destructive">
              <SelectValue placeholder="Error state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Item A</SelectItem>
              <SelectItem value="b">Item B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
    </div>
  )
}
