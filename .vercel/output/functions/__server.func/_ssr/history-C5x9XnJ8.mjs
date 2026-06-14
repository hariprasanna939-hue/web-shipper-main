import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as Eye, O as Download, T as IndianRupee, _ as Package, p as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DrpdwfAQ.mjs";
import { t as MOCK_SHIPMENTS } from "./railsync-data-Tml22SHZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-C5x9XnJ8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "in_transit",
		label: "In Transit"
	},
	{
		id: "delivered",
		label: "Delivered"
	},
	{
		id: "cancelled",
		label: "Cancelled"
	}
];
function HistoryPage() {
	const [tab, setTab] = (0, import_react.useState)("all");
	const items = tab === "all" ? MOCK_SHIPMENTS : MOCK_SHIPMENTS.filter((s) => s.status === tab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-6xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-1 sm:mb-2",
				children: "Order history"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mb-4 sm:mb-6",
				children: "All your shipments in one place."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 sm:mb-6 overflow-x-auto pb-1 no-scrollbar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-card p-1.5 inline-flex gap-1 min-w-max",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTab(t.id),
						className: `px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${tab === t.id ? "bg-gradient-to-br from-secondary to-primary text-white shadow-[var(--shadow-float)]" : "hover:bg-white/60 text-foreground/80"}`,
						children: t.label
					}, t.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShipmentCard, { s }, s.id)), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-card p-8 sm:p-12 text-center text-muted-foreground text-sm",
					children: "No shipments yet."
				})]
			})
		]
	}) });
}
function ShipmentCard({ s }) {
	const statusColor = {
		in_transit: "bg-secondary/15 text-secondary",
		delivered: "bg-success/15 text-success",
		cancelled: "bg-destructive/15 text-destructive",
		awaiting: "bg-alert/15 text-alert"
	}[s.status];
	const statusLabel = {
		in_transit: "In Transit",
		delivered: "Delivered",
		cancelled: "Cancelled",
		awaiting: "Awaiting"
	}[s.status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass-card p-4 sm:p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3 sm:gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-secondary/15 to-primary/15 flex items-center justify-center shrink-0 mt-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "w-4 h-4 sm:w-5 sm:h-5 text-secondary" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 flex-wrap mb-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-semibold text-sm sm:text-base",
								children: s.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusColor}`,
								children: statusLabel
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-foreground mb-0.5",
							children: [
								s.cargo,
								" · ",
								s.weight
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground truncate",
							children: [
								s.pickup,
								" → ",
								s.destination,
								" · ",
								s.date
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-end gap-2 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display font-semibold flex items-center text-sm sm:text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "w-3.5 h-3.5" }), s.price.toLocaleString()]
						}),
						s.driver && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground hidden sm:block",
							children: s.driver
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									title: "View",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									title: "Rebook",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "w-3.5 h-3.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									title: "Receipt",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3.5 h-3.5" })
								})
							]
						})
					]
				})
			]
		})
	});
}
function IconBtn({ children, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		title,
		className: "w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl glass-soft flex items-center justify-center hover:bg-white/80 transition",
		children
	});
}
//#endregion
export { HistoryPage as component };
