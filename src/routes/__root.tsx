import { AppSidebar } from "@/components/nav/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { BellIcon, SettingsIcon, UserIcon } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
const RootLayout = () => (
  <SidebarProvider>
    <AppSidebar variant="sidebar" />
    <SidebarInset>
      <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4 z-10">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden md:block">
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="block md:hidden text-sm leading-tight font-medium">
          FinTrack
        </p>

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
        </div>
      </header>

      <section className="h-full flex flex-col gap-8 p-4">
        <Outlet />
      </section>
    </SidebarInset>
    <TanStackRouterDevtools />
  </SidebarProvider>
);

export const Route = createRootRoute({ component: RootLayout });
