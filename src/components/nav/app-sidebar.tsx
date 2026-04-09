import * as React from "react";
import { NavMain } from "@/components/nav/nav-main";
import { NavSecondary } from "@/components/nav/nav-secondary";
import { NavUser } from "@/components/nav/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  MoonStarIcon,
  ReceiptTextIcon,
  SettingsIcon,
  WalletCardsIcon,
  WalletIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary: [
    {
      title: "Dark Mode",
      url: "#",
      icon: <MoonStarIcon />,
    },
    {
      title: "Settings",
      url: "#",
      icon: <SettingsIcon />,
    },
  ],
  navMain: [
    {
      name: "Dashboard",
      url: "/",
      icon: <LayoutDashboardIcon />,
    },
    {
      name: "Budgets",
      url: "/budgets",
      icon: <WalletCardsIcon />,
    },
    {
      name: "Transactions",
      url: "/transactions",
      icon: <ReceiptTextIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <WalletIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">FinTrack</span>
                  <span className="truncate text-xs">Wealth Management</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
