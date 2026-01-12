import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { requireAuth } from "@/lib/session"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await requireAuth();
  return (
    <SidebarProvider>
      <AppSidebar user={session.user} />
      <main className="w-full">
        {children}
      </main>
    </SidebarProvider>
  )
}