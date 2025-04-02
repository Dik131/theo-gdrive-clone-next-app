"use client"
import { ChevronRight } from "lucide-react"

interface CustomBreadcrumbProps {
  items: string[]
  onNavigate: (index: number) => void
}

export function CustomBreadcrumb({ items, onNavigate }: CustomBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex items-center gap-1 text-sm">
        <li className="inline-flex items-center">
          <button
            onClick={() => onNavigate(-1)}
            className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 font-medium"
          >
            My Drive
          </button>
        </li>

        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
            <button
              onClick={() => onNavigate(index)}
              className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              {item}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

