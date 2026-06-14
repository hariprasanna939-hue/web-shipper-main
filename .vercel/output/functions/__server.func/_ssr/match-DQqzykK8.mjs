import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MapPin, O as Clock, a as Truck, c as Sparkles, k as CircleCheck, r as Warehouse, s as Star, w as IndianRupee } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DrpdwfAQ.mjs";
import { n as MOCK_TRUCKS, r as MOCK_WAREHOUSES } from "./railsync-data-Tml22SHZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/match-DQqzykK8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MatchPage() {
	const navigate = useNavigate();
	const [stage, setStage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const ids = [
			setTimeout(() => setStage(1), 700),
			setTimeout(() => setStage(2), 1500),
			setTimeout(() => setStage(3), 2300)
		];
		return () => ids.forEach(clearTimeout);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-6xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 glass-soft px-3 py-1.5 rounded-full text-xs font-medium text-secondary mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 animate-pulse" }), " AI Matching Engine"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-2",
				children: "Finding the best match"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mb-6 sm:mb-8",
				children: "Analyzing fleet, warehouses and routes in real time."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass-card p-4 sm:p-6 mb-6 sm:mb-8 space-y-3",
				children: [
					{
						label: "Scanning 1,240 active trucks within 50km",
						done: stage >= 1
					},
					{
						label: "Filtering by capacity, dock & ETA",
						done: stage >= 2
					},
					{
						label: "Ranking by distance, cost & rating",
						done: stage >= 3
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `w-6 h-6 rounded-full flex items-center justify-center transition-all shrink-0 ${s.done ? "bg-success text-white" : "glass-soft"}`,
						children: s.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-secondary animate-pulse" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-sm ${s.done ? "text-foreground" : "text-muted-foreground"}`,
						children: s.label
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 gap-4 sm:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1",
					children: "Top Trucks"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: MOCK_TRUCKS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `glass-card p-4 sm:p-5 transition-all duration-500 ${stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
						style: { transitionDelay: `${i * 80}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-secondary/15 to-primary/15 flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-4 h-4 sm:w-5 sm:h-5 text-secondary" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-sm sm:text-base",
										children: t.number
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: t.capacity
									})] })]
								}), i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-success text-white",
									children: "Best"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-1.5 sm:gap-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
										icon: MapPin,
										children: t.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
										icon: Clock,
										children: t.eta
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
										icon: Star,
										children: t.rating
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mt-3 pt-3 border-t border-white/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground truncate mr-2",
									children: t.driver
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-display font-semibold flex items-center shrink-0 text-sm sm:text-base",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "w-3.5 h-3.5" }), t.price.toLocaleString()]
								})]
							})
						]
					}, t.id))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1",
					children: "Warehouses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: MOCK_WAREHOUSES.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `glass-card p-4 sm:p-5 transition-all duration-500 ${stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
						style: { transitionDelay: `${i * 80}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-success/15 to-secondary/15 flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Warehouse, { className: "w-4 h-4 sm:w-5 sm:h-5 text-success" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-sm sm:text-base",
								children: w.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [
									w.location,
									" · ",
									w.distance
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-1.5 sm:gap-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, { children: [w.dock, " available"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, { children: [w.capacityFree, " free"] })]
						})]
					}, w.id))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end mt-6 sm:mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({ to: "/book" }),
					disabled: stage < 3,
					className: "w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white font-medium shadow-[var(--shadow-float)] hover:scale-[1.02] transition disabled:opacity-50 text-sm sm:text-base",
					children: "View best match →"
				})
			})
		]
	}) });
}
function Pill({ icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-soft px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl flex items-center gap-1 sm:gap-1.5 text-foreground/80 min-w-0",
		children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate text-xs",
			children
		})]
	});
}
//#endregion
export { MatchPage as component };
