import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Clock,
  MapPin,
  PackageCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/confirm")({
  head: () => ({
    meta: [{ title: "Booking Confirmed · RailSync" }],
  }),
  component: ConfirmPage,
});

function ConfirmPage() {
  const [shipmentId] = useState(
    () => `RS-${Math.floor(48000 + Math.random() * 999)}`,
  );

  const [notifs, setNotifs] = useState<string[]>([]);

  useEffect(() => {
    const driverTimer = setTimeout(() => {
      setNotifs((current) => [...current, "Driver Ramesh Kumar notified"]);
    }, 600);

    const warehouseTimer = setTimeout(() => {
      setNotifs((current) => [...current, "Hosur Warehouse - Dock 7 reserved"]);
    }, 1300);

    return () => {
      clearTimeout(driverTimer);
      clearTimeout(warehouseTimer);
    };
  }, []);

  const timeline = [
    { icon: Truck, text: "Truck TN-09-AC-4521 reserved" },
    { icon: Warehouse, text: "Dock 7 at Hosur reserved" },
    ...notifs.map((text) => ({ icon: Bell, text })),
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] lg:items-start">
          {/* Main card */}
          <section className="overflow-hidden rounded-[28px] sm:rounded-[34px] border border-white/80 bg-white/75 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl">
            <div className="px-4 py-6 text-center sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-[22px] sm:rounded-[28px] bg-[#34c759] text-white shadow-lg shadow-green-500/20">
                <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.5} />
              </div>

              <p className="mt-5 sm:mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#86868b]">
                Booking complete
              </p>

              <h1 className="mt-2 sm:mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl">
                Shipment confirmed.
              </h1>

              <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm leading-6 text-[#6e6e73] sm:text-base sm:leading-7">
                Your vehicle, driver, and destination dock are assigned. The
                shipment has entered the pickup queue.
              </p>

              <div className="mx-auto mt-5 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl">
                <StatusCard
                  icon={<PackageCheck className="h-4 w-4 sm:h-5 sm:w-5" />}
                  label="Shipment ID"
                  value={shipmentId}
                />
                <StatusCard
                  icon={<Clock className="h-4 w-4 sm:h-5 sm:w-5" />}
                  label="Status"
                  value="Awaiting Pickup"
                />
                <StatusCard
                  icon={<MapPin className="h-4 w-4 sm:h-5 sm:w-5" />}
                  label="Destination"
                  value="Hosur"
                />
              </div>

              <Link
                to="/track"
                className="mt-6 sm:mt-9 inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-[#007aff] px-5 sm:px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6]"
              >
                Track shipment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="border-t border-black/5 bg-white/50 px-4 py-4 sm:px-8 sm:py-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div>
                  <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                    Dispatch updates
                  </h2>
                  <p className="text-xs text-[#86868b] sm:text-sm">
                    Live actions completed for this shipment.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7d6] px-3 py-1.5 text-xs font-semibold text-[#8a6400] shrink-0">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#ffcc00]" />
                  Queue
                </div>
              </div>

              <div className="space-y-2">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={`${item.text}-${index}`}
                    icon={item.icon}
                    text={item.text}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Sidebar — shows below on mobile */}
          <aside className="rounded-[24px] sm:rounded-[30px] border border-white/80 bg-white/75 p-4 sm:p-5 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
              <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <h2 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight">
              Next step
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
              Keep the tracking page open to monitor pickup, route progress,
              warehouse arrival, and delivery confirmation.
            </p>

            <div className="mt-4 rounded-2xl bg-[#f5f5f7] p-3 sm:p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
                Pickup window
              </p>
              <p className="mt-1 text-base sm:text-lg font-semibold">Today, 16:00</p>
            </div>

            <div className="mt-3 rounded-2xl bg-[#f5f5f7] p-3 sm:p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
                Estimated delivery
              </p>
              <p className="mt-1 text-base sm:text-lg font-semibold">Today, 22:30</p>
            </div>
          </aside>
        </div>
      </div>
    </AppShell>
  );
}

function StatusCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] sm:rounded-[24px] border border-black/5 bg-[#f5f5f7] p-3 sm:p-4 text-left">
      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-[#007aff] shadow-sm">
        {icon}
      </div>

      <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
        {label}
      </p>

      <p className="mt-0.5 sm:mt-1 truncate text-sm sm:text-base font-semibold text-[#1d1d1f]">
        {value}
      </p>
    </div>
  );
}

function TimelineItem({
  icon: Icon,
  text,
}: {
  icon: typeof Truck;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 rounded-[18px] sm:rounded-[22px] border border-black/5 bg-[#f5f5f7] p-2.5 sm:p-3">
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-[#34c759] shadow-sm">
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </div>

      <span className="min-w-0 flex-1 text-xs sm:text-sm font-medium text-[#1d1d1f]">
        {text}
      </span>

      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#34c759]" />
    </div>
  );
}