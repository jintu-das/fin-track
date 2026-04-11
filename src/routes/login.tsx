import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LogInPage,
});

// eslint-disable-next-line react-refresh/only-export-components
function LogInPage() {
  return <div>Hello "/login"!</div>;
}
