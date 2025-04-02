"use client"

import type { FileItem } from "~/lib/mock-data"
import { FileText, Folder, ImageIcon, FileSpreadsheet, FileCode, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { Button } from "~/components/ui/button"

interface FileListProps {
  files: FileItem[]
  onFolderClick: (folderName: string) => void
  viewMode: "grid" | "list"
}

export function FileList({ files, onFolderClick, viewMode }: FileListProps) {
  const getFileIcon = (type: string, mimeType?: string) => {
    if (type === "folder")
      return <Folder className={viewMode === "grid" ? "h-10 w-10 text-blue-500" : "h-5 w-5 text-blue-500"} />

    if (mimeType?.startsWith("image/"))
      return <ImageIcon className={viewMode === "grid" ? "h-10 w-10 text-green-500" : "h-5 w-5 text-green-500"} />
    if (mimeType?.includes("spreadsheet"))
      return <FileSpreadsheet className={viewMode === "grid" ? "h-10 w-10 text-green-600" : "h-5 w-5 text-green-600"} />
    if (mimeType?.includes("code") || mimeType?.includes("javascript"))
      return <FileCode className={viewMode === "grid" ? "h-10 w-10 text-purple-500" : "h-5 w-5 text-purple-500"} />

    return <FileText className={viewMode === "grid" ? "h-10 w-10 text-gray-500" : "h-5 w-5 text-gray-500"} />
  }

  if (files.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No files in this location</div>
  }

  if (viewMode === "list") {
    return (
      <div className="border rounded-md overflow-hidden">
        <div className="grid grid-cols-12 gap-2 p-3 bg-muted/50 font-medium text-sm">
          <div className="col-span-6">Name</div>
          <div className="col-span-2">Last modified</div>
          <div className="col-span-2">Size</div>
          <div className="col-span-2">Type</div>
        </div>
        <div className="divide-y">
          {files.map((file, index) => (
            <div key={index} className="grid grid-cols-12 gap-2 p-3 items-center hover:bg-muted/50 transition-colors">
              <div
                className="col-span-6 flex items-center gap-3 cursor-pointer"
                onClick={() =>
                  file.type === "folder" ? onFolderClick(file.name) : window.open(file.url || "#", "_blank")
                }
              >
                {getFileIcon(file.type, file.mimeType)}
                <span className="truncate">{file.name}</span>
              </div>
              <div className="col-span-2 text-sm text-muted-foreground">{file.lastModified || "-"}</div>
              <div className="col-span-2 text-sm text-muted-foreground">
                {file.type === "folder" ? `${file.children?.length || 0} items` : file.size || "-"}
              </div>
              <div className="col-span-1 text-sm text-muted-foreground capitalize">{file.type}</div>
              <div className="col-span-1 flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {files.map((file, index) => (
        <div key={index} className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <div
              className="flex flex-col items-center cursor-pointer flex-1"
              onClick={() =>
                file.type === "folder" ? onFolderClick(file.name) : window.open(file.url || "#", "_blank")
              }
            >
              {getFileIcon(file.type, file.mimeType)}
              <div className="mt-2 text-center">
                <div className="font-medium truncate max-w-[120px]">{file.name}</div>
                <div className="text-xs text-muted-foreground">
                  {file.type === "folder" ? `${file.children?.length || 0} items` : file.size}
                </div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Download</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem>Rename</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}

