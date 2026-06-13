import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { AlertCircle, ArrowLeft, Home, RefreshCw, Sparkles } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] px-4 py-8 text-[#1d1d1f]">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <section className="w-full max-w-2xl rounded-[32px] border border-white/80 bg-white/75 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#1d1d1f] text-white shadow-lg">
            <Sparkles className="h-7 w-7" />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[#86868b]">
            404
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl">
            Page not found.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#6e6e73]">
            The page you are looking for does not exist, may have moved, or is no
            longer available.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#007aff] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6]"
            >
              <Home className="h-4 w-4" />
              Go home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:bg-[#f5f5f7]"
            >
              <ArrowLeft className="h-4 w-4" />
              Go back
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <main className="min-h-screen bg-[#f5f5f7] px-4 py-8 text-[#1d1d1f]">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center">
        <section className="w-full max-w-2xl rounded-[32px] border border-white/80 bg-white/75 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#ff3b30] text-white shadow-lg shadow-red-500/20">
            <AlertCircle className="h-7 w-7" />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[#86868b]">
            System notice
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
            This page did not load.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#6e6e73]">
            Something went wrong while opening this page. Try refreshing the
            route, or return home and start again.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#007aff] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6]"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </button>

            <a
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:bg-[#f5f5f7]"
            >
              <Home className="h-4 w-4" />
              Go home
            </a>
          </div>

          {error?.message && (
            <div className="mt-8 rounded-[20px] border border-black/5 bg-[#f5f5f7] px-4 py-3 text-left">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
                Error details
              </p>
              <p className="mt-2 break-words text-sm leading-6 text-[#6e6e73]">
                {error.message}
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { title: "RailSync — AI Freight Booking" },
      {
        name: "description",
        content:
          "Book, match, and manage freight shipments with an Apple-inspired AI dispatch experience.",
      },
      { name: "author", content: "RailSync" },

      { property: "og:title", content: "RailSync — AI Freight Booking" },
      {
        property: "og:description",
        content:
          "Conversational freight booking for routes, trucks, warehouses, and dispatch teams.",
      },
      { property: "og:type", content: "website" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RailSync — AI Freight Booking" },
      {
        name: "twitter:description",
        content:
          "Book freight with a clean, modern AI dispatch interface.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body className="bg-[#f5f5f7] text-[#1d1d1f] antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}