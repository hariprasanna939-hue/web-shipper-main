import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { MOCK_SHIPMENTS, type Shipment } from "@/lib/railsync-data";
import { useState } from "react";
import { Package, IndianRupee, Download, RefreshCw, Eye } from "lucide-react";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [{ title: "Order History · RailSync" }] }),
  component: HistoryPage,
});

const TABS = [
  { id: "all", label: "All" },
  { id: "in_transit", label: "In Transit" },
  { id: "delivered", label: "Delivered" },
  { id: "cancelled", label: "Cancelled" },
] as const;

function HistoryPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("all");
  const items =
    tab === "all" ? MOCK_SHIPMENTS : MOCK_SHIPMENTS.filter((s) => s.status === tab);

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-1 sm:mb-2">Order history</h1>
        <p className="text-sm text-muted-foreground mb-4 sm:mb-6">All your shipments in one place.</p>

        {/* Tabs — scrollable on mobile */}
        <div className="mb-4 sm:mb-6 overflow-x-auto pb-1 no-scrollbar">
          <div className="glass-card p-1.5 inline-flex gap-1 min-w-max">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  tab === t.id
                    ? "bg-gradient-to-br from-secondary to-primary text-white shadow-[var(--shadow-float)]"
                    : "hover:bg-white/60 text-foreground/80"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {items.map((s) => <ShipmentCard key={s.id} s={s} />)}
          {items.length === 0 && (
            <div className="glass-card p-8 sm:p-12 text-center text-muted-foreground text-sm">
              No shipments yet.
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function ShipmentCard({ s }: { s: Shipment }) {
  const statusColor = {
    in_transit: "bg-secondary/15 text-secondary",
    delivered: "bg-success/15 text-success",
    cancelled: "bg-destructive/15 text-destructive",
    awaiting: "bg-alert/15 text-alert",
  }[s.status];

  const statusLabel = {
    in_transit: "In Transit",
    delivered: "Delivered",
    cancelled: "Cancelled",
    awaiting: "Awaiting",
  }[s.status];

  return (
    <div className="glass-card p-4 sm:p-5">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-secondary/15 to-primary/15 flex items-center justify-center shrink-0 mt-0.5">
          <Package className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className="font-display font-semibold text-sm sm:text-base">{s.id}</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusColor}`}>
              {statusLabel}
            </span>
          </div>
          <div className="text-sm text-foreground mb-0.5">{s.cargo} · {s.weight}</div>
          <div className="text-xs text-muted-foreground truncate">{s.pickup} → {s.destination} · {s.date}</div>
        </div>

        {/* Price + actions — stacked on mobile */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="font-display font-semibold flex items-center text-sm sm:text-base">
            <IndianRupee className="w-3.5 h-3.5" />{s.price.toLocaleString()}
          </div>
          {s.driver && (
            <div className="text-xs text-muted-foreground hidden sm:block">{s.driver}</div>
          )}
          <div className="flex gap-1.5">
            <IconBtn title="View"><Eye className="w-3.5 h-3.5" /></IconBtn>
            <IconBtn title="Rebook"><RefreshCw className="w-3.5 h-3.5" /></IconBtn>
            <IconBtn title="Receipt"><Download className="w-3.5 h-3.5" /></IconBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconBtn({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <button
      title={title}
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl glass-soft flex items-center justify-center hover:bg-white/80 transition"
    >
      {children}
    </button>
  );
}
