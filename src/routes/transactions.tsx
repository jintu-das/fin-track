import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CategoriesList } from "@/features/transactions/components/categories-list";
import { TransactionsList } from "@/features/transactions/components/transactions-list";
import { TransactionsTimeRange } from "@/features/transactions/components/transactions-time-range";
import { createFileRoute } from "@tanstack/react-router";
import { DownloadIcon, ListFilterIcon, Plus } from "lucide-react";

export const Route = createFileRoute("/transactions")({
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
        action={{
          label: "Add Transaction",
          ariaLabel: "Add transaction",
          icon: <Plus className="size-4" />,
        }}
      />

      <div className="container mx-auto space-y-4">
        <section className="flex items-center justify-between">
          <TransactionsTimeRange />
          <div className="space-x-2">
            <Button variant="secondary">
              <ListFilterIcon className="size-4" /> Filters
            </Button>
            <Button variant="secondary">
              <DownloadIcon className="size-4" /> Export
            </Button>
          </div>
        </section>
        <CategoriesList />
        <TransactionsList />
      </div>
    </>
  );
}
