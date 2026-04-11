import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { TRANSACTIONS } from "../mock-data";
import TransactionCard from "./transaction-card";

export function RecentTransactions() {
  return (
    <section className="col-span-8 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Recent Transactions</h3>
        <Button variant="link" asChild>
          <Link to="/transactions">View Ledgers</Link>
        </Button>
      </div>

      <ul className="space-y-3">
        {TRANSACTIONS.slice(0, 4).map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </section>
  );
}
