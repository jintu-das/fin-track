import { AppSidebar } from "@/components/nav/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// eslint-disable-next-line react-refresh/only-export-components
const RootLayout = () => (
  <SidebarProvider>
    <AppSidebar />
    <main className="bg-muted w-full p-4">
      <SidebarTrigger />
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </SidebarProvider>
);

export const Route = createRootRoute({ component: RootLayout });
