"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { FileList } from "~/components/file-list"
import { Sidebar } from "~/components/sidebar"
import { ThemeToggle } from "~/components/theme-toggle"
import { Search, Upload, Plus, Menu, Grid, List } from "lucide-react"
import { mockData } from "~/lib/mock-data"
import { CustomBreadcrumb } from "~/components/custom-breadcrumb"

export function Drive() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSidebar, setShowSidebar] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Get current folder's content based on path
  const getCurrentContent = () => {
    let current = mockData

    for (const folder of currentPath) {
      const foundFolder = current.find((item) => item.type === "folder" && item.name === folder)
      if (foundFolder && foundFolder.type === "folder" && foundFolder.children) {
        current = foundFolder.children
      } else {
        return []
      }
    }

    if (searchQuery) {
      return current.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    return current
  }

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
  }

  const navigateToBreadcrumb = (index: number) => {
    setCurrentPath(currentPath.slice(0, index))
  }

  const handleUpload = () => {
    setUploadDialogOpen(false)
    // In a real app, this would handle the file upload
  }

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid")
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <Button variant="ghost" size="icon" className="mr-2" onClick={() => setShowSidebar(!showSidebar)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="flex items-center gap-2 font-semibold text-xl text-blue-600 dark:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-hard-drive"
            >
              <line x1="22" x2="2" y1="12" y2="12" />
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0-1.79 1.11z" />
              <line x1="6" x2="6.01" y1="16" y2="16" />
              <line x1="10" x2="10.01" y1="16" y2="16" />
            </svg>
            My Drive
          </div>
          <div className="relative ml-4 flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search in Drive"
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={toggleViewMode}
              title={viewMode === "grid" ? "Switch to list view" : "Switch to grid view"}
            >
              {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
              <span className="sr-only">Toggle view</span>
            </Button>
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">New</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setUploadDialogOpen(true)}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload file
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  New document
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M8 13h8" />
                    <path d="M8 17h8" />
                    <path d="M8 9h1" />
                  </svg>
                  New spreadsheet
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                  New folder
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        {showSidebar && <Sidebar />}
        <main className="flex-1 overflow-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <CustomBreadcrumb
              items={currentPath}
              onNavigate={(index) => {
                if (index === -1) {
                  setCurrentPath([])
                } else {
                  setCurrentPath(currentPath.slice(0, index + 1))
                }
              }}
            />
            <div className="flex items-center gap-2">
              <Button variant="outline" className="flex items-center gap-2" onClick={() => setUploadDialogOpen(true)}>
                <Upload className="h-4 w-4" />
                Upload
              </Button>
            </div>
          </div>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="folders">Folders</TabsTrigger>
              <TabsTrigger value="shared">Shared with me</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <FileList files={getCurrentContent()} onFolderClick={navigateToFolder} viewMode={viewMode} />
            </TabsContent>
            <TabsContent value="files" className="mt-0">
              <FileList
                files={getCurrentContent().filter((item) => item.type !== "folder")}
                onFolderClick={navigateToFolder}
                viewMode={viewMode}
              />
            </TabsContent>
            <TabsContent value="folders" className="mt-0">
              <FileList
                files={getCurrentContent().filter((item) => item.type === "folder")}
                onFolderClick={navigateToFolder}
                viewMode={viewMode}
              />
            </TabsContent>
            <TabsContent value="shared" className="mt-0">
              <div className="text-center py-8 text-muted-foreground">No shared files</div>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload files</DialogTitle>
            <DialogDescription>Drag and drop files here or click to browse</DialogDescription>
          </DialogHeader>
          <div className="border-2 border-dashed rounded-lg p-10 text-center cursor-pointer hover:bg-muted/50 transition-colors">
            <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-2">Drag and drop files here or click to browse</p>
            <Input type="file" className="hidden" id="file-upload" multiple />
            <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
              Choose files
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUploadDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpload}>Upload</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

