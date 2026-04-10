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
import { SquareCheckBigIcon, UtensilsIcon } from "lucide-react";
import type { Budget } from "../types";

export function BudgetCard({ budget }: Readonly<{ budget: Budget }>) {
  return (
    <Card className="w-full" key={budget.id}>
      <CardHeader>
        <CardDescription className="text-sm font-medium uppercase">
          {budget.name}
        </CardDescription>
        <CardTitle className="text-xl font-semibold">
          $ {budget.budgetedAmount}.00
        </CardTitle>
        <CardAction>
          <Button variant="default" size="icon">
            <UtensilsIcon className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <p className="font-medium text-muted-foreground">
            <span>SPENT ${budget.spentAmount}</span>
          </p>
          <p>65%</p>
        </div>

        <Progress className="h-2 rounded-full" value={45} />

        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 text-muted-foreground uppercase font-medium">
            <SquareCheckBigIcon className="size-4" /> 2 days left
          </p>
          <p className="px-3 py-1 rounded-full bg-primary/15 grid place-content-center text-xs font-medium">
            {budget.status === "on track" ? "On Track" : "Over Budget"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
