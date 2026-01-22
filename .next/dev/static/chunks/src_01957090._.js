(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiBaseUrl",
    ()=>apiBaseUrl,
    "apiGet",
    ()=>apiGet,
    "apiPatch",
    ()=>apiPatch,
    "apiPost",
    ()=>apiPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiBaseUrl = ("TURBOPACK compile-time value", "http://localhost:8000") ?? "http://localhost:8000";
function handleAuthFailure(status) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (status !== 401 && status !== 403) return;
    sessionStorage.removeItem("lotly_admin_access_token");
    sessionStorage.removeItem("lotly_access_token");
    if (!window.location.pathname.startsWith("/login")) {
        window.location.href = "/login";
    }
}
async function apiGet(path) {
    const response = await fetch(`${apiBaseUrl}${path}`, {
        method: "GET",
        credentials: "include"
    });
    if (!response.ok) {
        handleAuthFailure(response.status);
    }
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
        const message = data && "detail" in data && data.detail || `Request failed (${response.status})`;
        throw new Error(message);
    }
    return data;
}
async function apiPost(path, payload) {
    const response = await fetch(`${apiBaseUrl}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        handleAuthFailure(response.status);
    }
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
        const message = data && "detail" in data && data.detail || `Request failed (${response.status})`;
        throw new Error(message);
    }
    return data;
}
async function apiPatch(path, payload) {
    const response = await fetch(`${apiBaseUrl}${path}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        handleAuthFailure(response.status);
    }
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
        const message = data && "detail" in data && data.detail || `Request failed (${response.status})`;
        throw new Error(message);
    }
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/section.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionButton": "section-module__zQf7-W__actionButton",
  "actionRow": "section-module__zQf7-W__actionRow",
  "adminList": "section-module__zQf7-W__adminList",
  "adminRow": "section-module__zQf7-W__adminRow",
  "header": "section-module__zQf7-W__header",
  "inlineButton": "section-module__zQf7-W__inlineButton",
  "modal": "section-module__zQf7-W__modal",
  "modalActions": "section-module__zQf7-W__modalActions",
  "modalBackdrop": "section-module__zQf7-W__modalBackdrop",
  "modalDivider": "section-module__zQf7-W__modalDivider",
  "modalForm": "section-module__zQf7-W__modalForm",
  "modalGrid": "section-module__zQf7-W__modalGrid",
  "modalHeader": "section-module__zQf7-W__modalHeader",
  "modalInput": "section-module__zQf7-W__modalInput",
  "modalLabel": "section-module__zQf7-W__modalLabel",
  "modalPrimary": "section-module__zQf7-W__modalPrimary",
  "modalSecondary": "section-module__zQf7-W__modalSecondary",
  "modalSubtitle": "section-module__zQf7-W__modalSubtitle",
  "modalTextarea": "section-module__zQf7-W__modalTextarea",
  "page": "section-module__zQf7-W__page",
  "panel": "section-module__zQf7-W__panel",
  "panelBody": "section-module__zQf7-W__panelBody",
  "panelGrid": "section-module__zQf7-W__panelGrid",
  "panelTitle": "section-module__zQf7-W__panelTitle",
  "passwordBox": "section-module__zQf7-W__passwordBox",
  "resetButton": "section-module__zQf7-W__resetButton",
  "subtitle": "section-module__zQf7-W__subtitle",
  "title": "section-module__zQf7-W__title",
});
}),
"[project]/src/app/users/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/section.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UsersPage() {
    _s();
    const [lotlyAdmins, setLotlyAdmins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminEmails, setAdminEmails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersPage.useEffect": ()=>{
            let isMounted = true;
            Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])("/crud/lotly_admin"),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])("/crud/user")
            ]).then({
                "UsersPage.useEffect": ([lotlyAdmins, users])=>{
                    if (!isMounted) return;
                    const emailMap = new Map(users.map({
                        "UsersPage.useEffect": (row)=>[
                                row.id,
                                row.email ?? ""
                            ]
                    }["UsersPage.useEffect"]));
                    setAdminEmails(Object.fromEntries(emailMap.entries()));
                    setLotlyAdmins(lotlyAdmins);
                }
            }["UsersPage.useEffect"]).catch({
                "UsersPage.useEffect": (err)=>{
                    if (!isMounted) return;
                    setError(err instanceof Error ? err.message : "Unable to load Lotly admins.");
                }
            }["UsersPage.useEffect"]);
            return ({
                "UsersPage.useEffect": ()=>{
                    isMounted = false;
                }
            })["UsersPage.useEffect"];
        }
    }["UsersPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Users & Access"
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Control admin credentials, roles, and critical access policies across every Lotly tenant."
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                type: "button",
                                children: "Invite admin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                type: "button",
                                children: "Reset password"
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                type: "button",
                                children: "Export access log"
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 66,
                columnNumber: 17
            }, this),
            lotlyAdmins.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelGrid,
                children: lotlyAdmins.map((admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelTitle,
                                children: admin.first_name || admin.last_name ? `${admin.first_name ?? ""} ${admin.last_name ?? ""}`.trim() : "Lotly Admin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: adminEmails[admin.user_id] ?? "No email"
                            }, void 0, false, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: [
                                    "Title: ",
                                    admin.title ?? "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: [
                                    "Status: ",
                                    admin.status ?? "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/users/page.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this)
                        ]
                    }, admin.id, true, {
                        fileName: "[project]/src/app/users/page.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/users/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/users/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(UsersPage, "qBIwWA8fGZuA0vpMfQAgWSBo/i4=");
_c = UsersPage;
var _c;
__turbopack_context__.k.register(_c, "UsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_01957090._.js.map