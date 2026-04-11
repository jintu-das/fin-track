import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SpendingVelocity } from "@/features/dashboard/components/spending-velocity";
import { TotalNetWorth } from "@/features/dashboard/components/total-net-worth";
import { RecentTransactions } from "@/features/transactions/components/recent-transactions";
import { createFileRoute } from "@tanstack/react-router";
import {
  BanknoteArrowDownIcon,
  BanknoteIcon,
  DownloadIcon,
  PiggyBankIcon,
  ShoppingBasketIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  return (
    <>
      <PageHeader
        title="Hello, Jintu"
        description="Your net worth is $100,000.00 and your total expenses for the month are $2,500.00."
        headingId="budgets-heading"
        actions={[
          {
            label: "Generate Report",
            ariaLabel: "Generate financial report",
            icon: <DownloadIcon className="size-4" />,
          },
        ]}
      />

      <section className="container mx-auto grid grid-cols-12 grid-rows-4  gap-4">
        <TotalNetWorth className="col-span-8 row-span-4" />

        <Card className="col-span-4 h-full ">
          <CardHeader>
            <CardTitle className="text-sm uppercase text-muted-foreground font-medium">
              Monthly Income
            </CardTitle>
            <CardDescription className="text-black/80 text-3xl font-black">
              $ 24,500
            </CardDescription>
            <CardAction>
              <BanknoteIcon className="size-8" />
            </CardAction>
          </CardHeader>
        </Card>
        <Card className="col-span-4 h-full ">
          <CardHeader>
            <CardTitle className="text-sm uppercase text-muted-foreground font-medium">
              Monthly Expenses
            </CardTitle>
            <CardDescription className="text-black/80  text-3xl font-black">
              $ 24,500
            </CardDescription>
            <CardAction>
              <ShoppingBasketIcon className="size-8" />
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="col-span-4 h-full ">
          <CardHeader>
            <CardTitle className="text-sm uppercase text-muted-foreground font-medium">
              Savings Rate
            </CardTitle>
            <CardDescription className="text-black/80 text-3xl font-black">
              15%
            </CardDescription>
            <CardAction>
              <PiggyBankIcon className="size-8" />
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="col-span-4 h-full ">
          <CardHeader>
            <CardTitle className="text-sm uppercase text-muted-foreground font-medium">
              Net Worth Change
            </CardTitle>
            <CardDescription className="text-black/80 text-3xl font-black">
              +$ 2,500
            </CardDescription>
            <CardAction>
              <BanknoteArrowDownIcon className="size-8" />
            </CardAction>
          </CardHeader>
        </Card>
      </section>

      <section className="container mx-auto grid grid-cols-12 grid-flow-row gap-6">
        <SpendingVelocity className="col-span-4" />
        <RecentTransactions />
      </section>
    </>
  );
}
