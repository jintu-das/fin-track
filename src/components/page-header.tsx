import type { ReactNode } from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

type HeaderAction = Readonly<{
  label: string;
  ariaLabel?: string;
  onClick?: () => void;
  icon?: ReactNode;
  mobileIcon?: ReactNode;
}>;

type Props = Readonly<{
  title: string;
  description?: string;
  headingId?: string;
  action?: HeaderAction;
}>;

export function PageHeader({
  title,
  description,
  headingId = "page-heading",
  action,
}: Props) {
  const actionAriaLabel = action?.ariaLabel ?? action?.label;

  return (
    <header className="container mx-auto flex flex-row items-center justify-between gap-3 lg:items-start">
      <div>
        <h1
          id={headingId}
          className="text-3xl font-semibold tracking-tight sm:text-3xl"
        >
          {title}
        </h1>
        {description ? (
          <p className="hidden lg:block text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance">
            {description}
          </p>
        ) : null}
      </div>

      {action ? (
        <>
          <Button
            size="lg"
            className="hidden lg:inline-flex"
            onClick={action.onClick}
          >
            {action.icon ?? <PlusIcon className="size-4" />}
            {action.label}
          </Button>

          <Button
            size="icon"
            className="lg:hidden"
            aria-label={actionAriaLabel}
            onClick={action.onClick}
          >
            {action.mobileIcon ?? action.icon ?? (
              <PlusIcon className="size-4" />
            )}
          </Button>
        </>
      ) : null}
    </header>
  );
}
