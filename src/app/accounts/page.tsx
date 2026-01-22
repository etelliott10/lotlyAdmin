"use client";

import { useEffect, useMemo, useState } from "react";
import { apiGet, apiPatch, apiPost } from "@/lib/api";
import styles from "../section.module.css";

type TopHierarchy = {
  id: number;
  name?: string | null;
  legal_name?: string | null;
  tax_id?: string | null;
  status?: string | null;
  admin_list_id?: number | null;
  employee_list_id?: number | null;
  entity_list_id?: number | null;
  resident_list_id?: number | null;
  website_list_id?: number | null;
};

type AdminList = { id: number; top_hierarchy_id: number };
type Admin = { id: number; admin_list_id: number; user_id: number };
type User = {
  id: number;
  email?: string | null;
  first_name?: string | null;
  last_name?: string | null;
};
type EntityList = { id: number; top_hierarchy_id: number };
type Entity = { id: number; entity_list_id: number; total_sites?: number | null };

const PASSWORD_CHARS =
  "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";

const basePanels = [
  {
    title: "New account setup",
    body: "Provision a new tenant, assign plan, and configure billing owner.",
  },
  {
    title: "Account status",
    body: "Activate or deactivate accounts based on payment status or policy.",
  },
  {
    title: "Site inventory",
    body: "Track total sites per account and enforce plan limits.",
  },
];

