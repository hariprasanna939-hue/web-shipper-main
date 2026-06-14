import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MapPin, F as ArrowRight, N as CalendarClock, a as Truck, c as Sparkles, d as Route, g as Package, h as Paperclip, k as CircleCheck, n as Weight, u as Send, y as Mic } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DrpdwfAQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ck2-gOKv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUGGESTIONS = [
	"20T steel coil, Chennai to Hosur, today evening",
	"Book a 30T flatbed from Ennore Port to Bengaluru",
	"Reserve dock at Hosur warehouse for 6PM",
	"Find cheapest truck under 25T"
];
function AIBookingPage() {
	const navigate = useNavigate();
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "ai",
		text: "Hi, I am RailSync AI. Tell me what you need moved, where it starts, where it ends, and when it should arrive."
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const [thinking, setThinking] = (0, import_react.useState)(false);
	const scrollRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, thinking]);
	const send = (text) => {
		const cleanText = text.trim();
		if (!cleanText || thinking) return;
		setMessages((current) => [...current, {
			role: "user",
			text: cleanText
		}]);
		setInput("");
		setThinking(true);
		setTimeout(() => {
			const parsed = parseShipment(cleanText);
			setMessages((current) => [...current, {
				role: "ai",
				text: "I found the key shipment details. I am checking capacity, warehouse slots, and route availability now.",
				parsed
			}]);
			setThinking(false);
			setTimeout(() => {
				navigate({ to: "/match" });
			}, 1400);
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex flex-col gap-4 max-w-[1400px] min-h-[calc(100vh-5rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-[#424245] shadow-sm backdrop-blur-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-[#34c759]" }), "AI Dispatch Engine Online"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl lg:text-7xl",
					children: [
						"Book freight by",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" conversation."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-7 text-[#6e6e73] sm:text-base sm:leading-8",
					children: "Describe your shipment naturally. RailSync extracts the load, route, timing, and matching requirements for dispatch."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-[28px] border border-white/80 bg-white/70 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:w-64 lg:w-80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]",
						children: "Live Capacity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-2xl font-bold",
						children: "Fast match"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#007aff] text-white shadow-lg shadow-blue-500/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Routes",
							value: "42"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Trucks",
							value: "128"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Slots",
							value: "18"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid flex-1 gap-4 lg:grid-cols-[1fr_260px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-col overflow-hidden rounded-[32px] border border-white/90 bg-white/80 shadow-[0_32px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl",
				style: { minHeight: "440px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-black/5 px-4 py-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-bold sm:text-lg",
								children: "RailSync Assistant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#86868b] hidden sm:block",
								children: "Load parsing and booking orchestration"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-2 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-xs font-semibold text-[#424245] sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-[#34c759]" }), "Ready"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: scrollRef,
						className: "flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6",
						children: [messages.map((message, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, { message }, index)), thinking && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThinkingBubble, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-black/5 bg-white/60 p-3 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar",
							children: SUGGESTIONS.map((suggestion) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => send(suggestion),
								className: "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-[#424245] shadow-sm transition hover:border-[#007aff]/30 hover:bg-[#007aff] hover:text-white",
								children: [suggestion, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
							}, suggestion))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (event) => {
								event.preventDefault();
								send(input);
							},
							className: "mx-auto flex items-end gap-2 rounded-[28px] border border-black/10 bg-[#f5f5f7] p-2 shadow-inner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#6e6e73] transition hover:bg-white hover:text-[#1d1d1f]",
									"aria-label": "Attach file",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: input,
									onChange: (event) => setInput(event.target.value),
									onKeyDown: (event) => {
										if (event.key === "Enter" && !event.shiftKey) {
											event.preventDefault();
											send(input);
										}
									},
									rows: 1,
									placeholder: "Describe your shipment…",
									className: "max-h-36 flex-1 resize-none bg-transparent px-1 py-2.5 text-sm leading-6 text-[#1d1d1f] outline-none placeholder:text-[#86868b] sm:text-base"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#6e6e73] transition hover:bg-white hover:text-[#1d1d1f] hidden sm:flex",
									"aria-label": "Voice input",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: !input.trim() || thinking,
									className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#007aff] text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6] disabled:cursor-not-allowed disabled:bg-[#c7c7cc] disabled:shadow-none",
									"aria-label": "Send message",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" })
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden min-h-0 flex-col gap-4 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPanel, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { className: "h-5 w-5" }),
						title: "Smart Routing",
						text: "Multi-mode optimization ranking by cost and SLA."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPanel, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-5 w-5" }),
						title: "Slot Manager",
						text: "Pre-check warehouse dock availability instantly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPanel, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5" }),
						title: "Dispatch AI",
						text: "Automatic load parsing for seamless orchestration."
					})
				]
			})]
		})]
	}) });
}
function MessageBubble({ message }) {
	const isUser = message.role === "user";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex gap-2 sm:gap-3 ${isUser ? "justify-end" : "justify-start"}`,
		children: [!isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `max-w-[85%] rounded-[22px] px-4 py-2.5 text-sm leading-6 shadow-sm sm:max-w-[82%] sm:rounded-[26px] sm:px-5 sm:py-3 sm:text-[15px] sm:leading-7 ${isUser ? "rounded-br-lg bg-[#007aff] text-white" : "rounded-bl-lg border border-black/5 bg-[#f5f5f7] text-[#1d1d1f]"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "whitespace-pre-wrap",
				children: message.text
			}), message.parsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShipmentSummary, { parsed: message.parsed })]
		})]
	});
}
function ShipmentSummary({ parsed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 grid gap-1.5 rounded-[18px] border border-black/5 bg-white p-2.5 sm:mt-4 sm:gap-2 sm:rounded-[22px] sm:p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {}),
				label: "Cargo",
				value: parsed.cargo
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weight, {}),
				label: "Weight",
				value: parsed.weight
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
				label: "Pickup",
				value: parsed.pickup
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {}),
				label: "Destination",
				value: parsed.destination
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {}),
				label: "Urgency",
				value: parsed.urgency
			})
		]
	});
}
function SummaryRow({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 rounded-xl bg-[#f5f5f7] px-2.5 py-1.5 sm:rounded-2xl sm:gap-3 sm:px-3 sm:py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[#007aff] [&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-4 sm:[&_svg]:w-4",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-medium uppercase tracking-[0.14em] text-[#86868b]",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-xs font-medium text-[#1d1d1f] sm:text-sm",
				children: value
			})]
		})]
	});
}
function ThinkingBubble() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2 sm:gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 animate-pulse" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 rounded-[22px] rounded-bl-lg border border-black/5 bg-[#f5f5f7] px-4 py-3 sm:rounded-[26px] sm:px-5 sm:py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-bounce rounded-full bg-[#007aff]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-bounce rounded-full bg-[#007aff] [animation-delay:0.15s]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-bounce rounded-full bg-[#007aff] [animation-delay:0.3s]" })
			]
		})]
	});
}
function Metric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-[#f5f5f7] px-2 py-2.5 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-semibold sm:text-xl",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-[11px] text-[#86868b]",
			children: label
		})]
	});
}
function InfoPanel({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[24px] border border-white/80 bg-white/70 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f5f5f7] text-[#007aff]",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-base font-semibold tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs leading-5 text-[#6e6e73] sm:text-sm sm:leading-6",
				children: text
			})
		]
	});
}
function parseShipment(text) {
	const lower = text.toLowerCase();
	const weight = lower.match(/(\d+)\s*(t|ton|tons)/)?.[0] ?? "20T";
	const cargo = /steel/.test(lower) ? "Steel Coil" : /cement/.test(lower) ? "Cement Bags" : /textile/.test(lower) ? "Textile Rolls" : /auto/.test(lower) ? "Auto Parts" : "General Freight";
	const pickup = /chennai|ennore|port|rail yard|sriperumbudur|tirupur/i.exec(text)?.[0] ?? "Chennai Rail Yard";
	const destination = /hosur|bengaluru|bangalore|coimbatore|krishnagiri/i.exec(text)?.[0] ?? "Hosur Warehouse";
	const urgency = /today|tonight|urgent|asap|evening|6pm/i.test(text) ? "Today, Evening" : "Standard";
	return {
		cargo,
		weight: weight.toUpperCase(),
		pickup,
		destination,
		urgency
	};
}
//#endregion
export { AIBookingPage as component };
