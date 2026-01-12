import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

export function Topbar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-12 w-full flex items-center p-2 gap-2 bg-sidebar border-b border-sidebar-border">
      <SidebarTrigger />
      <Separator orientation="vertical" className="bg-neutral-700" />
      <div className="flex justify-between items-center px-2 gap-2">
        {children}

      </div>
    </div>
  )
}