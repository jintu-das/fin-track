import { TRANSACTIONS } from "../mock-data";
import TransactionCard from "./transaction-card";

export function TransactionsList() {
  const transactionsByDate = TRANSACTIONS.reduce<
    Record<string, typeof TRANSACTIONS>
  >((acc, transaction) => {
    const date = transaction.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(transaction);
    return acc;
  }, {});

  const sortedDates = Object.keys(transactionsByDate).sort((a, b) =>
    b.localeCompare(a),
  );

  return (
    <section className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Showing {TRANSACTIONS.length} transactions
      </p>

      <div className="space-y-6">
        {sortedDates.map((date) => (
          <section key={date} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {new Date(date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h3>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 gap-4">
              {transactionsByDate[date].map((transaction) => (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
