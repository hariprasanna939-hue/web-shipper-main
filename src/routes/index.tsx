import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  MapPin,
  Mic,
  Package,
  Paperclip,
  Route as RouteIcon,
  Send,
  Sparkles,
  Truck,
  Weight,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RailSync — AI Freight Booking" },
      {
        name: "description",
        content: "Book multi-modal freight with conversational AI.",
      },
    ],
  }),
  component: AIBookingPage,
});

type Msg = {
  role: "user" | "ai";
  text: string;
  parsed?: ReturnType<typeof parseShipment>;
};

const SUGGESTIONS = [
  "20T steel coil, Chennai to Hosur, today evening",
  "Book a 30T flatbed from Ennore Port to Bengaluru",
  "Reserve dock at Hosur warehouse for 6PM",
  "Find cheapest truck under 25T",
];

function AIBookingPage() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text: "Hi, I am RailSync AI. Tell me what you need moved, where it starts, where it ends, and when it should arrive.",
    },
  ]);

  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, thinking]);

  const send = (text: string) => {
    const cleanText = text.trim();
    if (!cleanText || thinking) return;

    setMessages((current) => [...current, { role: "user", text: cleanText }]);
    setInput("");
    setThinking(true);

    setTimeout(() => {
      const parsed = parseShipment(cleanText);

      setMessages((current) => [
        ...current,
        {
          role: "ai",
          text: "I found the key shipment details. I am checking capacity, warehouse slots, and route availability now.",
          parsed,
        },
      ]);

      setThinking(false);

      setTimeout(() => {
        navigate({ to: "/match" });
      }, 1400);
    }, 1000);
  };

  return (
    <AppShell>
      <main className="min-h-[calc(100vh-4rem)] bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-[1400px] flex-col px-4 py-6 lg:px-8">
          <header className="grid gap-6 pb-6 lg:grid-cols-[1fr_400px] lg:items-end">
            <section>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-[#424245] shadow-sm backdrop-blur-xl">
                <span className="flex h-2 w-2 rounded-full bg-[#34c759]" />
                AI Dispatch Engine Online
              </div>

              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#1d1d1f] lg:text-7xl">
                Book freight by conversation.
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6e6e73]">
                Describe your shipment naturally. RailSync extracts the load,
                route, timing, and matching requirements for dispatch.
              </p>
            </section>

            <section className="rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                    Live Capacity
                  </p>
                  <p className="mt-1 text-3xl font-bold">Fast match</p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007aff] text-white shadow-lg shadow-blue-500/20">
                  <Truck className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <Metric label="Routes" value="42" />
                <Metric label="Trucks" value="128" />
                <Metric label="Slots" value="18" />
              </div>
            </section>
          </header>

          <section className="grid min-h-0 flex-1 gap-6 lg:grid-cols-[1fr_280px]">
            <div className="flex min-h-0 flex-col overflow-hidden rounded-[40px] border border-white/90 bg-white/80 shadow-[0_32px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl">
              <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">RailSync Assistant</h2>
                    <p className="text-sm text-[#86868b]">
                      Load parsing and booking orchestration
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-2 text-xs font-semibold text-[#424245] sm:flex">
                  <CheckCircle2 className="h-4 w-4 text-[#34c759]" />
                  Ready
                </div>
              </div>

              <div
                ref={scrollRef}
                className="flex-1 space-y-6 overflow-y-auto px-6 py-6 sm:px-10"
              >
                {messages.map((message, index) => (
                  <MessageBubble key={index} message={message} />
                ))}

                {thinking && <ThinkingBubble />}
              </div>

              <div className="border-t border-black/5 bg-white/60 p-6">
                <div className="mb-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => send(suggestion)}
                      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs font-semibold text-[#424245] shadow-sm transition hover:border-[#007aff]/30 hover:bg-[#007aff] hover:text-white"
                    >
                      {suggestion}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </div>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    send(input);
                  }}
                  className="mx-auto flex max-w-4xl items-end gap-3 rounded-[32px] border border-black/10 bg-[#f5f5f7] p-3 shadow-inner"
                >
                  <button
                    type="button"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[#6e6e73] transition hover:bg-white hover:text-[#1d1d1f]"
                    aria-label="Attach file"
                  >
                    <Paperclip className="h-6 w-6" />
                  </button>

                  <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        send(input);
                      }
                    }}
                    rows={1}
                    placeholder="Describe your shipment (e.g. 20 tons steel coil, Chennai to Hosur)"
                    className="max-h-48 flex-1 resize-none bg-transparent px-1 py-3 text-lg leading-7 text-[#1d1d1f] outline-none placeholder:text-[#86868b]"
                  />

                  <button
                    type="button"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[#6e6e73] transition hover:bg-white hover:text-[#1d1d1f]"
                    aria-label="Voice input"
                  >
                    <Mic className="h-6 w-6" />
                  </button>

                  <button
                    type="submit"
                    disabled={!input.trim() || thinking}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#007aff] text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6] disabled:cursor-not-allowed disabled:bg-[#c7c7cc] disabled:shadow-none"
                    aria-label="Send message"
                  >
                    <Send className="h-6 w-6" />
                  </button>
                </form>
              </div>
            </div>

            <aside className="hidden min-h-0 flex-col gap-6 lg:flex">
              <InfoPanel
                icon={<RouteIcon className="h-6 w-6" />}
                title="Smart Routing"
                text="Multi-mode optimization ranking by cost and SLA."
              />

              <InfoPanel
                icon={<CalendarClock className="h-6 w-6" />}
                title="Slot Manager"
                text="Pre-check warehouse dock availability instantly."
              />

              <InfoPanel
                icon={<Package className="h-6 w-6" />}
                title="Dispatch AI"
                text="Automatic load parsing for seamless orchestration."
              />
            </aside>
          </section>
        </div>
      </main>
    </AppShell>
  );
}

