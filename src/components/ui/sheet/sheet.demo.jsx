import { Button } from '../button/button.jsx'
import { Input } from '../input/input.jsx'
import { Label } from '../label/label.jsx'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from './sheet.jsx'

export function SheetDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="relative h-[320px] w-full overflow-hidden rounded-lg border border-border/50 bg-muted/30">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              Open Sheet (Right)
            </Button>
          </SheetTrigger>
          <SheetContent side="right" position="absolute">
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="John" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" defaultValue="john@email.com" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="relative h-[320px] w-full overflow-hidden rounded-lg border border-border/50 bg-muted/30">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              Open Sheet (Left)
            </Button>
          </SheetTrigger>
          <SheetContent side="left" position="absolute">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Browse through the sections.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
