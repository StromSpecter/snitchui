import { useState } from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from './dialog.jsx'
import { Button } from '../button/button.jsx'

export function DialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Controlled Dialog</h3>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>
                Are you sure you want to proceed with this action? This cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">Dialog content goes here.</p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Uncontrolled Dialog</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Uncontrolled</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Uncontrolled Dialog</DialogTitle>
              <DialogDescription>This dialog manages its own state.</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">Click outside or press ESC to close.</p>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  )
}
