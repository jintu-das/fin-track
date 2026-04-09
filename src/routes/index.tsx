import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  return (
    <div className="p-6">
      <h1>FinTrack</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate
        numquam amet laborum sit, eaque optio, doloribus perferendis alias
        consequatur explicabo! Cumque minus sint delectus vitae similique quae
        animi veniam?
      </p>
      {/* add 30 skeletons */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="mb-4 h-4 w-full animate-pulse rounded bg-muted"
        />
      ))}
      <p>end</p>
    </div>
  );
}
