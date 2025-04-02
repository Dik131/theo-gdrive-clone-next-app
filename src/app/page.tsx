import { Drive } from "~/components/drive"
import { ThemeProvider } from "~/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Drive />
      </div>
    </ThemeProvider>
  )
}

