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
import { MoreVerticalIcon } from "lucide-react";
import type { Budget } from "../types";

export function BudgetCard({ budget }: Readonly<{ budget: Budget }>) {
  return (
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
  );
}
