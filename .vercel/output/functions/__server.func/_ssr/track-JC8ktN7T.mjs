import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MapPin, O as Clock, a as Truck, k as CircleCheck, m as Phone, v as Navigation } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DrpdwfAQ.mjs";
import { i as TIMELINE_STEPS } from "./railsync-data-Tml22SHZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-JC8ktN7T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackPage() {
	const [progress, setProgress] = (0, import_react.useState)(.35);
	const [step, setStep] = (0, import_react.useState)(5);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => {
			setProgress((p) => Math.min(p + .005, .95));
		}, 800);
		return () => clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (progress > .5) setStep(6);
		if (progress > .85) setStep(7);
	}, [progress]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-7xl mx-auto flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_360px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card overflow-hidden relative h-[50vw] min-h-[280px] max-h-[500px] lg:h-[70vh] lg:max-h-none lg:min-h-[500px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StylizedMap, { progress }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-3 left-3 sm:top-4 sm:left-4 glass-panel rounded-2xl px-3 py-2 flex items-center gap-2 text-xs sm:text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-success animate-pulse" }), "Live · Updated just now"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass-panel rounded-2xl sm:rounded-3xl p-3 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-3 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground",
									children: "ETA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl sm:text-2xl font-semibold",
									children: "2h 14m"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center hidden sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground",
										children: "Distance left"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xl sm:text-2xl font-semibold",
										children: "142 km"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white text-xs sm:text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }), " Call"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 bg-white/60 rounded-full overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-gradient-to-r from-secondary to-success transition-all duration-700",
								style: { width: `${progress * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-[10px] sm:text-xs text-muted-foreground mt-1.5 sm:mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chennai Rail Yard" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "142 km left"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hosur Warehouse" })
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-4 sm:p-5 flex-1 lg:flex-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground mb-1.5",
							children: "Active Shipment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg sm:text-xl font-semibold mb-3",
							children: "RS-48201"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: Truck,
									children: "TN-09-AC-4521 · 25T"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: Navigation,
									children: "Ramesh Kumar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: MapPin,
									children: "Near Vellore, NH-44"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									icon: Clock,
									children: "Departed 14:20"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card p-4 sm:p-5 flex-1 lg:flex-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground mb-3",
						children: "Timeline"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: TIMELINE_STEPS.map((label, i) => {
							const done = i <= step;
							const active = i === step + 1;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 sm:gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${done ? "bg-gradient-to-br from-success to-secondary text-white" : active ? "glass-soft ring-2 ring-secondary/40" : "glass-soft"}`,
									children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-1.5 h-1.5 rounded-full ${active ? "bg-secondary animate-pulse" : "bg-muted-foreground/40"}` })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-xs sm:text-sm ${done ? "font-medium text-foreground" : "text-muted-foreground"}`,
									children: label
								})]
							}, label);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/complete",
					className: "block glass-soft rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-center text-sm font-medium hover:bg-white/70 transition",
					children: "Preview delivery completion →"
				})
			]
		})]
	}) });
}
function Row({ icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 glass-soft rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3.5 h-3.5 text-secondary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs sm:text-sm truncate",
			children
		})]
	});
}
function StylizedMap({ progress }) {
	const x = 60 + progress * 680;
	const y = 380 - Math.sin(progress * Math.PI) * 180;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 800 600",
		className: "w-full h-full",
		preserveAspectRatio: "xMidYMid slice",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "bg",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#dde7f5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#e8eef6"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "route",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#2563EB"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#10B981"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "pulse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#2563EB",
						stopOpacity: "0.6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#2563EB",
						stopOpacity: "0"
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "800",
				height: "600",
				fill: "url(#bg)"
			}),
			Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: i * 55,
				x2: "800",
				y2: i * 55,
				stroke: "#fff",
				strokeOpacity: "0.5",
				strokeWidth: "1"
			}, `h${i}`)),
			Array.from({ length: 16 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: i * 55,
				y1: "0",
				x2: i * 55,
				y2: "600",
				stroke: "#fff",
				strokeOpacity: "0.5",
				strokeWidth: "1"
			}, `v${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "120",
				cy: "120",
				rx: "100",
				ry: "60",
				fill: "#bcd5ee",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "700",
				cy: "500",
				rx: "140",
				ry: "80",
				fill: "#bcd5ee",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 60 380 Q 400 100 740 380",
				stroke: "#cbd6e8",
				strokeWidth: "14",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M 60 380 Q 400 100 740 380",
				stroke: "url(#route)",
				strokeWidth: "6",
				fill: "none",
				strokeLinecap: "round",
				strokeDasharray: "1000",
				strokeDashoffset: 1e3 - progress * 1e3
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "380",
				r: "14",
				fill: "#2563EB"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "60",
				cy: "380",
				r: "6",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "740",
				cy: "380",
				r: "14",
				fill: "#10B981"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "740",
				cy: "380",
				r: "6",
				fill: "#fff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "32",
				fill: "url(#pulse)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
					attributeName: "r",
					values: "28;40;28",
					dur: "2s",
					repeatCount: "indefinite"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "14",
				fill: "#fff",
				stroke: "#2563EB",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x,
				y: y + 5,
				textAnchor: "middle",
				fontSize: "14",
				fontWeight: "700",
				fill: "#2563EB",
				children: "🚚"
			})
		]
	});
}
//#endregion
export { TrackPage as component };
