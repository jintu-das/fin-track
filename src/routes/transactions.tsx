import { PageHeader } from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoriesList } from "@/features/transactions/components/categories-list";
import { TransactionsAnalysis } from "@/features/transactions/components/transactions-analysis";
import { TransactionsList } from "@/features/transactions/components/transactions-list";
import { TransactionsTimeRange } from "@/features/transactions/components/transactions-time-range";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/transactions")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <>
      <PageHeader
        title="Transactions"
        description="Track your financial transactions with precision and editorial clarity."
        headingId="budgets-heading"
        action={{
          label: "Add Transaction",
          ariaLabel: "Add transaction",
          icon: <Plus className="size-4" />,
        }}
      />

      <Tabs defaultValue="list" className="container mx-auto">
        <section className="flex items-center justify-between">
          <TransactionsTimeRange />
          <TabsList>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>
        </section>
        <TabsContent value="list" className="space-y-6 py-6 text-base">
          <CategoriesList />
          <TransactionsList />
        </TabsContent>
        <TabsContent value="analysis">
          <TransactionsAnalysis />
        </TabsContent>
      </Tabs>
    </>
  );
}
