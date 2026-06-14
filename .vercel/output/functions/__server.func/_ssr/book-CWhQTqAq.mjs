import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleCheck, L as ArrowLeft, M as ChevronRight, S as MessageSquareText, T as IndianRupee, a as User, c as Star, h as Phone, i as Warehouse, k as Clock, l as Sparkles, o as Truck, u as Shield, w as MapPin } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DrpdwfAQ.mjs";
import { n as MOCK_TRUCKS, r as MOCK_WAREHOUSES } from "./railsync-data-Tml22SHZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-CWhQTqAq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookingCardPage() {
	const navigate = useNavigate();
	const truck = MOCK_TRUCKS[0];
	const wh = MOCK_WAREHOUSES[0];
	const bookingId = (0, import_react.useMemo)(() => `RS-DRAFT-${Date.now().toString().slice(-5)}`, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => navigate({ to: "/match" }),
				className: "mb-5 sm:mb-8 inline-flex h-10 items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 text-sm font-semibold text-[#424245] shadow-sm backdrop-blur-xl transition hover:bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to matches"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:gap-6 lg:grid-cols-[1fr_380px] lg:items-start mb-5 sm:mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-bold text-[#424245] shadow-sm backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#34c759]" }), "VERIFIED BEST MATCH"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-7xl",
						children: "Review your booking."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-7 text-[#6e6e73] sm:text-base sm:leading-8",
						children: "Confirm the assigned vehicle, driver, destination warehouse, schedule, and final all-inclusive price."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-[32px] border border-white/90 bg-white/80 p-5 sm:p-8 shadow-[0_32px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-[#86868b]",
							children: "TOTAL ALL-INCLUSIVE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 sm:mt-3 flex items-center text-4xl sm:text-6xl font-bold tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-7 w-7 sm:h-10 sm:w-10 text-[#007aff]" }), truck.price.toLocaleString()]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#6e6e73]",
							children: "Includes handling, tolls, and GST"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 sm:mt-6 rounded-2xl bg-[#f5f5f7] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]",
								children: "BOOKING REFERENCE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg sm:text-xl font-bold",
								children: bookingId
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-[36px] sm:rounded-[48px] border border-white/90 bg-white/80 shadow-[0_40px_120px_rgba(0,0,0,0.14)] backdrop-blur-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-black/5 px-4 py-5 sm:px-10 sm:py-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white shadow-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg sm:text-2xl font-bold tracking-tight",
									children: "Shipment Booking Card"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-[#86868b]",
									children: "Capacity, route, and dock slot are locked."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#e9f8ee] px-3 py-2 text-xs font-bold text-[#1f8f46] sm:px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), "READY TO CONFIRM"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingMessageBox, {
							truckNumber: truck.number,
							warehouseName: wh.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 sm:mt-8 grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									icon: Truck,
									title: "Truck",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Number",
											children: truck.number
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Capacity",
											children: truck.capacity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Rating",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[#ffcc00] text-[#ffcc00]" }), truck.rating]
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									icon: User,
									title: "Driver",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Name",
											children: truck.driver
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Contact",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-[#86868b]" }), truck.driverPhone]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "ETA",
											children: truck.eta
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									icon: Warehouse,
									title: "Warehouse",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Facility",
											children: wh.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Dock",
											children: wh.dock
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Location",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-[#86868b]" }), wh.location]
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									icon: Clock,
									title: "Schedule",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Pickup",
											children: "Today, 16:00"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Distance",
											children: wh.distance
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Delivery",
											children: "Today, 22:30"
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-black/5 bg-white/60 p-4 sm:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => navigate({ to: "/confirm" }),
								className: "inline-flex h-12 sm:h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 sm:px-8 text-base sm:text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-[#006ee6] hover:scale-[1.02]",
								children: ["Confirm Booking", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => navigate({ to: "/match" }),
								className: "inline-flex h-12 sm:h-14 flex-1 items-center justify-center rounded-full border border-black/10 bg-white px-6 sm:px-8 text-base sm:text-lg font-bold text-[#1d1d1f] shadow-sm transition hover:bg-[#f5f5f7]",
								children: "See Alternatives"
							})]
						})
					})
				]
			})
		]
	}) });
}
function BookingMessageBox({ truckNumber, warehouseName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-[28px] sm:rounded-[40px] border border-black/5 bg-white p-4 shadow-sm sm:p-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-[20px] sm:rounded-[24px] bg-[#007aff] text-white shadow-lg shadow-blue-500/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareText, { className: "h-6 w-6 sm:h-8 sm:w-8" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-bold text-[#1d1d1f]",
						children: "RailSync AI Analysis"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-7 text-[#6e6e73] sm:text-base sm:leading-8",
						children: "This is your strongest available match. We have verified vehicle capacity, driver credentials, and lock-in dock availability at your destination warehouse."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-bold text-[#424245]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#007aff]" }), "SMART DISPATCH"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 sm:mt-8 flex flex-wrap gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageChip, {
							label: "Truck ID",
							value: truckNumber
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageChip, {
							label: "Destination",
							value: warehouseName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageChip, {
							label: "Pickup Time",
							value: "Today 16:00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageChip, {
							label: "Priority",
							value: "Standard"
						})
					]
				})]
			})]
		})
	});
}
function MessageChip({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-full border border-black/10 bg-[#f5f5f7] px-3 py-1.5 text-xs font-medium",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-[#86868b]",
			children: [label, ": "]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-bold text-[#1d1d1f]",
			children: value
		})]
	});
}
function Section({ icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-[22px] sm:rounded-[28px] border border-black/5 bg-[#f5f5f7] p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-2 sm:gap-3 border-b border-black/5 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-[#007aff] shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#86868b]",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2 sm:space-y-3",
			children
		})]
	});
}
function Row({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2 text-xs sm:text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[#6e6e73] shrink-0",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 text-right font-semibold text-[#1d1d1f] truncate",
			children
		})]
	});
}
//#endregion
export { BookingCardPage as component };
