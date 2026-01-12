"use client"
import { Calendar, FolderOpen, Home, Inbox, Notebook, Search, SearchIcon, Settings, Tag } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { NavUser } from "./NavUser";
import { User } from "better-auth";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Notes",
    url: "/notes",
    icon: Notebook,
  },
  {
    title: "Tags",
    url: "/tags",
    icon: Tag,
  },
  {
    title: "Media",
    url: "/media",
    icon: FolderOpen,
  },
  {
    title: "Search",
    url: "/search",
    icon: SearchIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar({ user }: { user: User }) {
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-12 border-b border-sidebar-border p-2 flex items-start">
        <div className="flex h-8 items-center gap-2">
          {/* Logo (Just for the sake of it - zero efforts done) */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-accent-foreground/60 to-accent/80 shadow-md group-data-[collapsible=icon]:group-data-[state=collapsed]:mx-auto">
            <div className="text-xl font-bold text-accent-foreground">IV</div>
          </div>

          {/* Intellivault branding */}
          <div className={`flex flex-col overflow-hidden whitespace-nowrap transition-all duration-200 ${open ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
            <span className="text-xl font-semibold tracking-tight">IntelliVault</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{
          name: user.name ?? "User",
          email: user.email,
          image: user.image,
        }} />
      </SidebarFooter>
    </Sidebar>
  )
}