import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  Download,
  IndianRupee,
  ReceiptText,
  Star,
  Truck,
  User,
  Warehouse,
} from "lucide-react";

export const Route = createFileRoute("/complete")({
  head: () => ({
    meta: [{ title: "Delivered · RailSync" }],
  }),
  component: CompletePage,
});

function CompletePage() {
  return (
    <AppShell>
      <main className="min-h-[calc(100vh-4rem)] bg-[#f5f5f7] px-4 py-6 text-[#1d1d1f] lg:px-6">
        <div className="mx-auto max-w-6xl">
          <section className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="overflow-hidden rounded-[34px] border border-white/80 bg-white/75 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl">
              <div className="px-6 py-8 text-center sm:px-10 sm:py-12">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#34c759] text-white shadow-lg shadow-green-500/20">
                  <CheckCircle2 className="h-10 w-10" strokeWidth={2.5} />
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e9f8ee] px-3 py-1.5 text-xs font-semibold text-[#1f8f46]">
                  <CheckCircle2 className="h-4 w-4" />
                  Completed
                </div>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl">
                  Delivered successfully.
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#6e6e73]">
                  Cargo has been handed over to Hosur Logistics Hub. Proof of
                  delivery and receipt are ready.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                  <Stat icon={Truck} label="Shipment ID" value="RS-48201" />
                  <Stat icon={User} label="Driver" value="Ramesh K." />
                  <Stat icon={Warehouse} label="Warehouse" value="Hosur Hub" />
                  <Stat icon={Clock} label="Delivery time" value="6h 12m" />
                  <Stat icon={IndianRupee} label="Final cost" value="₹18,500" />
                  <Stat icon={Star} label="Your rating" value="—" />
                </div>
              </div>

              <div className="border-t border-black/5 bg-white/50 p-5 sm:p-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">
                      Delivery photo
                    </h2>
                    <p className="text-sm text-[#86868b]">
                      Proof of delivery captured at 20:32.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#424245] shadow-sm">
                    <Camera className="h-4 w-4 text-[#007aff]" />
                    POD
                  </div>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-black/5 bg-[#f5f5f7] shadow-sm">
                  <div className="relative aspect-[16/9]">
                    <svg
                      viewBox="0 0 800 450"
                      className="h-full w-full"
                      role="img"
                      aria-label="Delivery proof showing truck at Hosur Hub"
                    >
                      <defs>
                        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#dbeafe" />
                          <stop offset="55%" stopColor="#eef2ff" />
                          <stop offset="100%" stopColor="#f5f5f7" />
                        </linearGradient>
                        <linearGradient id="truckBlue" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#007aff" />
                          <stop offset="100%" stopColor="#0051d5" />
                        </linearGradient>
                      </defs>

                      <rect width="800" height="285" fill="url(#sky)" />
                      <rect y="285" width="800" height="165" fill="#d1d1d6" />
                      <rect y="336" width="800" height="10" fill="#b8b8bd" />

                      <rect
                        x="92"
                        y="150"
                        width="240"
                        height="170"
                        rx="14"
                        fill="#3a3a3c"
                      />
                      <rect
                        x="92"
                        y="150"
                        width="240"
                        height="46"
                        rx="14"
                        fill="#1d1d1f"
                      />
                      <text
                        x="212"
                        y="180"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="15"
                        fontWeight="700"
                        letterSpacing="1"
                      >
                        HOSUR HUB
                      </text>

                      <rect x="122" y="220" width="78" height="62" rx="8" fill="#8e8e93" />
                      <rect x="224" y="220" width="78" height="62" rx="8" fill="#8e8e93" />
                      <rect x="140" y="292" width="144" height="14" rx="7" fill="#636366" />

                      <rect
                        x="410"
                        y="205"
                        width="205"
                        height="112"
                        rx="16"
                        fill="url(#truckBlue)"
                      />
                      <rect
                        x="590"
                        y="229"
                        width="62"
                        height="88"
                        rx="14"
                        fill="#004bb5"
                      />
                      <rect x="604" y="242" width="34" height="26" rx="6" fill="#bfdbfe" />

                      <circle cx="445" cy="323" r="21" fill="#1d1d1f" />
                      <circle cx="445" cy="323" r="8" fill="#8e8e93" />
                      <circle cx="585" cy="323" r="21" fill="#1d1d1f" />
                      <circle cx="585" cy="323" r="8" fill="#8e8e93" />

                      <text
                        x="512"
                        y="267"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="16"
                        fontWeight="700"
                      >
                        TN-09-AC-4521
                      </text>
                    </svg>

                    <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold text-[#1d1d1f] shadow-sm backdrop-blur-xl">
                      <Camera className="h-4 w-4 text-[#007aff]" />
                      POD · 20:32
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-[30px] border border-white/80 bg-white/75 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
                <ReceiptText className="h-5 w-5" />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Digital receipt
                  </h2>
                  <p className="mt-1 text-sm text-[#86868b]">
                    Final settlement summary
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#007aff] transition hover:bg-[#e9e9ec]"
                  aria-label="Download receipt PDF"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 space-y-3">
                <Line k="Base freight">₹15,000</Line>
                <Line k="Loading & handling">₹1,200</Line>
                <Line k="Tolls & fuel surcharge">₹850</Line>
                <Line k="GST (18%)">₹1,450</Line>
              </div>

              <div className="my-5 h-px bg-black/10" />

              <Line k="Total paid" bold>
                ₹18,500
              </Line>

              <div className="mt-6 rounded-[22px] bg-[#f5f5f7] p-4">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
                  Payment status
                </p>
                <p className="mt-1 flex items-center gap-2 text-base font-semibold text-[#1d1d1f]">
                  <CheckCircle2 className="h-4 w-4 text-[#34c759]" />
                  Paid and closed
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#007aff] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6]"
                >
                  Book another shipment
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/history"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:bg-[#f5f5f7]"
                >
                  View order history
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </AppShell>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Truck;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-black/5 bg-[#f5f5f7] p-4 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#007aff] shadow-sm">
        <Icon className="h-4 w-4" />
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
        {label}
      </p>

      <p className="mt-1 truncate text-base font-semibold text-[#1d1d1f]">
        {value}
      </p>
    </div>
  );
}

function Line({
  k,
  children,
  bold,
}: {
  k: string;
  children: React.ReactNode;
  bold?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 ${
        bold ? "text-lg font-semibold text-[#1d1d1f]" : "text-sm"
      }`}
    >
      <span className={bold ? "" : "text-[#6e6e73]"}>{k}</span>
      <span className="font-semibold text-[#1d1d1f]">{children}</span>
    </div>
  );
}