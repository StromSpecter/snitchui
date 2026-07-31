import { toast } from 'sonner'
import { Button } from '../button/button.jsx'

export function ToastDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="default"
        onClick={() => toast.success('Saved!', { description: 'Your changes have been saved.' })}
      >
        Success
      </Button>
      <Button
        variant="destructive"
        onClick={() => toast.error('Error', { description: 'Something went wrong.' })}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => toast('New message', {
          description: 'You have a new notification.',
          action: { label: 'View', onClick: () => console.log('viewed') },
        })}
      >
        With Action
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast.loading('Loading...', {
          description: 'Please wait while we process your request.',
        })}
      >
        Loading
      </Button>
      <Button
        variant="ghost"
        onClick={() => toast.promise(
          new Promise((resolve) => setTimeout(resolve, 2000)),
          { loading: 'Saving...', success: 'Saved!', error: 'Failed' }
        )}
      >
        Promise
      </Button>
    </div>
  )
}
