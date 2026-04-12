import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { sleep } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createFileRoute,
  Link,
  redirect,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { LoaderIcon, WalletIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "../auth";

const fallback = "/dashboard" as const;

const loginFormSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().optional().default(""),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || fallback });
    }
  },
  component: LoginComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function LoginComponent() {
  const auth = useAuth();
  const router = useRouter();
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const navigate = Route.useNavigate();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const search = Route.useSearch();

  const onFormSubmit = async (values: LoginFormValues) => {
    try {
      await auth.login(values.email);

      await router.invalidate();

      // This is just a hack being used to wait for the auth state to update
      // in a real app, you'd want to use a more robust solution
      await sleep(1);

      await navigate({ to: search.redirect || fallback });
    } catch (error) {
      console.error("Error logging in: ", error);
      form.setError("root", {
        message: "Unable to login right now. Please try again.",
      });
    }
  };

  const isLoggingIn = isLoading || form.formState.isSubmitting;
  const emailError = form.formState.errors.email;
  const passwordError = form.formState.errors.password;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-full min-h-dvh">
      <section className="max-w-lg mx-auto grid place-content-center p-4 gap-2">
        <Link to="/dashboard" className="flex gap-2 items-center mb-4">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <WalletIcon className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">FinTrack</span>
            <span className="truncate text-xs">Wealth Management</span>
          </div>
        </Link>

        <h1 className="text-2xl font-medium">Welcome back</h1>
        <p
          className="text-sm text-muted-foreground
        "
        >
          Please enter your credentials to access our account.
        </p>

        <form
          className="mt-4 max-w-lg"
          onSubmit={form.handleSubmit(onFormSubmit)}
          noValidate
        >
          <fieldset disabled={isLoggingIn} className="w-full grid gap-2">
            <FieldGroup>
              <Field data-invalid={!!emailError}>
                <FieldLabel htmlFor="email-label">Email Address</FieldLabel>
                <Input
                  id="email-label"
                  type="email"
                  placeholder="Enter your email"
                  aria-invalid={!!emailError}
                  {...form.register("email")}
                />
                <FieldDescription>
                  We&apos;ll never share your email with anyone else.
                </FieldDescription>
                <FieldError errors={[emailError]} />
              </Field>

              <Field data-invalid={!!passwordError}>
                <FieldLabel htmlFor="password-label">Password</FieldLabel>
                <Input
                  id="password-label"
                  type="password"
                  placeholder="Enter your password"
                  aria-invalid={!!passwordError}
                  {...form.register("password")}
                />
                <FieldError errors={[passwordError]} />
              </Field>
            </FieldGroup>

            <Field className="space-y-3 my-4">
              <Button type="submit" disabled={isLoggingIn} className="w-full">
                {isLoggingIn && <LoaderIcon className="animate-spin" />}
                {isLoggingIn ? "Loading..." : "Submit"}
              </Button>

              <FieldError>{form.formState.errors.root?.message}</FieldError>

              <FieldSeparator className="mb-3">Or continue with</FieldSeparator>

              <Button variant="outline" type="button">
                Login with Google
              </Button>
              <FieldDescription className="text-center">
                Don&apos;t have an account?{" "}
                <button type="button">Sign up</button>
              </FieldDescription>
            </Field>
          </fieldset>
        </form>
      </section>
      <Skeleton className="h-full w-full rounded-md hidden lg:block" />
    </main>
  );
}
