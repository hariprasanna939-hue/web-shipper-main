import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MapPin, O as Clock, S as Menu, b as MessageSquare, c as Sparkles, g as Package, k as CircleCheck, o as TramFront, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-DrpdwfAQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Booking",
		icon: MessageSquare
	},
	{
		to: "/match",
		label: "Match",
		icon: Sparkles
	},
	{
		to: "/book",
		label: "Card",
		icon: Package
	},
	{
		to: "/track",
		label: "Tracking",
		icon: MapPin
	},
	{
		to: "/history",
		label: "History",
		icon: Clock
	},
	{
		to: "/complete",
		label: "Delivery",
		icon: CircleCheck
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 px-3 pt-3 pb-2 sm:px-4 sm:pt-4 flex justify-center animate-fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card liquid-shine px-3 py-2 flex items-center gap-2 w-full max-w-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-2xl hover-scale shrink-0",
							onClick: () => setMenuOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-8 h-8 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-[var(--shadow-float)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TramFront, {
									className: "w-4 h-4 text-white",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base font-semibold tracking-tight hidden sm:inline",
								children: "RailSync"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-7 bg-white/40 mx-1 hidden md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden md:flex items-center gap-1 flex-1 overflow-x-auto",
							children: NAV.map(({ to, label, icon: Icon }) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to,
									className: `group relative flex items-center gap-1.5 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${pathname === to ? "bg-gradient-to-br from-secondary to-primary text-white shadow-[var(--shadow-float)] scale-105" : "text-foreground/75 hover:bg-white/60 hover:scale-105"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "w-4 h-4 transition-transform group-hover:rotate-6",
										strokeWidth: 2.2
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
								}, to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "md:hidden ml-auto flex items-center justify-center w-9 h-9 rounded-2xl glass-soft hover:bg-white/70 transition",
							onClick: () => setMenuOpen((v) => !v),
							"aria-label": "Toggle menu",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
						})
					]
				})
			}),
			menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-3 top-[70px] z-40 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "glass-card liquid-shine p-3 flex flex-col gap-1 shadow-[var(--shadow-glass-lg)]",
					children: NAV.map(({ to, label, icon: Icon }) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to,
							onClick: () => setMenuOpen(false),
							className: `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${pathname === to ? "bg-gradient-to-br from-secondary to-primary text-white shadow-[var(--shadow-float)]" : "text-foreground/80 hover:bg-white/70"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "w-4 h-4",
								strokeWidth: 2.2
							}), label]
						}, to);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 min-w-0 p-3 sm:p-4 lg:p-8 animate-fade-in",
				children
			})
		]
	});
}
//#endregion
export { AppShell as t };
