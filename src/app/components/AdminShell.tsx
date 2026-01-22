"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import styles from "../admin-shell.module.css";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

type AdminShellProps = {
  children: ReactNode;
};

export default function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  if (isLogin) {
    return <div className={styles.content}>{children}</div>;
  }

  return (
    <div className={styles.shell}>
      <AdminSidebar />
      <div className={styles.main}>
        <AdminTopbar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
