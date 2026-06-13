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
  const items = tab === "all" ? MOCK_SHIPMENTS : MOCK_SHIPMENTS.filter((s) => s.status === tab);

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-2">Order history</h1>
        <p className="text-muted-foreground mb-6">All your shipments in one place.</p>

        <div className="glass-card p-1.5 inline-flex gap-1 mb-6">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                tab === t.id ? "bg-gradient-to-br from-secondary to-primary text-white shadow-[var(--shadow-float)]" : "hover:bg-white/60"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {items.map((s) => <ShipmentCard key={s.id} s={s} />)}
          {items.length === 0 && (
            <div className="glass-card p-12 text-center text-muted-foreground">No shipments yet.</div>
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
    <div className="glass-card p-5 flex flex-col md:flex-row md:items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/15 to-primary/15 flex items-center justify-center shrink-0">
        <Package className="w-5 h-5 text-secondary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-display font-semibold">{s.id}</span>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusColor}`}>{statusLabel}</span>
        </div>
        <div className="text-sm text-foreground">{s.cargo} · {s.weight}</div>
        <div className="text-xs text-muted-foreground">{s.pickup} → {s.destination} · {s.date}</div>
      </div>
      <div className="text-right">
        <div className="font-display font-semibold flex items-center justify-end"><IndianRupee className="w-3.5 h-3.5" />{s.price.toLocaleString()}</div>
        {s.driver && <div className="text-xs text-muted-foreground">{s.driver}</div>}
      </div>
      <div className="flex gap-2">
        <IconBtn title="View"><Eye className="w-4 h-4" /></IconBtn>
        <IconBtn title="Rebook"><RefreshCw className="w-4 h-4" /></IconBtn>
        <IconBtn title="Receipt"><Download className="w-4 h-4" /></IconBtn>
      </div>
    </div>
  );
}

function IconBtn({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <button title={title} className="w-10 h-10 rounded-2xl glass-soft flex items-center justify-center hover:bg-white/80 transition">
      {children}
    </button>
  );
}
