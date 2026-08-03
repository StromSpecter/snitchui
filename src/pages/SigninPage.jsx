import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { HighlightedCode } from '../components/ui/HighlightedCode.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'

const INSTALL_CMD = 'npx snitchui@latest add-template signin'

const signinCode = `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SigninForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Sign In</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="/signup" className="underline">Sign Up</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}`

export function SigninPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Sign In</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Authentication template with a centered card form. Includes email/password fields,
          submit button, and sign-up link.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Installation</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Scaffold the template with the CLI. It creates the page file
          and sets up the route automatically.
        </p>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
          <div className="flex items-center justify-between bg-muted px-4 py-2.5 border-b border-border/50">
            <span className="text-sm font-medium">CLI</span>
            <CopyButton text={INSTALL_CMD} label="install-signin" />
          </div>
          <HighlightedCode code={INSTALL_CMD} language="bash" />
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8">
        {/* Preview */}
        <div className="rounded-xl border border-border/50 bg-card/70 p-6 backdrop-blur-xl">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="rounded-lg border border-border/50 bg-card/70 p-6 backdrop-blur-xl">
                <h2 className="text-xl font-semibold mb-1">Welcome back</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Enter your email below to login to your account
                </p>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      className="w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Sign In
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="/docs/signup" className="underline">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Code */}
        <div>
          <CodeBlock code={signinCode} filename="SigninForm.jsx" />
        </div>
      </div>
    </div>
  )
}
