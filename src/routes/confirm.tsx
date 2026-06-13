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
    {
      icon: Truck,
      text: "Truck TN-09-AC-4521 reserved",
    },
    {
      icon: Warehouse,
      text: "Dock 7 at Hosur reserved",
    },
    ...notifs.map((text) => ({
      icon: Bell,
      text,
    })),
  ];

  return (
    <AppShell>
      <main className="min-h-[calc(100vh-4rem)] bg-[#f5f5f7] px-4 py-6 text-[#1d1d1f] lg:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_360px] lg:items-start">
          <section className="overflow-hidden rounded-[34px] border border-white/80 bg-white/75 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl">
            <div className="px-6 py-8 text-center sm:px-10 sm:py-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#34c759] text-white shadow-lg shadow-green-500/20">
                <CheckCircle2 className="h-10 w-10" strokeWidth={2.5} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#86868b]">
                Booking complete
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl">
                Shipment confirmed.
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#6e6e73]">
                Your vehicle, driver, and destination dock are assigned. The
                shipment has entered the pickup queue.
              </p>

              <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                <StatusCard
                  icon={<PackageCheck className="h-5 w-5" />}
                  label="Shipment ID"
                  value={shipmentId}
                />
                <StatusCard
                  icon={<Clock className="h-5 w-5" />}
                  label="Status"
                  value="Awaiting Pickup"
                />
                <StatusCard
                  icon={<MapPin className="h-5 w-5" />}
                  label="Destination"
                  value="Hosur"
                />
              </div>

              <Link
                to="/track"
                className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6]"
              >
                Track shipment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="border-t border-black/5 bg-white/50 px-5 py-5 sm:px-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    Dispatch updates
                  </h2>
                  <p className="text-sm text-[#86868b]">
                    Live actions completed for this shipment.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7d6] px-3 py-1.5 text-xs font-semibold text-[#8a6400]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#ffcc00]" />
                  Pickup queue
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

          <aside className="rounded-[30px] border border-white/80 bg-white/75 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
              <Truck className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight">
              Next step
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
              Keep the tracking page open to monitor pickup, route progress,
              warehouse arrival, and delivery confirmation.
            </p>

            <div className="mt-5 rounded-2xl bg-[#f5f5f7] p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
                Pickup window
              </p>
              <p className="mt-1 text-lg font-semibold">Today, 16:00</p>
            </div>

            <div className="mt-3 rounded-2xl bg-[#f5f5f7] p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
                Estimated delivery
              </p>
              <p className="mt-1 text-lg font-semibold">Today, 22:30</p>
            </div>
          </aside>
        </div>
      </main>
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
    <div className="rounded-[24px] border border-black/5 bg-[#f5f5f7] p-4 text-left">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#007aff] shadow-sm">
        {icon}
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

function TimelineItem({
  icon: Icon,
  text,
}: {
  icon: typeof Truck;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[22px] border border-black/5 bg-[#f5f5f7] p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-[#34c759] shadow-sm">
        <Icon className="h-4 w-4" />
      </div>

      <span className="min-w-0 flex-1 text-sm font-medium text-[#1d1d1f]">
        {text}
      </span>

      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#34c759]" />
    </div>
  );
}