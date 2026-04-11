import * as React from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Link } from "@tanstack/react-router";

// types.ts
export type HeaderAction = Readonly<{
  label: string;
  ariaLabel?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  mobileIcon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "destructive";
}>;

export type BreadcrumbSegment = Readonly<{
  label: string;
  to?: string; // if absent → treated as current page
}>;

// PageHeader.tsx
type Props = Readonly<{
  title: string;
  description?: string;
  headingId?: string;
  breadcrumbs?: BreadcrumbSegment[]; // ✅ OCP fix — no hardcoding
  actions?: HeaderAction[]; // ✅ OCP fix — N actions
}>;

export function PageHeader({
  title,
  description,
  headingId = "page-heading",
  breadcrumbs = [],
  actions = [],
}: Props) {
  return (
    <header className="container mx-auto flex flex-row items-center justify-between gap-3 lg:items-start pt-8">
      <div>
        {breadcrumbs.length > 0 && (
          <Breadcrumb className="uppercase tracking-wide">
            <BreadcrumbList>
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={crumb.label}>
                    <BreadcrumbItem>
                      {isLast || !crumb.to ? (
                        <BreadcrumbPage
                          className="text-primary font-medium"
                          aria-current="page"
                        >
                          {crumb.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={crumb.to}>{crumb.label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator />}
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        )}

        <h1 id={headingId} className="text-3xl font-black tracking-tight my-1">
          {title}
        </h1>

        {description && (
          <p className="hidden lg:block text-[1.05rem] text-muted-foreground sm:text-balance">
            {description}
          </p>
        )}
      </div>

      {actions.length > 0 && (
        <div className="flex items-center gap-2">
          {actions.map((action) => {
            const ariaLabel = action.ariaLabel ?? action.label;
            return (
              <React.Fragment key={action.label}>
                {/* Desktop */}
                <Button
                  size="lg"
                  variant={action.variant ?? "default"}
                  className="hidden lg:inline-flex"
                  onClick={action.onClick}
                >
                  {action.icon ?? <PlusIcon className="size-4" />}
                  {action.label}
                </Button>

                {/* Mobile */}
                <Button
                  size="icon"
                  variant={action.variant ?? "default"}
                  className="lg:hidden"
                  aria-label={ariaLabel}
                  onClick={action.onClick}
                >
                  {action.mobileIcon ?? action.icon ?? (
                    <PlusIcon className="size-4" />
                  )}
                </Button>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </header>
  );
}
