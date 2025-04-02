import { Button } from "~/components/ui/button"
import { HardDrive, Users, Clock, Star, Trash } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 border-r p-4 hidden md:block">
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start">
          <HardDrive className="mr-2 h-4 w-4" />
          My Drive
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          Shared with me
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Clock className="mr-2 h-4 w-4" />
          Recent
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Star className="mr-2 h-4 w-4" />
          Starred
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Trash className="mr-2 h-4 w-4" />
          Trash
        </Button>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Storage</h3>
        <div className="space-y-2">
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-[35%]"></div>
          </div>
          <div className="text-xs text-muted-foreground">3.5 GB of 15 GB used</div>
          <Button variant="outline" size="sm" className="w-full mt-2">
            Buy storage
          </Button>
        </div>
      </div>
    </div>
  )
}

