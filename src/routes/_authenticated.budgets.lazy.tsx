import { PageHeader } from "@/components/page-header";
import { BudgetsList } from "@/features/budgets/components/budgets-list";
import { createLazyFileRoute } from "@tanstack/react-router";
import { PlusIcon, UploadIcon } from "lucide-react";

export const Route = createLazyFileRoute("/_authenticated/budgets")({
  component: BudgetsPage,
});

// eslint-disable-next-line react-refresh/only-export-components
function BudgetsPage() {
  return (
    <>
      <PageHeader
        title="Budgets"
        description="Curate your spending habits with precision and editorial clarity."
        headingId="budgets-heading"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Budgets" }, // no `to` → renders as current page
        ]}
        actions={[
          {
            label: "Import",
            variant: "outline",
            icon: <UploadIcon className="size-4" />,
            onClick: () => {},
          },
          {
            label: "Add Budget",
            icon: <PlusIcon className="size-4" />,
            onClick: () => {},
          },
        ]}
      />

      <BudgetsList />
    </>
  );
}
