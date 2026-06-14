import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { TIMELINE_STEPS } from "@/lib/railsync-data";
import { useEffect, useState } from "react";
import { Truck, MapPin, Clock, CheckCircle2, Navigation, Phone } from "lucide-react";

export const Route = createFileRoute("/track")({
  head: () => ({ meta: [{ title: "Live Tracking · RailSync" }] }),
  component: TrackPage,
});

function TrackPage() {
  const [progress, setProgress] = useState(0.35);
  const [step, setStep] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => Math.min(p + 0.005, 0.95));
    }, 800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress > 0.5) setStep(6);
    if (progress > 0.85) setStep(7);
  }, [progress]);

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_360px]">
        {/* Map */}
        <div className="glass-card overflow-hidden relative h-[50vw] min-h-[280px] max-h-[500px] lg:h-[70vh] lg:max-h-none lg:min-h-[500px]">
          <StylizedMap progress={progress} />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 glass-panel rounded-2xl px-3 py-2 flex items-center gap-2 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Live · Updated just now
          </div>
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass-panel rounded-2xl sm:rounded-3xl p-3 sm:p-5">
            <div className="flex items-center justify-between mb-3 gap-2">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">ETA</div>
                <div className="font-display text-xl sm:text-2xl font-semibold">2h 14m</div>
              </div>
              <div className="text-center hidden sm:block">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Distance left</div>
                <div className="font-display text-xl sm:text-2xl font-semibold">142 km</div>
              </div>
              <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white text-xs sm:text-sm font-medium">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Call
              </button>
            </div>
            <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary to-success transition-all duration-700" style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2">
              <span>Chennai Rail Yard</span>
              <span className="hidden sm:inline">142 km left</span>
              <span>Hosur Warehouse</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-4">
          <div className="glass-card p-4 sm:p-5 flex-1 lg:flex-none">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Active Shipment</div>
            <div className="font-display text-lg sm:text-xl font-semibold mb-3">RS-48201</div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2 text-sm">
              <Row icon={Truck}>TN-09-AC-4521 · 25T</Row>
              <Row icon={Navigation}>Ramesh Kumar</Row>
              <Row icon={MapPin}>Near Vellore, NH-44</Row>
              <Row icon={Clock}>Departed 14:20</Row>
            </div>
          </div>

          <div className="glass-card p-4 sm:p-5 flex-1 lg:flex-none">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Timeline</div>
            <div className="space-y-2">
              {TIMELINE_STEPS.map((label, i) => {
                const done = i <= step;
                const active = i === step + 1;
                return (
                  <div key={label} className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      done ? "bg-gradient-to-br from-success to-secondary text-white" : active ? "glass-soft ring-2 ring-secondary/40" : "glass-soft"
                    }`}>
                      {done ? <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-secondary animate-pulse" : "bg-muted-foreground/40"}`} />}
                    </div>
                    <span className={`text-xs sm:text-sm ${done ? "font-medium text-foreground" : "text-muted-foreground"}`}>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Link to="/complete" className="block glass-soft rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-center text-sm font-medium hover:bg-white/70 transition">
            Preview delivery completion →
          </Link>
        </div>
      </div>
    </AppShell>
  );
}

function Row({ icon: Icon, children }: { icon: typeof Truck; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 glass-soft rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2">
      <Icon className="w-3.5 h-3.5 text-secondary shrink-0" />
      <span className="text-xs sm:text-sm truncate">{children}</span>
    </div>
  );
}

function StylizedMap({ progress }: { progress: number }) {
  const x = 60 + progress * 680;
  const y = 380 - Math.sin(progress * Math.PI) * 180;

  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dde7f5" />
          <stop offset="100%" stopColor="#e8eef6" />
        </linearGradient>
        <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <radialGradient id="pulse">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 55} x2="800" y2={i * 55} stroke="#fff" strokeOpacity="0.5" strokeWidth="1" />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="600" stroke="#fff" strokeOpacity="0.5" strokeWidth="1" />
      ))}
      <ellipse cx="120" cy="120" rx="100" ry="60" fill="#bcd5ee" opacity="0.6" />
      <ellipse cx="700" cy="500" rx="140" ry="80" fill="#bcd5ee" opacity="0.6" />
      <path d="M 60 380 Q 400 100 740 380" stroke="#cbd6e8" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M 60 380 Q 400 100 740 380" stroke="url(#route)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset={1000 - progress * 1000} />
      <circle cx="60" cy="380" r="14" fill="#2563EB" />
      <circle cx="60" cy="380" r="6" fill="#fff" />
      <circle cx="740" cy="380" r="14" fill="#10B981" />
      <circle cx="740" cy="380" r="6" fill="#fff" />
      <circle cx={x} cy={y} r="32" fill="url(#pulse)">
        <animate attributeName="r" values="28;40;28" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx={x} cy={y} r="14" fill="#fff" stroke="#2563EB" strokeWidth="3" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#2563EB">🚚</text>
    </svg>
  );
}
