import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRightIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function HomeComponent() {
  return (
    <>
      <header className="container mx-auto flex flex-col md:flex-row items-center gap-2 justify-between py-4">
        <h1 className="text-sm font-medium">FinTrack</h1>
        <nav className="space-x-3">
          <Button variant="link" asChild>
            Features
          </Button>
          <Button variant="link" asChild>
            Solutions
          </Button>
          <Button variant="link" asChild>
            Pricing
          </Button>
          <Button variant="link" asChild>
            About
          </Button>
          <Button variant="outline" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/dashboard">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="container mx-auto grid grid-cols-2 items-center gap-12 py-12">
        <section className="flex flex-col items-start gap-6 py-12">
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            Crafting wealth with{" "}
            <strong className="text-primary">architectural</strong> precision
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            soluta repellendus expedita sunt assumenda deserunt est inventore
            delectus harum suscipit aliquam doloremque sed voluptatem incidunt,
            dolore nostrum, deleniti, debitis quae.
          </p>
          <div className="space-x-2">
            <Button size="lg">Start Your Journey</Button>
            <Button size="lg" variant="secondary">
              View Methodology <ChevronRightIcon className="size-4" />{" "}
            </Button>
          </div>
        </section>

        <Skeleton className="h-100 w-full rounded-md" />
      </main>
      <footer></footer>
    </>
  );
}
