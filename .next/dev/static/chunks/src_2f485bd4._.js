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
"[project]/src/app/accounts/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountsPage
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
const PASSWORD_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
const basePanels = [
    {
        title: "New account setup",
        body: "Provision a new tenant, assign plan, and configure billing owner."
    },
    {
        title: "Account status",
        body: "Activate or deactivate accounts based on payment status or policy."
    },
    {
        title: "Site inventory",
        body: "Track total sites per account and enforce plan limits."
    }
];
function AccountsPage() {
    _s();
    const [panels, setPanels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(basePanels);
    const [topHierarchies, setTopHierarchies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminCounts, setAdminCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [adminEmails, setAdminEmails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [adminUsers, setAdminUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [resetModal, setResetModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resetPhrase, setResetPhrase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [resetReason, setResetReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [addAdminModal, setAddAdminModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [addAdminEmail, setAddAdminEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [addAdminStep, setAddAdminStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("form");
    const [addAdminPassword, setAddAdminPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [siteTotals, setSiteTotals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isCreating, setIsCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createStep, setCreateStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("form");
    const [createPassword, setCreatePassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [createForm, setCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        legal_name: "",
        tax_id: "",
        billing_email: "",
        status: "active",
        admin_first_name: "",
        admin_last_name: "",
        admin_email: ""
    });
    const totals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AccountsPage.useMemo[totals]": ()=>{
            const totalAccounts = topHierarchies.length;
            const activeAccounts = topHierarchies.filter({
                "AccountsPage.useMemo[totals]": (row)=>(row.status ?? "active") === "active"
            }["AccountsPage.useMemo[totals]"]).length;
            const totalAdmins = Object.values(adminCounts).reduce({
                "AccountsPage.useMemo[totals].totalAdmins": (sum, value)=>sum + value
            }["AccountsPage.useMemo[totals].totalAdmins"], 0);
            return {
                totalAccounts,
                activeAccounts,
                totalAdmins
            };
        }
    }["AccountsPage.useMemo[totals]"], [
        topHierarchies,
        adminCounts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountsPage.useEffect": ()=>{
            let isMounted = true;
            Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])("/crud/top_hierarchy"),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])("/crud/admin_list"),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])("/crud/admin"),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])("/crud/user"),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])("/crud/entity_list"),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])("/crud/entities")
            ]).then({
                "AccountsPage.useEffect": ([hierarchies, adminLists, admins, users, entityLists, entities])=>{
                    if (!isMounted) return;
                    setTopHierarchies(hierarchies);
                    const listMap = new Map(adminLists.map({
                        "AccountsPage.useEffect": (row)=>[
                                row.id,
                                row.top_hierarchy_id
                            ]
                    }["AccountsPage.useEffect"]));
                    const userMap = new Map(users.map({
                        "AccountsPage.useEffect": (row)=>[
                                row.id,
                                row.email ?? ""
                            ]
                    }["AccountsPage.useEffect"]));
                    const entityListMap = new Map(entityLists.map({
                        "AccountsPage.useEffect": (row)=>[
                                row.id,
                                row.top_hierarchy_id
                            ]
                    }["AccountsPage.useEffect"]));
                    const counts = {};
                    const emails = {};
                    const usersByAccount = {};
                    admins.forEach({
                        "AccountsPage.useEffect": (admin)=>{
                            const topId = listMap.get(admin.admin_list_id);
                            if (!topId) return;
                            counts[topId] = (counts[topId] ?? 0) + 1;
                            const email = userMap.get(admin.user_id);
                            if (email) {
                                emails[topId] = [
                                    ...emails[topId] ?? [],
                                    email
                                ];
                            }
                            const user = users.find({
                                "AccountsPage.useEffect.user": (row)=>row.id === admin.user_id
                            }["AccountsPage.useEffect.user"]);
                            if (user) {
                                usersByAccount[topId] = [
                                    ...usersByAccount[topId] ?? [],
                                    user
                                ];
                            }
                        }
                    }["AccountsPage.useEffect"]);
                    setAdminCounts(counts);
                    setAdminEmails(emails);
                    setAdminUsers(usersByAccount);
                    const totals = {};
                    entities.forEach({
                        "AccountsPage.useEffect": (entity)=>{
                            const topId = entityListMap.get(entity.entity_list_id);
                            if (!topId) return;
                            const sites = Number(entity.total_sites ?? 0);
                            totals[topId] = (totals[topId] ?? 0) + (Number.isNaN(sites) ? 0 : sites);
                        }
                    }["AccountsPage.useEffect"]);
                    setSiteTotals(totals);
                }
            }["AccountsPage.useEffect"]).catch({
                "AccountsPage.useEffect": ()=>{
                // keep default panels
                }
            }["AccountsPage.useEffect"]);
            return ({
                "AccountsPage.useEffect": ()=>{
                    isMounted = false;
                }
            })["AccountsPage.useEffect"];
        }
    }["AccountsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountsPage.useEffect": ()=>{
            setPanels({
                "AccountsPage.useEffect": (prev)=>prev.map({
                        "AccountsPage.useEffect": (panel)=>{
                            if (panel.title === "New account setup") {
                                return {
                                    ...panel,
                                    body: `${totals.totalAccounts} total accounts in the portfolio.`
                                };
                            }
                            if (panel.title === "Account status") {
                                return {
                                    ...panel,
                                    body: `${totals.activeAccounts} active accounts · ${totals.totalAccounts - totals.activeAccounts} inactive.`
                                };
                            }
                            if (panel.title === "Site inventory") {
                                return {
                                    ...panel,
                                    body: `${totals.totalAdmins} admins assigned across accounts.`
                                };
                            }
                            return panel;
                        }
                    }["AccountsPage.useEffect"])
            }["AccountsPage.useEffect"]);
        }
    }["AccountsPage.useEffect"], [
        totals
    ]);
    const generatePassword = (length = 12)=>{
        const values = new Uint32Array(length);
        window.crypto.getRandomValues(values);
        return Array.from(values, (value)=>PASSWORD_CHARS[value % PASSWORD_CHARS.length]).join("");
    };
    const createAccount = async ()=>{
        if (!createForm.name.trim()) {
            setError("Account name is required.");
            return;
        }
        if (!createForm.admin_email.trim()) {
            setError("Admin email is required.");
            return;
        }
        setIsCreating(true);
        setError(null);
        const now = new Date().toISOString();
        const generatedPassword = generatePassword();
        try {
            const top = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/crud/top_hierarchy", {
                name: createForm.name.trim(),
                legal_name: createForm.legal_name.trim() || null,
                tax_id: createForm.tax_id.trim() || null,
                billing_email: createForm.billing_email.trim() || null,
                status: createForm.status || "active",
                created_at: now,
                updated_at: now
            });
            const adminList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/crud/admin_list", {
                top_hierarchy_id: top.id,
                created_at: now,
                updated_at: now
            });
            const employeeList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/crud/employee_list", {
                top_hierarchy_id: top.id,
                created_at: now,
                updated_at: now
            });
            const entityList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/crud/entity_list", {
                top_hierarchy_id: top.id,
                created_at: now,
                updated_at: now
            });
            const residentList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/crud/resident_list", {
                top_hierarchy_id: top.id,
                created_at: now,
                updated_at: now
            });
            const websiteList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/crud/website_list", {
                top_hierarchy_id: top.id,
                created_at: now,
                updated_at: now
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPatch"])(`/crud/top_hierarchy/${top.id}`, {
                admin_list_id: adminList.id,
                employee_list_id: employeeList.id,
                entity_list_id: entityList.id,
                resident_list_id: residentList.id,
                website_list_id: websiteList.id,
                updated_at: now
            });
            const adminEmail = createForm.admin_email.trim().toLowerCase();
            const adminFirstName = createForm.admin_first_name.trim() || null;
            const adminLastName = createForm.admin_last_name.trim() || null;
            const adminUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/admin/users/create", {
                email: adminEmail,
                password: generatedPassword,
                admin_list_id: adminList.id,
                first_name: adminFirstName,
                last_name: adminLastName,
                portal: "employee"
            });
            setTopHierarchies((prev)=>[
                    {
                        ...top,
                        admin_list_id: adminList.id,
                        employee_list_id: employeeList.id,
                        entity_list_id: entityList.id,
                        resident_list_id: residentList.id,
                        website_list_id: websiteList.id
                    },
                    ...prev
                ]);
            setAdminCounts((prev)=>({
                    ...prev,
                    [top.id]: (prev[top.id] ?? 0) + 1
                }));
            setAdminEmails((prev)=>({
                    ...prev,
                    [top.id]: [
                        ...prev[top.id] ?? [],
                        adminEmail
                    ]
                }));
            setAdminUsers((prev)=>({
                    ...prev,
                    [top.id]: [
                        ...prev[top.id] ?? [],
                        {
                            id: adminUser.id,
                            email: adminEmail,
                            first_name: adminFirstName,
                            last_name: adminLastName
                        }
                    ]
                }));
            setCreatePassword(generatedPassword);
            setCreateStep("done");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unable to create account.");
        } finally{
            setIsCreating(false);
        }
    };
    const suspendAccount = ()=>{
        const target = window.prompt("Enter the account ID or exact account name to suspend:");
        if (!target) return;
        const normalized = target.trim().toLowerCase();
        const match = topHierarchies.find((account)=>{
            if (String(account.id) === normalized) return true;
            if (account.name && account.name.toLowerCase() === normalized) return true;
            return false;
        });
        if (!match) {
            setError("Account not found. Please use a valid ID or name.");
            return;
        }
        const confirmation = window.prompt(`Type SUSPEND ${match.id} to confirm pausing this account.`);
        if (confirmation !== `SUSPEND ${match.id}`) {
            alert("Suspension cancelled.");
            return;
        }
        setError(null);
        const now = new Date().toISOString();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPatch"])(`/crud/top_hierarchy/${match.id}`, {
            status: "suspended",
            updated_at: now
        }).then((updated)=>{
            setTopHierarchies((prev)=>prev.map((account)=>account.id === match.id ? {
                        ...account,
                        ...updated
                    } : account));
        }).catch((err)=>{
            setError(err instanceof Error ? err.message : "Unable to suspend account.");
        });
    };
    const openResetModal = (account, admin)=>{
        setResetPhrase("");
        setResetReason("");
        setResetModal({
            accountId: account.id,
            accountName: account.name ?? `Account ${account.id}`,
            admin,
            step: "verify"
        });
    };
    const closeResetModal = ()=>{
        setResetModal(null);
        setResetPhrase("");
        setResetReason("");
    };
    const confirmResetStep = ()=>{
        if (!resetModal) return;
        if (resetModal.step === "verify") {
            const expected = `RESET ${resetModal.admin.id}`;
            if (resetPhrase.trim() !== expected) {
                setError("Type the exact confirmation phrase to continue.");
                return;
            }
            setError(null);
            setResetModal({
                ...resetModal,
                step: "reason"
            });
            return;
        }
        if (resetModal.step === "reason") {
            if (!resetReason.trim()) {
                setError("Please add a reason for the reset.");
                return;
            }
            setError(null);
            setResetModal({
                ...resetModal,
                step: "done"
            });
        }
    };
    const finalizeReset = ()=>{
        if (!resetModal) return;
        closeResetModal();
        alert(`Password reset queued for ${resetModal.admin.email ?? "admin user"}.\nReason: ${resetReason}`);
    };
    const openAddAdminModal = (account)=>{
        setError(null);
        setAddAdminEmail("");
        setAddAdminPassword("");
        setAddAdminStep("form");
        setAddAdminModal({
            account
        });
    };
    const closeAddAdminModal = ()=>{
        setAddAdminModal(null);
        setAddAdminEmail("");
        setAddAdminPassword("");
        setAddAdminStep("form");
    };
    const submitAddAdmin = async ()=>{
        if (!addAdminModal) return;
        if (!addAdminEmail.trim()) {
            setError("Admin email is required.");
            return;
        }
        const account = addAdminModal.account;
        if (!account.admin_list_id) {
            setError("This account does not have an admin list yet.");
            return;
        }
        setError(null);
        const email = addAdminEmail.trim().toLowerCase();
        const generatedPassword = generatePassword();
        try {
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/admin/users/create", {
                email,
                password: generatedPassword,
                admin_list_id: account.admin_list_id,
                portal: "employee"
            });
            setAdminCounts((prev)=>({
                    ...prev,
                    [account.id]: (prev[account.id] ?? 0) + 1
                }));
            setAdminEmails((prev)=>({
                    ...prev,
                    [account.id]: [
                        ...prev[account.id] ?? [],
                        email
                    ]
                }));
            setAdminUsers((prev)=>({
                    ...prev,
                    [account.id]: [
                        ...prev[account.id] ?? [],
                        user
                    ]
                }));
            setAddAdminPassword(generatedPassword);
            setAddAdminStep("done");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unable to add admin.");
        }
    };
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
                                children: "Account Control"
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Create new accounts, assign billing controls, and manage active status across the Lotly network."
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/accounts/page.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                type: "button",
                                onClick: ()=>{
                                    setError(null);
                                    setCreateStep("form");
                                    setCreatePassword("");
                                    setShowCreateModal(true);
                                },
                                children: "Create account"
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 459,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                type: "button",
                                onClick: suspendAccount,
                                children: "Suspend account"
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/accounts/page.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/accounts/page.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/accounts/page.tsx",
                lineNumber: 476,
                columnNumber: 17
            }, this),
            showCreateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBackdrop,
                role: "presentation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                    role: "dialog",
                    "aria-modal": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Create account"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalSubtitle,
                                    children: "Enter top hierarchy details for the new account."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/accounts/page.tsx",
                            lineNumber: 480,
                            columnNumber: 13
                        }, this),
                        createStep === "form" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalForm,
                            onSubmit: (event)=>{
                                event.preventDefault();
                                createAccount();
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                    children: [
                                        "Account name",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                            value: createForm.name,
                                            onChange: (event)=>setCreateForm((prev)=>({
                                                        ...prev,
                                                        name: event.target.value
                                                    })),
                                            placeholder: "Sunrise Communities",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                            children: [
                                                "Legal name",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                                    value: createForm.legal_name,
                                                    onChange: (event)=>setCreateForm((prev)=>({
                                                                ...prev,
                                                                legal_name: event.target.value
                                                            })),
                                                    placeholder: "Sunrise Holdings LLC"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/accounts/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                            children: [
                                                "Tax ID",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                                    value: createForm.tax_id,
                                                    onChange: (event)=>setCreateForm((prev)=>({
                                                                ...prev,
                                                                tax_id: event.target.value
                                                            })),
                                                    placeholder: "12-3456789"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/accounts/page.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 521,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                            children: [
                                                "Billing email",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                                    type: "email",
                                                    value: createForm.billing_email,
                                                    onChange: (event)=>setCreateForm((prev)=>({
                                                                ...prev,
                                                                billing_email: event.target.value
                                                            })),
                                                    placeholder: "billing@sunrise.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/accounts/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 537,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                            children: [
                                                "Status",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                                    value: createForm.status,
                                                    onChange: (event)=>setCreateForm((prev)=>({
                                                                ...prev,
                                                                status: event.target.value
                                                            })),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "active",
                                                            children: "Active"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/accounts/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "inactive",
                                                            children: "Inactive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/accounts/page.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "pending",
                                                            children: "Pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/accounts/page.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/accounts/page.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 552,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 536,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalDivider,
                                    children: "Admin contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                            children: [
                                                "Admin first name",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                                    value: createForm.admin_first_name,
                                                    onChange: (event)=>setCreateForm((prev)=>({
                                                                ...prev,
                                                                admin_first_name: event.target.value
                                                            })),
                                                    placeholder: "Alex"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/accounts/page.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                            children: [
                                                "Admin last name",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                                    value: createForm.admin_last_name,
                                                    onChange: (event)=>setCreateForm((prev)=>({
                                                                ...prev,
                                                                admin_last_name: event.target.value
                                                            })),
                                                    placeholder: "Morgan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/accounts/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 586,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                    children: [
                                        "Admin email",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                            type: "email",
                                            value: createForm.admin_email,
                                            onChange: (event)=>setCreateForm((prev)=>({
                                                        ...prev,
                                                        admin_email: event.target.value
                                                    })),
                                            placeholder: "admin@sunrise.com",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 603,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 601,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalSecondary,
                                            type: "button",
                                            onClick: ()=>{
                                                setShowCreateModal(false);
                                                setError(null);
                                                setCreateStep("form");
                                                setCreatePassword("");
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalPrimary,
                                            type: "submit",
                                            disabled: isCreating,
                                            children: isCreating ? "Creating..." : "Create account"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 630,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/accounts/page.tsx",
                            lineNumber: 487,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalForm,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                            children: "Account created. Save the admin credentials below."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                            children: [
                                                "Admin email: ",
                                                createForm.admin_email.trim()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 645,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].passwordBox,
                                            children: createPassword
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 648,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalActions,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalPrimary,
                                        type: "button",
                                        onClick: ()=>{
                                            setShowCreateModal(false);
                                            setCreateStep("form");
                                            setCreatePassword("");
                                            setCreateForm({
                                                name: "",
                                                legal_name: "",
                                                tax_id: "",
                                                billing_email: "",
                                                status: "active",
                                                admin_first_name: "",
                                                admin_last_name: "",
                                                admin_email: ""
                                            });
                                        },
                                        children: "Done"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/accounts/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/accounts/page.tsx",
                    lineNumber: 479,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/accounts/page.tsx",
                lineNumber: 478,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelGrid,
                children: panels.map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelTitle,
                                children: panel.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 681,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: panel.body
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 682,
                                columnNumber: 13
                            }, this)
                        ]
                    }, panel.title, true, {
                        fileName: "[project]/src/app/accounts/page.tsx",
                        lineNumber: 680,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/accounts/page.tsx",
                lineNumber: 678,
                columnNumber: 7
            }, this),
            topHierarchies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelGrid,
                children: topHierarchies.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelTitle,
                                children: account.name ?? `Account ${account.id}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 690,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: [
                                    "Legal name: ",
                                    account.legal_name ?? "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 691,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: [
                                    "Tax ID: ",
                                    account.tax_id ?? "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 694,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: [
                                    "Site inventory: ",
                                    siteTotals[account.id] ?? 0
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 695,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: [
                                    "Admins: ",
                                    adminCounts[account.id] ?? 0
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 698,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inlineButton,
                                type: "button",
                                onClick: ()=>openAddAdminModal(account),
                                children: "Add admin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 701,
                                columnNumber: 15
                            }, this),
                            adminUsers[account.id]?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminList,
                                children: adminUsers[account.id].map((admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                                children: admin.email ?? `Admin ${admin.id}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/accounts/page.tsx",
                                                lineNumber: 712,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resetButton,
                                                type: "button",
                                                onClick: ()=>openResetModal(account, admin),
                                                children: "Reset password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/accounts/page.tsx",
                                                lineNumber: 715,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, admin.id, true, {
                                        fileName: "[project]/src/app/accounts/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 709,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                children: "No admins assigned."
                            }, void 0, false, {
                                fileName: "[project]/src/app/accounts/page.tsx",
                                lineNumber: 726,
                                columnNumber: 17
                            }, this)
                        ]
                    }, account.id, true, {
                        fileName: "[project]/src/app/accounts/page.tsx",
                        lineNumber: 689,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/accounts/page.tsx",
                lineNumber: 687,
                columnNumber: 9
            }, this),
            resetModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBackdrop,
                role: "presentation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                    role: "dialog",
                    "aria-modal": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Reset admin password"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 736,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalSubtitle,
                                    children: [
                                        "Account: ",
                                        resetModal.accountName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 737,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/accounts/page.tsx",
                            lineNumber: 735,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalForm,
                            children: [
                                resetModal.step === "verify" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                            children: [
                                                "Admin: ",
                                                resetModal.admin.email ?? `Admin ${resetModal.admin.id}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 744,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                            children: [
                                                "Type ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "RESET ",
                                                        resetModal.admin.id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/accounts/page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 26
                                                }, this),
                                                " to continue.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                                    value: resetPhrase,
                                                    onChange: (event)=>setResetPhrase(event.target.value),
                                                    placeholder: `RESET ${resetModal.admin.id}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/accounts/page.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 747,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                resetModal.step === "reason" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                    children: [
                                        "Reason for reset",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalTextarea}`,
                                            value: resetReason,
                                            onChange: (event)=>setResetReason(event.target.value),
                                            placeholder: "User requested reset after failed login attempts.",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 761,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 759,
                                    columnNumber: 17
                                }, this),
                                resetModal.step === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                    children: "Confirmation complete. This reset will be queued with the reason provided."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 771,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/accounts/page.tsx",
                            lineNumber: 741,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalSecondary,
                                    type: "button",
                                    onClick: closeResetModal,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 778,
                                    columnNumber: 15
                                }, this),
                                resetModal.step !== "done" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalPrimary,
                                    type: "button",
                                    onClick: confirmResetStep,
                                    children: "Continue"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 782,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalPrimary,
                                    type: "button",
                                    onClick: finalizeReset,
                                    children: "Queue reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 786,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/accounts/page.tsx",
                            lineNumber: 777,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/accounts/page.tsx",
                    lineNumber: 734,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/accounts/page.tsx",
                lineNumber: 733,
                columnNumber: 9
            }, this),
            addAdminModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBackdrop,
                role: "presentation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                    role: "dialog",
                    "aria-modal": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Add admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 798,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalSubtitle,
                                    children: [
                                        "Account: ",
                                        addAdminModal.account.name ?? `Account ${addAdminModal.account.id}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 799,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/accounts/page.tsx",
                            lineNumber: 797,
                            columnNumber: 13
                        }, this),
                        addAdminStep === "form" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalForm,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalLabel,
                                        children: [
                                            "Admin email",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInput,
                                                type: "email",
                                                value: addAdminEmail,
                                                onChange: (event)=>setAddAdminEmail(event.target.value),
                                                placeholder: "admin@account.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/accounts/page.tsx",
                                                lineNumber: 808,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/accounts/page.tsx",
                                        lineNumber: 806,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 805,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalSecondary,
                                            type: "button",
                                            onClick: closeAddAdminModal,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 818,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalPrimary,
                                            type: "button",
                                            onClick: submitAddAdmin,
                                            children: "Add admin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 825,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 817,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalForm,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                            children: "Admin added. Save the temporary password below."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 833,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelBody,
                                            children: [
                                                "Admin email: ",
                                                addAdminEmail.trim()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].passwordBox,
                                            children: addAdminPassword
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/accounts/page.tsx",
                                            lineNumber: 837,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 832,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalActions,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalPrimary,
                                        type: "button",
                                        onClick: closeAddAdminModal,
                                        children: "Done"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/accounts/page.tsx",
                                        lineNumber: 840,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/accounts/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/accounts/page.tsx",
                    lineNumber: 796,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/accounts/page.tsx",
                lineNumber: 795,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/accounts/page.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, this);
}
_s(AccountsPage, "Ra3tgOd6snRpCM44fBmuwGATn2g=");
_c = AccountsPage;
var _c;
__turbopack_context__.k.register(_c, "AccountsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2f485bd4._.js.map