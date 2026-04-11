import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Transaction } from "@/features/budgets/types";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Car,
  CircleDollarSign,
  Film,
  Fuel,
  HeartPulse,
  Laptop,
  type LucideIcon,
  Plane,
  Repeat,
  ShoppingBag,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";

const CATEGORY_ICON_MAP: Record<string, LucideIcon> = {
  Shopping: ShoppingBag,
  "Food & Dining": UtensilsCrossed,
  Transportation: Car,
  Entertainment: Film,
  Groceries: ShoppingCart,
  Fuel,
  Electronics: Laptop,
  Subscriptions: Repeat,
  Health: HeartPulse,
  Travel: Plane,
  Salary: Briefcase,
};

export default function TransactionCard({
  transaction,
}: Readonly<{ transaction: Transaction }>) {
  const CategoryIcon =
    CATEGORY_ICON_MAP[transaction.category] ?? CircleDollarSign;

  return (
    <Card className="border bg-card">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-md bg-muted p-2 text-muted-foreground">
              <CategoryIcon className="size-6" />
            </div>
            <div>
              <CardTitle className="font-semibold text-base">
                {transaction.merchant}
              </CardTitle>
              <CardDescription>{transaction.description}</CardDescription>
            </div>
          </div>
          <div className="space-y-1">
            <p className={cn("text-right font-bold  text-base")}>
              {transaction.type === "income" ? "+" : "-"}$
              {transaction.amount.toFixed(2)}
            </p>
            <Badge variant="secondary">{transaction.category}</Badge>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
