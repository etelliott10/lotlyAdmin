"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import styles from "../section.module.css";

type LotlyAdmin = {
  id: number;
  user_id: number;
  first_name?: string | null;
  last_name?: string | null;
  title?: string | null;
  status?: string | null;
};

type User = { id: number; email?: string | null };

export default function UsersPage() {
  const [lotlyAdmins, setLotlyAdmins] = useState<LotlyAdmin[]>([]);
  const [adminEmails, setAdminEmails] = useState<Record<number, string>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      apiGet<LotlyAdmin[]>("/crud/lotly_admin"),
      apiGet<User[]>("/crud/user"),
    ])
      .then(([lotlyAdmins, users]) => {
        if (!isMounted) return;
        const emailMap = new Map(users.map((row) => [row.id, row.email ?? ""]));
        setAdminEmails(Object.fromEntries(emailMap.entries()));
        setLotlyAdmins(lotlyAdmins);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "Unable to load Lotly admins.");
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Users & Access</h2>
          <p className={styles.subtitle}>
            Control admin credentials, roles, and critical access policies across
            every Lotly tenant.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Invite admin
          </button>
          <button className={styles.actionButton} type="button">
            Reset password
          </button>
          <button className={styles.actionButton} type="button">
            Export access log
          </button>
        </div>
      </header>
      {error && <p className={styles.subtitle}>{error}</p>}
      {lotlyAdmins.length > 0 && (
        <div className={styles.panelGrid}>
          {lotlyAdmins.map((admin) => (
            <div key={admin.id} className={styles.panel}>
              <p className={styles.panelTitle}>
                {admin.first_name || admin.last_name
                  ? `${admin.first_name ?? ""} ${admin.last_name ?? ""}`.trim()
                  : "Lotly Admin"}
              </p>
              <p className={styles.panelBody}>
                {adminEmails[admin.user_id] ?? "No email"}
              </p>
              <p className={styles.panelBody}>Title: {admin.title ?? "—"}</p>
              <p className={styles.panelBody}>Status: {admin.status ?? "—"}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
