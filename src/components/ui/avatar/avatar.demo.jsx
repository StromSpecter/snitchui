import { Avatar, AvatarImage, AvatarFallback } from './avatar.jsx'

export function AvatarDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Image</h3>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?u=avatar1" alt="@user" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?u=avatar2" alt="@user2" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?u=avatar3" alt="@user3" />
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Fallback (No Image)</h3>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback delayMs={500}>JS</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback className="text-base">AL</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Sizes</h3>
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback className="text-base">LG</AvatarFallback>
          </Avatar>
        </div>
      </section>
    </div>
  )
}
