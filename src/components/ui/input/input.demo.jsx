import { Input } from './input.jsx'

export function InputDemo() {
  return (
    <div className="space-y-4">
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <div className="flex gap-3">
        <Input className="w-full" placeholder="Small" />
        <Input className="w-full" placeholder="Large" />
      </div>
    </div>
  )
}