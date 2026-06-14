import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MapPin, F as ArrowRight, O as Clock, P as Bell, _ as PackageCheck, a as Truck, k as CircleCheck, r as Warehouse } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DrpdwfAQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confirm-D6_6fiY0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConfirmPage() {
	const [shipmentId] = (0, import_react.useState)(() => `RS-${Math.floor(48e3 + Math.random() * 999)}`);
	const [notifs, setNotifs] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
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
			text: "Truck TN-09-AC-4521 reserved"
		},
		{
			icon: Warehouse,
			text: "Dock 7 at Hosur reserved"
		},
		...notifs.map((text) => ({
			icon: Bell,
			text
		}))
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:gap-5 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-[28px] sm:rounded-[34px] border border-white/80 bg-white/75 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-6 text-center sm:px-8 sm:py-10 lg:px-10 lg:py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-[22px] sm:rounded-[28px] bg-[#34c759] text-white shadow-lg shadow-green-500/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "h-8 w-8 sm:h-10 sm:w-10",
								strokeWidth: 2.5
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 sm:mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#86868b]",
							children: "Booking complete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 sm:mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-6xl",
							children: "Shipment confirmed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 sm:mt-4 max-w-xl text-sm leading-6 text-[#6e6e73] sm:text-base sm:leading-7",
							children: "Your vehicle, driver, and destination dock are assigned. The shipment has entered the pickup queue."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-5 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCheck, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
									label: "Shipment ID",
									value: shipmentId
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
									label: "Status",
									value: "Awaiting Pickup"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCard, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
									label: "Destination",
									value: "Hosur"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/track",
							className: "mt-6 sm:mt-9 inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-[#007aff] px-5 sm:px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6]",
							children: ["Track shipment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-black/5 bg-white/50 px-4 py-4 sm:px-8 sm:py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold tracking-tight sm:text-lg",
							children: "Dispatch updates"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#86868b] sm:text-sm",
							children: "Live actions completed for this shipment."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#fff7d6] px-3 py-1.5 text-xs font-semibold text-[#8a6400] shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse rounded-full bg-[#ffcc00]" }), "Queue"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: timeline.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineItem, {
							icon: item.icon,
							text: item.text
						}, `${item.text}-${index}`))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-[24px] sm:rounded-[30px] border border-white/80 bg-white/75 p-4 sm:p-5 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 sm:h-5 sm:w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-xl sm:text-2xl font-semibold tracking-tight",
						children: "Next step"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-[#6e6e73]",
						children: "Keep the tracking page open to monitor pickup, route progress, warehouse arrival, and delivery confirmation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-2xl bg-[#f5f5f7] p-3 sm:p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]",
							children: "Pickup window"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-base sm:text-lg font-semibold",
							children: "Today, 16:00"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-2xl bg-[#f5f5f7] p-3 sm:p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]",
							children: "Estimated delivery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-base sm:text-lg font-semibold",
							children: "Today, 22:30"
						})]
					})
				]
			})]
		})
	}) });
}
function StatusCard({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[18px] sm:rounded-[24px] border border-black/5 bg-[#f5f5f7] p-3 sm:p-4 text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-[#007aff] shadow-sm",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 sm:mt-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 sm:mt-1 truncate text-sm sm:text-base font-semibold text-[#1d1d1f]",
				children: value
			})
		]
	});
}
function TimelineItem({ icon: Icon, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 sm:gap-3 rounded-[18px] sm:rounded-[22px] border border-black/5 bg-[#f5f5f7] p-2.5 sm:p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-[#34c759] shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 text-xs sm:text-sm font-medium text-[#1d1d1f]",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#34c759]" })
		]
	});
}
//#endregion
export { ConfirmPage as component };