function MessageBubble({ message }: { message: Msg }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
          <Sparkles className="h-4 w-4" />
        </div>
      )}

      <div
        className={`max-w-[82%] rounded-[26px] px-5 py-3 text-[15px] leading-7 shadow-sm ${isUser
            ? "rounded-br-lg bg-[#007aff] text-white"
            : "rounded-bl-lg border border-black/5 bg-[#f5f5f7] text-[#1d1d1f]"
          }`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>

        {message.parsed && <ShipmentSummary parsed={message.parsed} />}
      </div>
    </div>
  );
}

function ShipmentSummary({ parsed }: { parsed: ReturnType<typeof parseShipment> }) {
  return (
    <div className="mt-4 grid gap-2 rounded-[22px] border border-black/5 bg-white p-3">
      <SummaryRow icon={<Package />} label="Cargo" value={parsed.cargo} />
      <SummaryRow icon={<Weight />} label="Weight" value={parsed.weight} />
      <SummaryRow icon={<MapPin />} label="Pickup" value={parsed.pickup} />
      <SummaryRow icon={<RouteIcon />} label="Destination" value={parsed.destination} />
      <SummaryRow icon={<CalendarClock />} label="Urgency" value={parsed.urgency} />
    </div>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#f5f5f7] px-3 py-2">
      <div className="text-[#007aff] [&_svg]:h-4 [&_svg]:w-4">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#86868b]">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-[#1d1d1f]">{value}</p>
      </div>
    </div>
  );
}

function ThinkingBubble() {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
        <Sparkles className="h-4 w-4 animate-pulse" />
      </div>

      <div className="flex items-center gap-1.5 rounded-[26px] rounded-bl-lg border border-black/5 bg-[#f5f5f7] px-5 py-4">
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#007aff]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#007aff] [animation-delay:0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#007aff] [animation-delay:0.3s]" />
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f5f5f7] px-3 py-3">
      <p className="text-xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-[#86868b]">{label}</p>
    </div>
  );
}

function InfoPanel({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5f5f7] text-[#007aff]">
        {icon}
      </div>
      <h2 className="mt-4 text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{text}</p>
    </div>
  );
}

function parseShipment(text: string) {
  const lower = text.toLowerCase();

  const weight = lower.match(/(\d+)\s*(t|ton|tons)/)?.[0] ?? "20T";

  const cargo = /steel/.test(lower)
    ? "Steel Coil"
    : /cement/.test(lower)
      ? "Cement Bags"
      : /textile/.test(lower)
        ? "Textile Rolls"
        : /auto/.test(lower)
          ? "Auto Parts"
          : "General Freight";

  const pickup =
    /chennai|ennore|port|rail yard|sriperumbudur|tirupur/i.exec(text)?.[0] ??
    "Chennai Rail Yard";

  const destination =
    /hosur|bengaluru|bangalore|coimbatore|krishnagiri/i.exec(text)?.[0] ??
    "Hosur Warehouse";

  const urgency = /today|tonight|urgent|asap|evening|6pm/i.test(text)
    ? "Today, Evening"
    : "Standard";

  return {
    cargo,
    weight: weight.toUpperCase(),
    pickup,
    destination,
    urgency,
  };
}