"use client"
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Topbar } from "@/components/Topbar";

export default function NotePage () {
  return(
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex-1 overflow-auto">
        <SimpleEditor />
      </div>
    </div>
  )
}