export default function AccountsPage() {
  const [panels, setPanels] = useState(basePanels);
  const [topHierarchies, setTopHierarchies] = useState<TopHierarchy[]>([]);
  const [adminCounts, setAdminCounts] = useState<Record<number, number>>({});
  const [adminEmails, setAdminEmails] = useState<Record<number, string[]>>({});
  const [adminUsers, setAdminUsers] = useState<Record<number, User[]>>({});
  const [resetModal, setResetModal] = useState<{
    accountId: number;
    accountName: string;
    admin: User;
    step: "verify" | "reason" | "done";
  } | null>(null);
  const [resetPhrase, setResetPhrase] = useState("");
  const [resetReason, setResetReason] = useState("");
  const [addAdminModal, setAddAdminModal] = useState<{
    account: TopHierarchy;
  } | null>(null);
  const [addAdminEmail, setAddAdminEmail] = useState("");
  const [addAdminStep, setAddAdminStep] = useState<"form" | "done">("form");
  const [addAdminPassword, setAddAdminPassword] = useState("");
  const [siteTotals, setSiteTotals] = useState<Record<number, number>>({});
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createStep, setCreateStep] = useState<"form" | "done">("form");
  const [createPassword, setCreatePassword] = useState("");
  const [createForm, setCreateForm] = useState({
    name: "",
    legal_name: "",
    tax_id: "",
    billing_email: "",
    status: "active",
    admin_first_name: "",
    admin_last_name: "",
    admin_email: "",
  });

  const totals = useMemo(() => {
    const totalAccounts = topHierarchies.length;
    const activeAccounts = topHierarchies.filter(
      (row) => (row.status ?? "active") === "active",
    ).length;
    const totalAdmins = Object.values(adminCounts).reduce((sum, value) => sum + value, 0);
    return { totalAccounts, activeAccounts, totalAdmins };
  }, [topHierarchies, adminCounts]);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      apiGet<TopHierarchy[]>("/crud/top_hierarchy"),
      apiGet<AdminList[]>("/crud/admin_list"),
      apiGet<Admin[]>("/crud/admin"),
      apiGet<User[]>("/crud/user"),
      apiGet<EntityList[]>("/crud/entity_list"),
      apiGet<Entity[]>("/crud/entities"),
    ])
      .then(([hierarchies, adminLists, admins, users, entityLists, entities]) => {
        if (!isMounted) return;
        setTopHierarchies(hierarchies);

        const listMap = new Map(adminLists.map((row) => [row.id, row.top_hierarchy_id]));
        const userMap = new Map(users.map((row) => [row.id, row.email ?? ""]));
        const entityListMap = new Map(
          entityLists.map((row) => [row.id, row.top_hierarchy_id]),
        );

        const counts: Record<number, number> = {};
        const emails: Record<number, string[]> = {};
        const usersByAccount: Record<number, User[]> = {};
        admins.forEach((admin) => {
          const topId = listMap.get(admin.admin_list_id);
          if (!topId) return;
          counts[topId] = (counts[topId] ?? 0) + 1;
          const email = userMap.get(admin.user_id);
          if (email) {
            emails[topId] = [...(emails[topId] ?? []), email];
          }
          const user = users.find((row) => row.id === admin.user_id);
          if (user) {
            usersByAccount[topId] = [...(usersByAccount[topId] ?? []), user];
          }
        });
        setAdminCounts(counts);
        setAdminEmails(emails);
        setAdminUsers(usersByAccount);

        const totals: Record<number, number> = {};
        entities.forEach((entity) => {
          const topId = entityListMap.get(entity.entity_list_id);
          if (!topId) return;
          const sites = Number(entity.total_sites ?? 0);
          totals[topId] = (totals[topId] ?? 0) + (Number.isNaN(sites) ? 0 : sites);
        });
        setSiteTotals(totals);
      })
      .catch(() => {
        // keep default panels
      });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setPanels((prev) =>
      prev.map((panel) => {
        if (panel.title === "New account setup") {
          return {
            ...panel,
            body: `${totals.totalAccounts} total accounts in the portfolio.`,
          };
        }
        if (panel.title === "Account status") {
          return {
            ...panel,
            body: `${totals.activeAccounts} active accounts · ${
              totals.totalAccounts - totals.activeAccounts
            } inactive.`,
          };
        }
        if (panel.title === "Site inventory") {
          return {
            ...panel,
            body: `${totals.totalAdmins} admins assigned across accounts.`,
          };
        }
        return panel;
      }),
    );
  }, [totals]);

  const generatePassword = (length = 12) => {
    const values = new Uint32Array(length);
    window.crypto.getRandomValues(values);
    return Array.from(values, (value) => PASSWORD_CHARS[value % PASSWORD_CHARS.length]).join(
      "",
    );
  };

  const createAccount = async () => {
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
      const top = await apiPost<TopHierarchy>("/crud/top_hierarchy", {
        name: createForm.name.trim(),
        legal_name: createForm.legal_name.trim() || null,
        tax_id: createForm.tax_id.trim() || null,
        billing_email: createForm.billing_email.trim() || null,
        status: createForm.status || "active",
        created_at: now,
        updated_at: now,
      });

      const adminList = await apiPost<{ id: number }>("/crud/admin_list", {
        top_hierarchy_id: top.id,
        created_at: now,
        updated_at: now,
      });
      const employeeList = await apiPost<{ id: number }>("/crud/employee_list", {
        top_hierarchy_id: top.id,
        created_at: now,
        updated_at: now,
      });
      const entityList = await apiPost<{ id: number }>("/crud/entity_list", {
        top_hierarchy_id: top.id,
        created_at: now,
        updated_at: now,
      });
      const residentList = await apiPost<{ id: number }>("/crud/resident_list", {
        top_hierarchy_id: top.id,
        created_at: now,
        updated_at: now,
      });
      const websiteList = await apiPost<{ id: number }>("/crud/website_list", {
        top_hierarchy_id: top.id,
        created_at: now,
        updated_at: now,
      });

      await apiPatch<TopHierarchy>(`/crud/top_hierarchy/${top.id}`, {
        admin_list_id: adminList.id,
        employee_list_id: employeeList.id,
        entity_list_id: entityList.id,
        resident_list_id: residentList.id,
        website_list_id: websiteList.id,
        updated_at: now,
      });

      const adminEmail = createForm.admin_email.trim().toLowerCase();
      const adminFirstName = createForm.admin_first_name.trim() || null;
      const adminLastName = createForm.admin_last_name.trim() || null;

      const adminUser = await apiPost<User>("/admin/users/create", {
        email: adminEmail,
        password: generatedPassword,
        admin_list_id: adminList.id,
        first_name: adminFirstName,
        last_name: adminLastName,
        portal: "employee",
      });

      setTopHierarchies((prev) => [
        {
          ...top,
          admin_list_id: adminList.id,
          employee_list_id: employeeList.id,
          entity_list_id: entityList.id,
          resident_list_id: residentList.id,
          website_list_id: websiteList.id,
        },
        ...prev,
      ]);
      setAdminCounts((prev) => ({
        ...prev,
        [top.id]: (prev[top.id] ?? 0) + 1,
      }));
      setAdminEmails((prev) => ({
        ...prev,
        [top.id]: [...(prev[top.id] ?? []), adminEmail],
      }));
      setAdminUsers((prev) => ({
        ...prev,
        [top.id]: [
          ...(prev[top.id] ?? []),
          {
            id: adminUser.id,
            email: adminEmail,
            first_name: adminFirstName,
            last_name: adminLastName,
          },
        ],
      }));
      setCreatePassword(generatedPassword);
      setCreateStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create account.");
    } finally {
      setIsCreating(false);
    }
  };

  const suspendAccount = () => {
    const target = window.prompt(
      "Enter the account ID or exact account name to suspend:",
    );
    if (!target) return;

    const normalized = target.trim().toLowerCase();
    const match = topHierarchies.find((account) => {
      if (String(account.id) === normalized) return true;
      if (account.name && account.name.toLowerCase() === normalized) return true;
      return false;
    });

    if (!match) {
      setError("Account not found. Please use a valid ID or name.");
      return;
    }

    const confirmation = window.prompt(
      `Type SUSPEND ${match.id} to confirm pausing this account.`,
    );
    if (confirmation !== `SUSPEND ${match.id}`) {
      alert("Suspension cancelled.");
      return;
    }

    setError(null);
    const now = new Date().toISOString();
    apiPatch<TopHierarchy>(`/crud/top_hierarchy/${match.id}`, {
      status: "suspended",
      updated_at: now,
    })
      .then((updated) => {
        setTopHierarchies((prev) =>
          prev.map((account) =>
            account.id === match.id ? { ...account, ...updated } : account,
          ),
        );
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Unable to suspend account.");
      });
  };

  const openResetModal = (account: TopHierarchy, admin: User) => {
    setResetPhrase("");
    setResetReason("");
    setResetModal({
      accountId: account.id,
      accountName: account.name ?? `Account ${account.id}`,
      admin,
      step: "verify",
    });
  };

  const closeResetModal = () => {
    setResetModal(null);
    setResetPhrase("");
    setResetReason("");
  };

  const confirmResetStep = () => {
    if (!resetModal) return;
    if (resetModal.step === "verify") {
      const expected = `RESET ${resetModal.admin.id}`;
      if (resetPhrase.trim() !== expected) {
        setError("Type the exact confirmation phrase to continue.");
        return;
      }
      setError(null);
      setResetModal({ ...resetModal, step: "reason" });
      return;
    }
    if (resetModal.step === "reason") {
      if (!resetReason.trim()) {
        setError("Please add a reason for the reset.");
        return;
      }
      setError(null);
      setResetModal({ ...resetModal, step: "done" });
    }
  };

  const finalizeReset = () => {
    if (!resetModal) return;
    closeResetModal();
    alert(
      `Password reset queued for ${resetModal.admin.email ?? "admin user"}.\nReason: ${resetReason}`,
    );
  };

  const openAddAdminModal = (account: TopHierarchy) => {
    setError(null);
    setAddAdminEmail("");
    setAddAdminPassword("");
    setAddAdminStep("form");
    setAddAdminModal({ account });
  };

  const closeAddAdminModal = () => {
    setAddAdminModal(null);
    setAddAdminEmail("");
    setAddAdminPassword("");
    setAddAdminStep("form");
  };

  const submitAddAdmin = async () => {
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
      const user = await apiPost<User>("/admin/users/create", {
        email,
        password: generatedPassword,
        admin_list_id: account.admin_list_id,
        portal: "employee",
      });

      setAdminCounts((prev) => ({
        ...prev,
        [account.id]: (prev[account.id] ?? 0) + 1,
      }));
      setAdminEmails((prev) => ({
        ...prev,
        [account.id]: [...(prev[account.id] ?? []), email],
      }));
      setAdminUsers((prev) => ({
        ...prev,
        [account.id]: [...(prev[account.id] ?? []), user as User],
      }));
      setAddAdminPassword(generatedPassword);
      setAddAdminStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to add admin.");
    }
  };

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Account Control</h2>
          <p className={styles.subtitle}>
            Create new accounts, assign billing controls, and manage active
            status across the Lotly network.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button
            className={styles.actionButton}
            type="button"
            onClick={() => {
              setError(null);
              setCreateStep("form");
              setCreatePassword("");
              setShowCreateModal(true);
            }}
          >
            Create account
          </button>
          <button className={styles.actionButton} type="button" onClick={suspendAccount}>
            Suspend account
          </button>
        </div>
      </header>
      {error && <p className={styles.subtitle}>{error}</p>}
      {showCreateModal && (
        <div className={styles.modalBackdrop} role="presentation">
          <div className={styles.modal} role="dialog" aria-modal="true">
            <header className={styles.modalHeader}>
              <h3>Create account</h3>
              <p className={styles.modalSubtitle}>
                Enter top hierarchy details for the new account.
              </p>
            </header>
            {createStep === "form" ? (
              <form
                className={styles.modalForm}
                onSubmit={(event) => {
                  event.preventDefault();
                  createAccount();
                }}
              >
                <label className={styles.modalLabel}>
                  Account name
                  <input
                    className={styles.modalInput}
                    value={createForm.name}
                    onChange={(event) =>
                      setCreateForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    placeholder="Sunrise Communities"
                    required
                  />
                </label>
                <div className={styles.modalGrid}>
                  <label className={styles.modalLabel}>
                    Legal name
                    <input
                      className={styles.modalInput}
                      value={createForm.legal_name}
                      onChange={(event) =>
                        setCreateForm((prev) => ({
                          ...prev,
                          legal_name: event.target.value,
                        }))
                      }
                      placeholder="Sunrise Holdings LLC"
                    />
                  </label>
                  <label className={styles.modalLabel}>
                    Tax ID
                    <input
                      className={styles.modalInput}
                      value={createForm.tax_id}
                      onChange={(event) =>
                        setCreateForm((prev) => ({
                          ...prev,
                          tax_id: event.target.value,
                        }))
                      }
                      placeholder="12-3456789"
                    />
                  </label>
                </div>
                <div className={styles.modalGrid}>
                  <label className={styles.modalLabel}>
                    Billing email
                    <input
                      className={styles.modalInput}
                      type="email"
                      value={createForm.billing_email}
                      onChange={(event) =>
                        setCreateForm((prev) => ({
                          ...prev,
                          billing_email: event.target.value,
                        }))
                      }
                      placeholder="billing@sunrise.com"
                    />
                  </label>
                  <label className={styles.modalLabel}>
                    Status
                    <select
                      className={styles.modalInput}
                      value={createForm.status}
                      onChange={(event) =>
                        setCreateForm((prev) => ({
                          ...prev,
                          status: event.target.value,
                        }))
                      }
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="pending">Pending</option>
                    </select>
                  </label>
                </div>
                <div className={styles.modalDivider}>Admin contact</div>
                <div className={styles.modalGrid}>
                  <label className={styles.modalLabel}>
                    Admin first name
                    <input
                      className={styles.modalInput}
                      value={createForm.admin_first_name}
                      onChange={(event) =>
                        setCreateForm((prev) => ({
                          ...prev,
                          admin_first_name: event.target.value,
                        }))
                      }
                      placeholder="Alex"
                    />
                  </label>
                  <label className={styles.modalLabel}>
                    Admin last name
                    <input
                      className={styles.modalInput}
                      value={createForm.admin_last_name}
                      onChange={(event) =>
                        setCreateForm((prev) => ({
                          ...prev,
                          admin_last_name: event.target.value,
                        }))
                      }
                      placeholder="Morgan"
                    />
                  </label>
                </div>
                <label className={styles.modalLabel}>
                  Admin email
                  <input
                    className={styles.modalInput}
                    type="email"
                    value={createForm.admin_email}
                    onChange={(event) =>
                      setCreateForm((prev) => ({
                        ...prev,
                        admin_email: event.target.value,
                      }))
                    }
                    placeholder="admin@sunrise.com"
                    required
                  />
                </label>
                <div className={styles.modalActions}>
                  <button
                    className={styles.modalSecondary}
                    type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setError(null);
                    setCreateStep("form");
                    setCreatePassword("");
                  }}
                >
                  Cancel
                </button>
                  <button
                    className={styles.modalPrimary}
                    type="submit"
                    disabled={isCreating}
                  >
                    {isCreating ? "Creating..." : "Create account"}
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className={styles.modalForm}>
                  <p className={styles.panelBody}>
                    Account created. Save the admin credentials below.
                  </p>
                  <p className={styles.panelBody}>
                    Admin email: {createForm.admin_email.trim()}
                  </p>
                  <div className={styles.passwordBox}>{createPassword}</div>
                </div>
                <div className={styles.modalActions}>
                  <button
                    className={styles.modalPrimary}
                    type="button"
                    onClick={() => {
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
                        admin_email: "",
                      });
                    }}
                  >
                    Done
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className={styles.panelGrid}>
        {panels.map((panel) => (
          <div key={panel.title} className={styles.panel}>
            <p className={styles.panelTitle}>{panel.title}</p>
            <p className={styles.panelBody}>{panel.body}</p>
          </div>
        ))}
      </div>
      {topHierarchies.length > 0 && (
        <div className={styles.panelGrid}>
          {topHierarchies.map((account) => (
            <div key={account.id} className={styles.panel}>
              <p className={styles.panelTitle}>{account.name ?? `Account ${account.id}`}</p>
              <p className={styles.panelBody}>
                Legal name: {account.legal_name ?? "—"}
              </p>
              <p className={styles.panelBody}>Tax ID: {account.tax_id ?? "—"}</p>
              <p className={styles.panelBody}>
                Site inventory: {siteTotals[account.id] ?? 0}
              </p>
              <p className={styles.panelBody}>
                Admins: {adminCounts[account.id] ?? 0}
              </p>
              <button
                className={styles.inlineButton}
                type="button"
                onClick={() => openAddAdminModal(account)}
              >
                Add admin
              </button>
              {adminUsers[account.id]?.length ? (
                <div className={styles.adminList}>
                  {adminUsers[account.id].map((admin) => (
                    <div key={admin.id} className={styles.adminRow}>
                      <span className={styles.panelBody}>
                        {admin.email ?? `Admin ${admin.id}`}
                      </span>
                      <button
                        className={styles.resetButton}
                        type="button"
                        onClick={() => openResetModal(account, admin)}
                      >
                        Reset password
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className={styles.panelBody}>No admins assigned.</p>
              )}
            </div>
          ))}
        </div>
      )}
      {resetModal && (
        <div className={styles.modalBackdrop} role="presentation">
          <div className={styles.modal} role="dialog" aria-modal="true">
            <header className={styles.modalHeader}>
              <h3>Reset admin password</h3>
              <p className={styles.modalSubtitle}>
                Account: {resetModal.accountName}
              </p>
            </header>
            <div className={styles.modalForm}>
              {resetModal.step === "verify" && (
                <>
                  <p className={styles.panelBody}>
                    Admin: {resetModal.admin.email ?? `Admin ${resetModal.admin.id}`}
                  </p>
                  <label className={styles.modalLabel}>
                    Type <strong>RESET {resetModal.admin.id}</strong> to continue.
                    <input
                      className={styles.modalInput}
                      value={resetPhrase}
                      onChange={(event) => setResetPhrase(event.target.value)}
                      placeholder={`RESET ${resetModal.admin.id}`}
                    />
                  </label>
                </>
              )}
              {resetModal.step === "reason" && (
                <label className={styles.modalLabel}>
                  Reason for reset
                  <textarea
                    className={`${styles.modalInput} ${styles.modalTextarea}`}
                    value={resetReason}
                    onChange={(event) => setResetReason(event.target.value)}
                    placeholder="User requested reset after failed login attempts."
                    rows={3}
                  />
                </label>
              )}
              {resetModal.step === "done" && (
                <p className={styles.panelBody}>
                  Confirmation complete. This reset will be queued with the reason
                  provided.
                </p>
              )}
            </div>
            <div className={styles.modalActions}>
              <button className={styles.modalSecondary} type="button" onClick={closeResetModal}>
                Cancel
              </button>
              {resetModal.step !== "done" ? (
                <button className={styles.modalPrimary} type="button" onClick={confirmResetStep}>
                  Continue
                </button>
              ) : (
                <button className={styles.modalPrimary} type="button" onClick={finalizeReset}>
                  Queue reset
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {addAdminModal && (
        <div className={styles.modalBackdrop} role="presentation">
          <div className={styles.modal} role="dialog" aria-modal="true">
            <header className={styles.modalHeader}>
              <h3>Add admin</h3>
              <p className={styles.modalSubtitle}>
                Account: {addAdminModal.account.name ?? `Account ${addAdminModal.account.id}`}
              </p>
            </header>
            {addAdminStep === "form" ? (
              <>
                <div className={styles.modalForm}>
                  <label className={styles.modalLabel}>
                    Admin email
                    <input
                      className={styles.modalInput}
                      type="email"
                      value={addAdminEmail}
                      onChange={(event) => setAddAdminEmail(event.target.value)}
                      placeholder="admin@account.com"
                    />
                  </label>
                </div>
                <div className={styles.modalActions}>
                  <button
                    className={styles.modalSecondary}
                    type="button"
                    onClick={closeAddAdminModal}
                  >
                    Cancel
                  </button>
                  <button className={styles.modalPrimary} type="button" onClick={submitAddAdmin}>
                    Add admin
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.modalForm}>
                  <p className={styles.panelBody}>
                    Admin added. Save the temporary password below.
                  </p>
                  <p className={styles.panelBody}>Admin email: {addAdminEmail.trim()}</p>
                  <div className={styles.passwordBox}>{addAdminPassword}</div>
                </div>
                <div className={styles.modalActions}>
                  <button className={styles.modalPrimary} type="button" onClick={closeAddAdminModal}>
                    Done
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
