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

export const Route = createFileRoute("/")(({
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
}));

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
      <div className="mx-auto flex flex-col gap-4 max-w-[1400px] min-h-[calc(100vh-5rem)]">
        {/* Header */}
        <header className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <section>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-[#424245] shadow-sm backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-[#34c759]" />
              AI Dispatch Engine Online
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-7xl">
              Book freight by<br className="hidden sm:block" /> conversation.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e6e73] sm:text-base sm:leading-8">
              Describe your shipment naturally. RailSync extracts the load,
              route, timing, and matching requirements for dispatch.
            </p>
          </section>

          {/* Live Capacity card */}
          <section className="rounded-[28px] border border-white/80 bg-white/70 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:w-64 lg:w-80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                  Live Capacity
                </p>
                <p className="mt-1 text-2xl font-bold">Fast match</p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#007aff] text-white shadow-lg shadow-blue-500/20">
                <Truck className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <Metric label="Routes" value="42" />
              <Metric label="Trucks" value="128" />
              <Metric label="Slots" value="18" />
            </div>
          </section>
        </header>

        {/* Chat + Sidebar */}
        <section className="grid flex-1 gap-4 lg:grid-cols-[1fr_260px]">
          {/* Chat window */}
          <div className="flex min-h-0 flex-col overflow-hidden rounded-[32px] border border-white/90 bg-white/80 shadow-[0_32px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl" style={{ minHeight: "440px" }}>
            {/* Chat header */}
            <div className="flex items-center justify-between border-b border-black/5 px-4 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div>
                  <h2 className="text-base font-bold sm:text-lg">RailSync Assistant</h2>
                  <p className="text-xs text-[#86868b] hidden sm:block">
                    Load parsing and booking orchestration
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-2 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-semibold text-[#424245] sm:flex">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#34c759]" />
                Ready
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6"
            >
              {messages.map((message, index) => (
                <MessageBubble key={index} message={message} />
              ))}

              {thinking && <ThinkingBubble />}
            </div>

            {/* Input area */}
            <div className="border-t border-black/5 bg-white/60 p-3 sm:p-5">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => send(suggestion)}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-[#424245] shadow-sm transition hover:border-[#007aff]/30 hover:bg-[#007aff] hover:text-white"
                  >
                    {suggestion}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                ))}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  send(input);
                }}
                className="mx-auto flex items-end gap-2 rounded-[28px] border border-black/10 bg-[#f5f5f7] p-2 shadow-inner"
              >
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#6e6e73] transition hover:bg-white hover:text-[#1d1d1f]"
                  aria-label="Attach file"
                >
                  <Paperclip className="h-5 w-5" />
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
                  placeholder="Describe your shipment…"
                  className="max-h-36 flex-1 resize-none bg-transparent px-1 py-2.5 text-sm leading-6 text-[#1d1d1f] outline-none placeholder:text-[#86868b] sm:text-base"
                />

                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#6e6e73] transition hover:bg-white hover:text-[#1d1d1f] hidden sm:flex"
                  aria-label="Voice input"
                >
                  <Mic className="h-5 w-5" />
                </button>

                <button
                  type="submit"
                  disabled={!input.trim() || thinking}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#007aff] text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6] disabled:cursor-not-allowed disabled:bg-[#c7c7cc] disabled:shadow-none"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Info panels — hidden on mobile, shown on lg */}
          <aside className="hidden min-h-0 flex-col gap-4 lg:flex">
            <InfoPanel
              icon={<RouteIcon className="h-5 w-5" />}
              title="Smart Routing"
              text="Multi-mode optimization ranking by cost and SLA."
            />

            <InfoPanel
              icon={<CalendarClock className="h-5 w-5" />}
              title="Slot Manager"
              text="Pre-check warehouse dock availability instantly."
            />

            <InfoPanel
              icon={<Package className="h-5 w-5" />}
              title="Dispatch AI"
              text="Automatic load parsing for seamless orchestration."
            />
          </aside>
        </section>
      </div>
    </AppShell>
  );
}

function MessageBubble({ message }: { message: Msg }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-2 sm:gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
          <Sparkles className="h-3.5 w-3.5" />
        </div>
      )}

      <div
        className={`max-w-[85%] rounded-[22px] px-4 py-2.5 text-sm leading-6 shadow-sm sm:max-w-[82%] sm:rounded-[26px] sm:px-5 sm:py-3 sm:text-[15px] sm:leading-7 ${
          isUser
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
    <div className="mt-3 grid gap-1.5 rounded-[18px] border border-black/5 bg-white p-2.5 sm:mt-4 sm:gap-2 sm:rounded-[22px] sm:p-3">
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
    <div className="flex items-center gap-2 rounded-xl bg-[#f5f5f7] px-2.5 py-1.5 sm:rounded-2xl sm:gap-3 sm:px-3 sm:py-2">
      <div className="text-[#007aff] [&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-4 sm:[&_svg]:w-4">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#86868b]">
          {label}
        </p>
        <p className="truncate text-xs font-medium text-[#1d1d1f] sm:text-sm">{value}</p>
      </div>
    </div>
  );
}

function ThinkingBubble() {
  return (
    <div className="flex gap-2 sm:gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white">
        <Sparkles className="h-3.5 w-3.5 animate-pulse" />
      </div>

      <div className="flex items-center gap-1.5 rounded-[22px] rounded-bl-lg border border-black/5 bg-[#f5f5f7] px-4 py-3 sm:rounded-[26px] sm:px-5 sm:py-4">
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#007aff]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#007aff] [animation-delay:0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#007aff] [animation-delay:0.3s]" />
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f5f5f7] px-2 py-2.5 text-center">
      <p className="text-lg font-semibold sm:text-xl">{value}</p>
      <p className="mt-0.5 text-[11px] text-[#86868b]">{label}</p>
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
    <div className="rounded-[24px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f5f5f7] text-[#007aff]">
        {icon}
      </div>
      <h2 className="mt-3 text-base font-semibold tracking-tight">{title}</h2>
      <p className="mt-1.5 text-xs leading-5 text-[#6e6e73] sm:text-sm sm:leading-6">{text}</p>
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