import type { Budget } from "../types";
import { BudgetCard } from "./budget-card";

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
] as Budget[];

export function BudgetsList() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
      {BUDGETS_DATA.map((budget) => (
        <BudgetCard key={budget.id} budget={budget} />
      ))}
    </section>
  );
}
