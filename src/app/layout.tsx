import { ThemeProvider } from "next-themes";
import { ThemeEffect } from "./theme-effect";
import { ThemeScript } from "./theme-script";
import "~/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeEffect />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeScript />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}