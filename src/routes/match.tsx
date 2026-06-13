import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { MOCK_TRUCKS, MOCK_WAREHOUSES } from "@/lib/railsync-data";
import { Sparkles, Truck, Warehouse, MapPin, Clock, IndianRupee, Star, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/match")({
  head: () => ({ meta: [{ title: "AI Matching · RailSync" }] }),
  component: MatchPage,
});

function MatchPage() {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const ids = [
      setTimeout(() => setStage(1), 700),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2300),
    ];
    return () => ids.forEach(clearTimeout);
  }, []);

  const steps = [
    { label: "Scanning 1,240 active trucks within 50km", done: stage >= 1 },
    { label: "Filtering by capacity, dock & ETA", done: stage >= 2 },
    { label: "Ranking by distance, cost & rating", done: stage >= 3 },
  ];

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 glass-soft px-3 py-1.5 rounded-full text-xs font-medium text-secondary mb-3">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" /> AI Matching Engine
        </div>
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-2">Finding the best match</h1>
        <p className="text-muted-foreground mb-8">Analyzing fleet, warehouses and routes in real time.</p>

        <div className="glass-card p-6 mb-8 space-y-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${s.done ? "bg-success text-white" : "glass-soft"}`}>
                {s.done ? <CheckCircle2 className="w-4 h-4" /> : <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />}
              </div>
              <span className={`text-sm ${s.done ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <section>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Top Trucks</h2>
            <div className="space-y-3">
              {MOCK_TRUCKS.map((t, i) => (
                <div key={t.id} className={`glass-card p-5 transition-all duration-500 ${stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-secondary/15 to-primary/15 flex items-center justify-center">
                        <Truck className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold">{t.number}</div>
                        <div className="text-xs text-muted-foreground">{t.capacity}</div>
                      </div>
                    </div>
                    {i === 0 && <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-success text-white">Best</span>}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <Pill icon={MapPin}>{t.location}</Pill>
                    <Pill icon={Clock}>{t.eta}</Pill>
                    <Pill icon={Star}>{t.rating}</Pill>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/40">
                    <div className="text-xs text-muted-foreground">{t.driver}</div>
                    <div className="font-display font-semibold flex items-center"><IndianRupee className="w-3.5 h-3.5" />{t.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Warehouses</h2>
            <div className="space-y-3">
              {MOCK_WAREHOUSES.map((w, i) => (
                <div key={w.id} className={`glass-card p-5 transition-all duration-500 ${stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-success/15 to-secondary/15 flex items-center justify-center">
                      <Warehouse className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold">{w.name}</div>
                      <div className="text-xs text-muted-foreground">{w.location} · {w.distance}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Pill>{w.dock} available</Pill>
                    <Pill>{w.capacityFree} free</Pill>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={() => navigate({ to: "/book" })}
            disabled={stage < 3}
            className="px-6 py-3 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white font-medium shadow-[var(--shadow-float)] hover:scale-[1.02] transition disabled:opacity-50"
          >
            View best match →
          </button>
        </div>
      </div>
    </AppShell>
  );
}

function Pill({ icon: Icon, children }: { icon?: typeof MapPin; children: React.ReactNode }) {
  return (
    <div className="glass-soft px-3 py-2 rounded-xl flex items-center gap-1.5 text-foreground/80">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span className="truncate">{children}</span>
    </div>
  );
}
