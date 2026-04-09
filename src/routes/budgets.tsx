import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { createFileRoute } from "@tanstack/react-router";
import { MoreVerticalIcon, PlusCircleIcon, PlusIcon } from "lucide-react";

export const Route = createFileRoute("/budgets")({
  component: RouteComponent,
});

const BUDGETS_DATA = [
  {
    id: "1",
    name: "Food & Dining",
    description: "All your food and dining expenses",
    budgetedAmount: 500,
    spentAmount: 350,
    status: "on track",
  },
  {
    id: "2",
    name: "Transportation",
    description: "All your transportation expenses",
    budgetedAmount: 300,
    spentAmount: 400,
    status: "over budget",
  },
  {
    id: "3",
    name: "Entertainment",
    description: "All your entertainment expenses",
    budgetedAmount: 200,
    spentAmount: 150,
    status: "on track",
  },
  {
    id: "4",
    name: "Utilities",
    description: "All your utilities expenses",
    budgetedAmount: 400,
    spentAmount: 450,
    status: "over budget",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <>
      <header className="container mx-auto flex flex-row items-center justify-between gap-3 lg:items-start">
        <div>
          <h1
            id="budgets-heading"
            className="text-3xl font-semibold tracking-tight sm:text-3xl"
          >
            Budgets
          </h1>
          <p className="hidden lg:block text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance">
            Curate your spending habits with precision and editorial clarity.
          </p>
        </div>
        <Button size="lg" className="hidden lg:inline-flex">
          <PlusCircleIcon className="size-4" />
          Add Budget
        </Button>

        <Button size="icon" className="lg:hidden" aria-label="Add budget">
          <PlusIcon className="size-4" />
        </Button>
      </header>

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

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
        {BUDGETS_DATA.map((budget) => (
          <Card className="w-full" key={budget.id}>
            <CardHeader>
              <CardTitle className="text-base">{budget.name}</CardTitle>
              <CardDescription>{budget.description}</CardDescription>
              <CardAction>
                <Button variant="link" size="icon">
                  <MoreVerticalIcon className="size-4" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <p className="flex items-center gap-1">
                  <span className="text-base font-medium">
                    ${budget.budgetedAmount}
                  </span>
                  <span className="text-lg">/</span>
                  <span className="text-muted-foreground text-sm">
                    ${budget.spentAmount}
                  </span>
                </p>
                <p className="px-3 py-1 rounded-full bg-primary/15 grid place-content-center text-xs font-medium">
                  {budget.status === "on track" ? "On Track" : "Over Budget"}
                </p>
              </div>
              <Progress value={45} />
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
