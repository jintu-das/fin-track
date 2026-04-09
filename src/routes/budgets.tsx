import { PageHeader } from "@/components/page-header";
import { BudgetsList } from "@/features/budgets/components/budgets-list";
import { createFileRoute } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";

export const Route = createFileRoute("/budgets")({
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
        action={{
          label: "Add Budget",
          ariaLabel: "Add budget",
          icon: <PlusIcon className="size-4" />,
        }}
      />

      {/* <section className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-flow-row border py-6 px-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="uppercase font-medium text-muted-foreground">
            total budgeted
          </h3>
          <p className="text-2xl font-medium">$ 12, 450.00</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="uppercase font-medium text-muted-foreground">
            total spent
          </h3>
          <p className="text-2xl font-medium">$ 8, 120.00</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="uppercase font-medium text-muted-foreground">
            remaining
          </h3>
          <p className="text-2xl font-medium">$ 12, 450.00</p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <p className="px-8 py-1 rounded-full bg-primary/15 grid place-content-center text-sm font-semibold">
            65% Utilized
          </p>
        </div>
      </section> */}

      <BudgetsList />
    </>
  );
}
