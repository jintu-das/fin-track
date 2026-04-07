import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  return (
    <main>
      <h1>FinTrack</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate
        numquam amet laborum sit, eaque optio, doloribus perferendis alias
        consequatur explicabo! Cumque minus sint delectus vitae similique quae
        animi veniam?
      </p>
    </main>
  );
}
