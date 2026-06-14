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
      <div className="mx-auto max-w-[1400px]">
        <button
          type="button"
          onClick={() => navigate({ to: "/match" })}
          className="mb-5 sm:mb-8 inline-flex h-10 items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-[#424245] shadow-sm backdrop-blur-xl transition hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to matches
        </button>

        {/* Hero + Price */}
        <section className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_380px] lg:items-start mb-5 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-bold text-[#424245] shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#34c759]" />
              VERIFIED BEST MATCH
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-7xl">
              Review your booking.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e6e73] sm:text-base sm:leading-8">
              Confirm the assigned vehicle, driver, destination warehouse,
              schedule, and final all-inclusive price.
            </p>
          </div>

          <aside className="rounded-[32px] border border-white/90 bg-white/80 p-5 sm:p-8 shadow-[0_32px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868b]">
              TOTAL ALL-INCLUSIVE
            </p>

            <div className="mt-2 sm:mt-3 flex items-center text-4xl sm:text-6xl font-bold tracking-tight">
              <IndianRupee className="h-7 w-7 sm:h-10 sm:w-10 text-[#007aff]" />
              {truck.price.toLocaleString()}
            </div>

            <p className="mt-2 text-sm text-[#6e6e73]">
              Includes handling, tolls, and GST
            </p>

            <div className="mt-4 sm:mt-6 rounded-2xl bg-[#f5f5f7] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                BOOKING REFERENCE
              </p>
              <p className="mt-1 text-lg sm:text-xl font-bold">{bookingId}</p>
            </div>
          </aside>
        </section>

        {/* Booking card */}
        <section className="overflow-hidden rounded-[36px] sm:rounded-[48px] border border-white/90 bg-white/80 shadow-[0_40px_120px_rgba(0,0,0,0.14)] backdrop-blur-3xl">
          <div className="border-b border-black/5 px-4 py-5 sm:px-10 sm:py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white shadow-xl">
                  <Shield className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-lg sm:text-2xl font-bold tracking-tight">
                    Shipment Booking Card
                  </h2>
                  <p className="text-sm text-[#86868b]">
                    Capacity, route, and dock slot are locked.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#e9f8ee] px-3 py-2 text-xs font-bold text-[#1f8f46] sm:px-4">
                <CheckCircle2 className="h-4 w-4" />
                READY TO CONFIRM
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-10">
            <BookingMessageBox truckNumber={truck.number} warehouseName={wh.name} />

            <div className="mt-6 sm:mt-8 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
              <Section icon={Truck} title="Truck">
                <Row label="Number">{truck.number}</Row>
                <Row label="Capacity">{truck.capacity}</Row>
                <Row label="Rating">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-[#ffcc00] text-[#ffcc00]" />
                    {truck.rating}
                  </span>
                </Row>
              </Section>

              <Section icon={User} title="Driver">
                <Row label="Name">{truck.driver}</Row>
                <Row label="Contact">
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5 text-[#86868b]" />
                    {truck.driverPhone}
                  </span>
                </Row>
                <Row label="ETA">{truck.eta}</Row>
              </Section>

              <Section icon={Warehouse} title="Warehouse">
                <Row label="Facility">{wh.name}</Row>
                <Row label="Dock">{wh.dock}</Row>
                <Row label="Location">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#86868b]" />
                    {wh.location}
                  </span>
                </Row>
              </Section>

              <Section icon={Clock} title="Schedule">
                <Row label="Pickup">Today, 16:00</Row>
                <Row label="Distance">{wh.distance}</Row>
                <Row label="Delivery">Today, 22:30</Row>
              </Section>
            </div>
          </div>

          <div className="border-t border-black/5 bg-white/60 p-4 sm:p-10">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate({ to: "/confirm" })}
                className="inline-flex h-12 sm:h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 sm:px-8 text-base sm:text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-[#006ee6] hover:scale-[1.02]"
              >
                Confirm Booking
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate({ to: "/match" })}
                className="inline-flex h-12 sm:h-14 flex-1 items-center justify-center rounded-full border border-black/10 bg-white px-6 sm:px-8 text-base sm:text-lg font-bold text-[#1d1d1f] shadow-sm transition hover:bg-[#f5f5f7]"
              >
                See Alternatives
              </button>
            </div>
          </div>
        </section>
      </div>
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
    <div className="rounded-[28px] sm:rounded-[40px] border border-black/5 bg-white p-4 shadow-sm sm:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-[20px] sm:rounded-[24px] bg-[#007aff] text-white shadow-lg shadow-blue-500/30">
          <MessageSquareText className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-lg font-bold text-[#1d1d1f]">
                RailSync AI Analysis
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6e6e73] sm:text-base sm:leading-8">
                This is your strongest available match. We have verified vehicle
                capacity, driver credentials, and lock-in dock availability at
                your destination warehouse.
              </p>
            </div>

            <div className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-bold text-[#424245]">
              <Sparkles className="h-3.5 w-3.5 text-[#007aff]" />
              SMART DISPATCH
            </div>
          </div>

          <div className="mt-4 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
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
    <div className="rounded-full border border-black/10 bg-[#f5f5f7] px-3 py-1.5 text-xs font-medium">
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
    <section className="rounded-[22px] sm:rounded-[28px] border border-black/5 bg-[#f5f5f7] p-4">
      <div className="mb-3 flex items-center gap-2 sm:gap-3 border-b border-black/5 pb-3">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-[#007aff] shadow-sm">
          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>

        <h3 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#86868b]">
          {title}
        </h3>
      </div>

      <div className="space-y-2 sm:space-y-3">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
      <span className="text-[#6e6e73] shrink-0">{label}</span>
      <span className="min-w-0 text-right font-semibold text-[#1d1d1f] truncate">
        {children}
      </span>
    </div>
  );
}