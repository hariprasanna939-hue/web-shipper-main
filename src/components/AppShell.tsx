import { Link, useRouterState } from "@tanstack/react-router";
import { MessageSquare, Sparkles, Package, MapPin, Clock, CheckCircle2, Train, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 px-3 pt-3 pb-2 sm:px-4 sm:pt-4 flex justify-center animate-fade-in">
        <div className="glass-card liquid-shine px-3 py-2 flex items-center gap-2 w-full max-w-5xl">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-2xl hover-scale shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-[var(--shadow-float)]">
              <Train className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display text-base font-semibold tracking-tight hidden sm:inline">RailSync</span>
          </Link>

          <div className="w-px h-7 bg-white/40 mx-1 hidden md:block" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 overflow-x-auto">
            {NAV.map(({ to, label, icon: Icon }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`group relative flex items-center gap-1.5 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    active
                      ? "bg-gradient-to-br from-secondary to-primary text-white shadow-[var(--shadow-float)] scale-105"
                      : "text-foreground/75 hover:bg-white/60 hover:scale-105"
                  }`}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:rotate-6" strokeWidth={2.2} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto flex items-center justify-center w-9 h-9 rounded-2xl glass-soft hover:bg-white/70 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <div className="fixed inset-x-3 top-[70px] z-40 md:hidden">
          <nav className="glass-card liquid-shine p-3 flex flex-col gap-1 shadow-[var(--shadow-glass-lg)]">
            {NAV.map(({ to, label, icon: Icon }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-br from-secondary to-primary text-white shadow-[var(--shadow-float)]"
                      : "text-foreground/80 hover:bg-white/70"
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2.2} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Page content */}
      <main className="flex-1 min-w-0 p-3 sm:p-4 lg:p-8 animate-fade-in">{children}</main>
    </div>
  );
}
