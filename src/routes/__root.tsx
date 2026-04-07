import { AppSidebar } from "@/components/nav/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// eslint-disable-next-line react-refresh/only-export-components
const RootLayout = () => (
  <>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
