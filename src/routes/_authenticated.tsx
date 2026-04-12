import { useAuth } from "@/auth";
import {
  createFileRoute,
  Outlet,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import { AppSidebar } from "@/components/nav/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  BellIcon,
  LogOutIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AuthLayout,
});

// eslint-disable-next-line react-refresh/only-export-components
function AuthLayout() {
  const router = useRouter();
  const navigate = Route.useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    if (globalThis.confirm("Are you sure you want to logout?")) {
      auth.logout().then(() => {
        router.invalidate().finally(() => {
          navigate({ to: "/" });
        });
      });
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 z-10">
          <SidebarTrigger className="-ml-1" />

          <p className="block md:hidden text-sm leading-tight font-medium">
            FinTrack
          </p>

          <div className="hidden md:relative w-full max-w-sm">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              className="w-full bg-muted pl-9"
              placeholder="Search wealth assets, transactions..."
            />
          </div>

          <div className="flex-1 flex justify-end gap-3">
            <Button variant="ghost" size="icon" className="end-auto">
              <BellIcon className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="end-auto">
              <SettingsIcon className="size-4" />
            </Button>
            <Button variant="secondary" size="icon" className="end-auto">
              <UserIcon className="size-4" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="end-auto"
              onClick={handleLogout}
            >
              <LogOutIcon className="size-4" />
            </Button>
          </div>
        </header>

        <section className="h-full flex flex-col gap-8 p-4">
          <Outlet />
        </section>
      </SidebarInset>
      <TanStackRouterDevtools />
    </SidebarProvider>
  );
}
