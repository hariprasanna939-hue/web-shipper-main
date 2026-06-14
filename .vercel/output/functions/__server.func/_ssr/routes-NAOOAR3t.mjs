import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight, P as CalendarClock, _ as Package, b as Mic, d as Send, f as Route, g as Paperclip, l as Sparkles, o as Truck, r as Weight, t as Zap, w as MapPin } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./AppShell-DrpdwfAQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NAOOAR3t.js
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
		text: "Hi, I'm RailSync AI. Tell me what you need moved — origin, destination, weight, and timing — and I'll find the best route and truck for you."
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const [thinking, setThinking] = (0, import_react.useState)(false);
	const scrollRef = (0, import_react.useRef)(null);
	const textareaRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, thinking]);
	(0, import_react.useEffect)(() => {
		const el = textareaRef.current;
		if (!el) return;
		el.style.height = "auto";
		el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
	}, [input]);
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
				text: "I found the key shipment details. I'm now checking capacity, warehouse slots, and route availability in real time.",
				parsed
			}]);
			setThinking(false);
			setTimeout(() => navigate({ to: "/match" }), 1400);
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1400px] flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#424245] shadow-sm backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-[#34c759]" }), "AI Dispatch Engine · Online"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight",
				children: [
					"Book freight by",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
					" conversation."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 sm:gap-3",
				children: [
					{
						label: "Routes",
						value: "42",
						color: "text-[#007aff]"
					},
					{
						label: "Trucks",
						value: "128",
						color: "text-[#34c759]"
					},
					{
						label: "Slots",
						value: "18",
						color: "text-[#ff9500]"
					}
				].map(({ label, value, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 sm:flex-none rounded-2xl border border-white/80 bg-white/70 backdrop-blur-xl shadow-sm px-4 py-3 text-center min-w-[72px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-2xl font-bold ${color}`,
						children: value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-[#86868b] mt-0.5",
						children: label
					})]
				}, label))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col rounded-[36px] border border-white/90 bg-white/85 shadow-[0_40px_120px_rgba(0,0,0,0.14)] backdrop-blur-3xl overflow-hidden",
				style: {
					minHeight: "600px",
					height: "calc(100vh - 260px)",
					maxHeight: "800px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-6 py-5 border-b border-black/[0.06] bg-white/60 backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#3a3a3c] text-white shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-6 w-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#34c759] ring-2 ring-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold tracking-tight text-[#1d1d1f]",
								children: "RailSync Assistant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-[#86868b]",
								children: "Load parsing and booking orchestration"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-full bg-[#f0fdf4] border border-[#34c759]/20 px-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-[#34c759]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-[#1f8f46]",
								children: "Ready"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: scrollRef,
						className: "flex-1 overflow-y-auto px-6 py-6 space-y-5 no-scrollbar",
						children: [messages.map((msg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, { message: msg }, i)), thinking && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThinkingBubble, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 pt-4 pb-2 border-t border-black/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-widest text-[#86868b] mb-2.5",
							children: "Quick suggestions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2 overflow-x-auto pb-1 no-scrollbar",
							children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => send(s),
								disabled: thinking,
								className: "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/10 bg-[#f5f5f7] hover:bg-[#007aff] hover:text-white hover:border-[#007aff] px-3.5 py-2 text-xs font-medium text-[#424245] transition-all duration-200 disabled:opacity-40",
								children: [s, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 shrink-0" })]
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								send(input);
							},
							className: "flex items-end gap-3 rounded-[28px] border-2 border-black/8 bg-[#f7f7f8] px-4 py-3 shadow-inner focus-within:border-[#007aff]/30 focus-within:bg-white transition-all duration-200",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-[#8e8e93] transition hover:bg-white hover:text-[#1d1d1f] hover:shadow-sm",
									"aria-label": "Attach file",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									ref: textareaRef,
									value: input,
									onChange: (e) => setInput(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter" && !e.shiftKey) {
											e.preventDefault();
											send(input);
										}
									},
									rows: 1,
									placeholder: "Describe your shipment — e.g. 20 tons steel coil, Chennai to Hosur, today evening",
									className: "flex-1 resize-none bg-transparent py-2 text-[15px] leading-6 text-[#1d1d1f] outline-none placeholder:text-[#aeaeb2]",
									style: { minHeight: "44px" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-[#8e8e93] transition hover:bg-white hover:text-[#1d1d1f] hover:shadow-sm hidden sm:flex",
									"aria-label": "Voice input",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: !input.trim() || thinking,
									className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#007aff] text-white shadow-lg shadow-blue-500/30 transition hover:bg-[#006ee6] hover:scale-105 disabled:cursor-not-allowed disabled:bg-[#d1d1d6] disabled:shadow-none",
									"aria-label": "Send message",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-[11px] text-[#aeaeb2] mt-2",
							children: [
								"Press ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
									className: "rounded bg-black/5 px-1.5 py-0.5 font-mono text-[10px]",
									children: "Enter"
								}),
								" to send · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
									className: "rounded bg-black/5 px-1.5 py-0.5 font-mono text-[10px]",
									children: "Shift+Enter"
								}),
								" for new line"
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden lg:flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPanel, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { className: "h-5 w-5" }),
						title: "Smart Routing",
						text: "Multi-mode optimization ranking by cost, SLA, and real-time traffic."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPanel, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-5 w-5" }),
						title: "Slot Manager",
						text: "Pre-check warehouse dock availability instantly before booking."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPanel, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-5 w-5" }),
						title: "Dispatch AI",
						text: "Automatic load parsing for seamless dispatch orchestration."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPanel, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5" }),
						title: "Live Fleet",
						text: "128 verified trucks available within 50 km. Updated every minute."
					})
				]
			})]
		})]
	}) });
}
function MessageBubble({ message }) {
	const isUser = message.role === "user";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-end gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`,
		children: [
			!isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#3a3a3c] text-white shadow-sm mb-0.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
			}),
			isUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007aff] to-[#0051d5] text-white shadow-sm mb-0.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold",
					children: "You"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `max-w-[78%] flex flex-col ${isUser ? "items-end" : "items-start"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-[24px] px-5 py-3.5 text-[15px] leading-7 shadow-sm ${isUser ? "rounded-br-md bg-[#007aff] text-white" : "rounded-bl-md border border-black/[0.06] bg-white text-[#1d1d1f]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-wrap",
						children: message.text
					}), message.parsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShipmentSummary, { parsed: message.parsed })]
				})
			})
		]
	});
}
function ShipmentSummary({ parsed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 grid gap-2 rounded-[20px] border border-black/8 bg-[#f5f5f7] p-3",
		children: [
			{
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4" }),
				label: "Cargo",
				value: parsed.cargo
			},
			{
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weight, { className: "h-4 w-4" }),
				label: "Weight",
				value: parsed.weight
			},
			{
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
				label: "Pickup",
				value: parsed.pickup
			},
			{
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { className: "h-4 w-4" }),
				label: "Destination",
				value: parsed.destination
			},
			{
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-4 w-4" }),
				label: "Urgency",
				value: parsed.urgency
			}
		].map(({ icon, label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[#007aff] shrink-0",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-semibold uppercase tracking-wider text-[#86868b]",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-semibold text-[#1d1d1f]",
					children: value
				})]
			})]
		}, label))
	});
}
function ThinkingBubble() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#3a3a3c] text-white shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 animate-pulse" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-[24px] rounded-bl-md border border-black/[0.06] bg-white px-5 py-4 shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1.5",
				children: [
					0,
					150,
					300
				].map((delay) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2.5 w-2.5 rounded-full bg-[#007aff]",
					style: { animation: `bounce 1.2s infinite ${delay}ms` }
				}, delay))
			})
		})]
	});
}
function InfoPanel({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[24px] border border-white/80 bg-white/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.07)] backdrop-blur-2xl hover:bg-white/90 transition-all duration-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007aff]/10 to-[#007aff]/5 text-[#007aff]",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-base font-semibold tracking-tight text-[#1d1d1f]",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-sm leading-6 text-[#6e6e73]",
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
