import { Textarea } from './textarea.jsx'

export function TextareaDemo() {
  return (
    <div className="space-y-4">
      <Textarea placeholder="Enter your message..." />
      <Textarea placeholder="Disabled textarea" disabled />
      <Textarea placeholder="Small textarea" className="h-20" />
    </div>
  )
}
