import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Car,
  CircleDollarSign,
  DotIcon,
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
import { TRANSACTIONS } from "../mock-data";

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

export function TransactionsList() {
  return (
    <section className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Showing {TRANSACTIONS.length} transactions
      </p>

      <div className="grid grid-cols-1 gap-4 ">
        {TRANSACTIONS.map((transaction) => {
          const CategoryIcon =
            CATEGORY_ICON_MAP[transaction.category] ?? CircleDollarSign;

          return (
            <Card key={transaction.id} className="border bg-card">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-md bg-muted p-2 text-muted-foreground">
                      <CategoryIcon className="size-6" />
                    </div>
                    <div>
                      <CardTitle className="font-semibold text-base -mb-2">
                        {transaction.merchant}
                      </CardTitle>
                      <CardDescription>
                        {transaction.description}
                        <DotIcon className="size-8 inline" />
                        <span>{transaction.category}</span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className={cn("text-right font-semibold text-base")}>
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </p>
                    <Badge variant="secondary">{transaction.category}</Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
