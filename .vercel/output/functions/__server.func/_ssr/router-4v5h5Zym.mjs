import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as House, L as ArrowLeft, j as CircleAlert, l as Sparkles, p as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-4v5h5Zym.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-vFXs9KLr.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[#f5f5f7] px-4 py-8 text-[#1d1d1f]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "w-full max-w-2xl rounded-[32px] border border-white/80 bg-white/75 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#1d1d1f] text-white shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[#86868b]",
						children: "404"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl",
						children: "Page not found."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-md text-base leading-7 text-[#6e6e73]",
						children: "The page you are looking for does not exist, may have moved, or is no longer available."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#007aff] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }), "Go home"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => window.history.back(),
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:bg-[#f5f5f7]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Go back"]
						})]
					})
				]
			})
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-[#f5f5f7] px-4 py-8 text-[#1d1d1f]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "w-full max-w-2xl rounded-[32px] border border-white/80 bg-white/75 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-2xl sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#ff3b30] text-white shadow-lg shadow-red-500/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[#86868b]",
						children: "System notice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl",
						children: "This page did not load."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-md text-base leading-7 text-[#6e6e73]",
						children: "Something went wrong while opening this page. Try refreshing the route, or return home and start again."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								router.invalidate();
								reset();
							},
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#007aff] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#006ee6]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" }), "Try again"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/",
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:bg-[#f5f5f7]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }), "Go home"]
						})]
					}),
					error?.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-[20px] border border-black/5 bg-[#f5f5f7] px-4 py-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]",
							children: "Error details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 break-words text-sm leading-6 text-[#6e6e73]",
							children: error.message
						})]
					})
				]
			})
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "RailSync — AI Freight Booking" },
			{
				name: "description",
				content: "Book, match, and manage freight shipments with an Apple-inspired AI dispatch experience."
			},
			{
				name: "author",
				content: "RailSync"
			},
			{
				property: "og:title",
				content: "RailSync — AI Freight Booking"
			},
			{
				property: "og:description",
				content: "Conversational freight booking for routes, trucks, warehouses, and dispatch teams."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "RailSync — AI Freight Booking"
			},
			{
				name: "twitter:description",
				content: "Book freight with a clean, modern AI dispatch interface."
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-[#f5f5f7] text-[#1d1d1f] antialiased",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$6 = () => import("./track-JC8ktN7T.mjs");
var Route$7 = createFileRoute("/track")({
	head: () => ({ meta: [{ title: "Live Tracking · RailSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./match-DQqzykK8.mjs");
var Route$6 = createFileRoute("/match")({
	head: () => ({ meta: [{ title: "AI Matching · RailSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./history-C5x9XnJ8.mjs");
var Route$5 = createFileRoute("/history")({
	head: () => ({ meta: [{ title: "Order History · RailSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./confirm-D6_6fiY0.mjs");
var Route$4 = createFileRoute("/confirm")({
	head: () => ({ meta: [{ title: "Booking Confirmed · RailSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./complete-BqHq9CyI.mjs");
var Route$3 = createFileRoute("/complete")({
	head: () => ({ meta: [{ title: "Delivered · RailSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./book-CWhQTqAq.mjs");
var Route$2 = createFileRoute("/book")({
	head: () => ({ meta: [{ title: "Booking Review · RailSync" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-NAOOAR3t.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "RailSync — AI Freight Booking" }, {
		name: "description",
		content: "Book multi-modal freight with conversational AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TrackRoute = Route$7.update({
	id: "/track",
	path: "/track",
	getParentRoute: () => Route$8
});
var MatchRoute = Route$6.update({
	id: "/match",
	path: "/match",
	getParentRoute: () => Route$8
});
var HistoryRoute = Route$5.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => Route$8
});
var ConfirmRoute = Route$4.update({
	id: "/confirm",
	path: "/confirm",
	getParentRoute: () => Route$8
});
var CompleteRoute = Route$3.update({
	id: "/complete",
	path: "/complete",
	getParentRoute: () => Route$8
});
var BookRoute = Route$2.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	BookRoute,
	CompleteRoute,
	ConfirmRoute,
	HistoryRoute,
	MatchRoute,
	TrackRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
