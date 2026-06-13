import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, type ReactNode } from "react";
import { AppShell } from "@/components/AppShell";
import { MOCK_TRUCKS, MOCK_WAREHOUSES } from "@/lib/railsync-data";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Clock,
  IndianRupee,
  MapPin,
  MessageSquareText,
  Phone,
  Shield,
  Sparkles,
  Star,
  Truck,
  User,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [{ title: "Booking Review · RailSync" }],
  }),
  component: BookingCardPage,
});

function BookingCardPage() {
  const navigate = useNavigate();
  const truck = MOCK_TRUCKS[0];
  const wh = MOCK_WAREHOUSES[0];

  const bookingId = useMemo(
    () => `RS-DRAFT-${Date.now().toString().slice(-5)}`,
    [],
  );

  return (
    <AppShell>
      <main className="min-h-[calc(100vh-4rem)] bg-[#f5f5f7] px-4 py-8 text-[#1d1d1f] lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <button
            type="button"
            onClick={() => navigate({ to: "/match" })}
            className="mb-8 inline-flex h-11 items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 text-sm font-semibold text-[#424245] shadow-sm backdrop-blur-xl transition hover:bg-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to matches
          </button>

          <section className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-bold text-[#424245] shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#34c759]" />
                VERIFIED BEST MATCH
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] lg:text-7xl">
                Review your booking.
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6e6e73]">
                Confirm the assigned vehicle, driver, destination warehouse,
                schedule, and final all-inclusive price.
              </p>
            </div>

            <aside className="rounded-[40px] border border-white/90 bg-white/80 p-8 shadow-[0_32px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868b]">
                TOTAL ALL-INCLUSIVE
              </p>

              <div className="mt-3 flex items-center text-6xl font-bold tracking-tight">
                <IndianRupee className="h-10 w-10 text-[#007aff]" />
                {truck.price.toLocaleString()}
              </div>

              <p className="mt-3 text-base text-[#6e6e73]">
                Includes handling, tolls, and GST
              </p>

              <div className="mt-6 rounded-2xl bg-[#f5f5f7] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                  BOOKING REFERENCE
                </p>
                <p className="mt-1 text-xl font-bold">{bookingId}</p>
              </div>
            </aside>
          </section>

          <section className="mt-8 overflow-hidden rounded-[48px] border border-white/90 bg-white/80 shadow-[0_40px_120px_rgba(0,0,0,0.14)] backdrop-blur-3xl">
            <div className="border-b border-black/5 px-6 py-6 sm:px-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white shadow-xl">
                    <Shield className="h-6 w-6" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Shipment Booking Card
                    </h2>
                    <p className="text-[#86868b]">
                      Capacity, route, and dock slot are locked.
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#e9f8ee] px-4 py-2 text-sm font-bold text-[#1f8f46]">
                  <CheckCircle2 className="h-5 w-5" />
                  READY TO CONFIRM
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <BookingMessageBox truckNumber={truck.number} warehouseName={wh.name} />

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Section icon={Truck} title="Truck">
                  <Row label="Number">{truck.number}</Row>
                  <Row label="Capacity">{truck.capacity}</Row>
                  <Row label="Rating">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#ffcc00] text-[#ffcc00]" />
                      {truck.rating}
                    </span>
                  </Row>
                </Section>

                <Section icon={User} title="Driver">
                  <Row label="Name">{truck.driver}</Row>
                  <Row label="Contact">
                    <span className="inline-flex items-center gap-1">
                      <Phone className="h-4 w-4 text-[#86868b]" />
                      {truck.driverPhone}
                    </span>
                  </Row>
                  <Row label="ETA pickup">{truck.eta}</Row>
                </Section>

                <Section icon={Warehouse} title="Warehouse">
                  <Row label="Facility">{wh.name}</Row>
                  <Row label="Dock">{wh.dock}</Row>
                  <Row label="Location">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-[#86868b]" />
                      {wh.location}
                    </span>
                  </Row>
                </Section>

                <Section icon={Clock} title="Schedule">
                  <Row label="Pickup">Today, 16:00</Row>
                  <Row label="Distance">{wh.distance}</Row>
                  <Row label="Est. delivery">Today, 22:30</Row>
                </Section>
              </div>
            </div>

            <div className="border-t border-black/5 bg-white/60 p-6 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => navigate({ to: "/confirm" })}
                  className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#007aff] px-8 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-[#006ee6] hover:scale-[1.02]"
                >
                  Confirm Booking
                  <ChevronRight className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate({ to: "/match" })}
                  className="inline-flex h-14 flex-1 items-center justify-center rounded-full border border-black/10 bg-white px-8 text-lg font-bold text-[#1d1d1f] shadow-sm transition hover:bg-[#f5f5f7]"
                >
                  See Alternatives
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AppShell>
  );
}

function BookingMessageBox({
  truckNumber,
  warehouseName,
}: {
  truckNumber: string;
  warehouseName: string;
}) {
  return (
    <div className="rounded-[40px] border border-black/5 bg-white p-6 shadow-sm sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] bg-[#007aff] text-white shadow-lg shadow-blue-500/30">
          <MessageSquareText className="h-8 w-8" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xl font-bold text-[#1d1d1f]">
                RailSync AI Analysis
              </p>
              <p className="mt-3 text-lg leading-8 text-[#6e6e73]">
                This is your strongest available match. We have verified vehicle
                capacity, driver credentials, and lock-in dock availability at
                your destination warehouse for your requested window.
              </p>
            </div>

            <div className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-2 text-sm font-bold text-[#424245]">
              <Sparkles className="h-4 w-4 text-[#007aff]" />
              SMART DISPATCH
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <MessageChip label="Truck ID" value={truckNumber} />
            <MessageChip label="Destination" value={warehouseName} />
            <MessageChip label="Pickup Time" value="Today 16:00" />
            <MessageChip label="Priority" value="Standard" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-black/10 bg-[#f5f5f7] px-4 py-2 text-sm font-medium">
      <span className="text-[#86868b]">{label}: </span>
      <span className="font-bold text-[#1d1d1f]">{value}</span>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-black/5 bg-[#f5f5f7] p-5">
      <div className="mb-4 flex items-center gap-3 border-b border-black/5 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#007aff] shadow-sm">
          <Icon className="h-4 w-4" />
        </div>

        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#86868b]">
          {title}
        </h3>
      </div>

      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-[#6e6e73]">{label}</span>
      <span className="min-w-0 text-right font-semibold text-[#1d1d1f]">
        {children}
      </span>
    </div>
  );
}