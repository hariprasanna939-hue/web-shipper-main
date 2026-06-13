import { Link, useRouterState } from "@tanstack/react-router";
import { MessageSquare, Sparkles, Package, MapPin, Clock, CheckCircle2, Train } from "lucide-react";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Booking", icon: MessageSquare },
  { to: "/match", label: "Match", icon: Sparkles },
  { to: "/book", label: "Card", icon: Package },
  { to: "/track", label: "Tracking", icon: MapPin },
  { to: "/history", label: "History", icon: Clock },
  { to: "/complete", label: "Delivery", icon: CheckCircle2 },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 px-4 pt-4 pb-2 flex justify-center animate-fade-in">
        <div className="glass-card liquid-shine px-3 py-2 flex items-center gap-2 max-w-full">
          <Link to="/" className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-2xl hover-scale">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-[var(--shadow-float)]">
              <Train className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display text-base font-semibold tracking-tight hidden sm:inline">RailSync</span>
          </Link>

          <div className="w-px h-7 bg-white/40 mx-1 hidden md:block" />

          <nav className="flex items-center gap-1 overflow-x-auto">
            {NAV.map(({ to, label, icon: Icon }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`group relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    active
                      ? "bg-gradient-to-br from-secondary to-primary text-white shadow-[var(--shadow-float)] scale-105"
                      : "text-foreground/75 hover:bg-white/60 hover:scale-105"
                  }`}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:rotate-6" strokeWidth={2.2} />
                  <span className="hidden md:inline">{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1 min-w-0 p-4 lg:p-8 animate-fade-in">{children}</main>
    </div>
  );
}
