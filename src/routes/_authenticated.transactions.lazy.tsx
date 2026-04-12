import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CategoriesList } from "@/features/transactions/components/categories-list";
import { TransactionsList } from "@/features/transactions/components/transactions-list";
import { TransactionsTimeRange } from "@/features/transactions/components/transactions-time-range";
import { createLazyFileRoute } from "@tanstack/react-router";
import { DownloadIcon, ListFilterIcon, PlusIcon } from "lucide-react";

export const Route = createLazyFileRoute("/_authenticated/transactions")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <>
      <PageHeader
        title="Transaction History"
        description="Track your financial transactions with precision and editorial clarity."
        headingId="budgets-heading"
        breadcrumbs={[
          { label: "Home", to: "/dashboard" },
          { label: "Budgets" }, // no "to" → renders as current page
        ]}
        actions={[
          {
            label: "Export",
            variant: "outline",
            icon: <DownloadIcon className="size-4" />,
            onClick: () => {},
          },
          {
            label: "Add Transaction",
            icon: <PlusIcon className="size-4" />,
            onClick: () => {},
          },
        ]}
      />

      <div className="container mx-auto space-y-4">
        <section className="flex items-center justify-between">
          <TransactionsTimeRange />
          <div className="space-x-2">
            <Button variant="secondary">
              <ListFilterIcon className="size-4" /> Filters
            </Button>
          </div>
        </section>
        <CategoriesList />
        <TransactionsList />
      </div>
    </>
  );
}
