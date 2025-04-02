export interface FileItem {
  name: string
  type: "file" | "folder"
  size?: string
  mimeType?: string
  url?: string
  children?: FileItem[]
  lastModified?: string
}

export const mockData: FileItem[] = [
  {
    name: "Documents",
    type: "folder",
    children: [
      {
        name: "Project Proposal.docx",
        type: "file",
        size: "2.3 MB",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        url: "#",
        lastModified: "Apr 12, 2023",
      },
      {
        name: "Budget.xlsx",
        type: "file",
        size: "1.8 MB",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        url: "#",
        lastModified: "Mar 25, 2023",
      },
      {
        name: "Meeting Notes",
        type: "folder",
        children: [
          {
            name: "Q1 Review.docx",
            type: "file",
            size: "1.2 MB",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            url: "#",
            lastModified: "Jan 15, 2023",
          },
          {
            name: "Team Sync.docx",
            type: "file",
            size: "0.9 MB",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            url: "#",
            lastModified: "Feb 28, 2023",
          },
        ],
      },
    ],
  },
  {
    name: "Images",
    type: "folder",
    children: [
      {
        name: "profile.jpg",
        type: "file",
        size: "3.2 MB",
        mimeType: "image/jpeg",
        url: "#",
        lastModified: "Apr 2, 2023",
      },
      {
        name: "banner.png",
        type: "file",
        size: "4.7 MB",
        mimeType: "image/png",
        url: "#",
        lastModified: "Mar 18, 2023",
      },
      {
        name: "screenshot.png",
        type: "file",
        size: "2.1 MB",
        mimeType: "image/png",
        url: "#",
        lastModified: "Apr 5, 2023",
      },
    ],
  },
  {
    name: "Project Files",
    type: "folder",
    children: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "index.js",
            type: "file",
            size: "12 KB",
            mimeType: "text/javascript",
            url: "#",
            lastModified: "Apr 10, 2023",
          },
          {
            name: "styles.css",
            type: "file",
            size: "8 KB",
            mimeType: "text/css",
            url: "#",
            lastModified: "Apr 10, 2023",
          },
        ],
      },
      {
        name: "README.md",
        type: "file",
        size: "4 KB",
        mimeType: "text/markdown",
        url: "#",
        lastModified: "Apr 1, 2023",
      },
      {
        name: "package.json",
        type: "file",
        size: "2 KB",
        mimeType: "application/json",
        url: "#",
        lastModified: "Mar 29, 2023",
      },
    ],
  },
  {
    name: "Presentation.pptx",
    type: "file",
    size: "5.7 MB",
    mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    url: "#",
    lastModified: "Apr 8, 2023",
  },
  {
    name: "Resume.pdf",
    type: "file",
    size: "1.2 MB",
    mimeType: "application/pdf",
    url: "#",
    lastModified: "Feb 15, 2023",
  },
  {
    name: "Notes.txt",
    type: "file",
    size: "12 KB",
    mimeType: "text/plain",
    url: "#",
    lastModified: "Apr 12, 2023",
  },
  {
    name: "Video.mp4",
    type: "file",
    size: "28.6 MB",
    mimeType: "video/mp4",
    url: "#",
    lastModified: "Mar 20, 2023",
  },
  {
    name: "Shared Projects",
    type: "folder",
    children: [
      {
        name: "Client Feedback.docx",
        type: "file",
        size: "1.8 MB",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        url: "#",
        lastModified: "Apr 11, 2023",
      },
      {
        name: "Project Timeline.xlsx",
        type: "file",
        size: "2.2 MB",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        url: "#",
        lastModified: "Apr 9, 2023",
      },
    ],
  },
]

