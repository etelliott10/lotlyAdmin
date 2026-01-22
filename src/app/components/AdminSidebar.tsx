"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./AdminSidebar.module.css";
import { navSections } from "../lib/nav";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    () =>
      navSections.reduce(
        (acc, section) => ({ ...acc, [section.title]: false }),
        {} as Record<string, boolean>,
      ),
  );

  const activeSection = useMemo(() => {
    for (const section of navSections) {
      if (section.items.some((item) => item.href === pathname)) {
        return section.title;
      }
    }
    return null;
  }, [pathname]);

  useEffect(() => {
    if (!activeSection) return;
    setExpandedSections((prev) =>
      prev[activeSection] ? prev : { ...prev, [activeSection]: true },
    );
  }, [activeSection]);

  const handleSignOut = () => {
    sessionStorage.removeItem("lotly_admin_access_token");
    sessionStorage.removeItem("lotly_access_token");
    router.push("/login");
  };

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.mobileHeader}>
        <div className={styles.brand}>
          <div className={styles.logo}>LA</div>
          <div>
            <p className={styles.title}>Lotly Admin</p>
            <p className={styles.subtitle}>Platform control</p>
          </div>
        </div>
        <div className={styles.mobileNav}>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="admin-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuLabel}>Menu</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={styles.menuIcon}
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            id="admin-mobile-menu"
            className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
          >
            <div className={styles.mobileHealth}>
              <span className={styles.statusDot} />
              <div>
                <p className={styles.statusLabel}>System Health</p>
                <p className={styles.statusValue}>Stable · 99.98% uptime</p>
              </div>
            </div>
            {navSections.map((section) => (
              <div key={section.title} className={styles.mobileSection}>
                <button
                  type="button"
                  className={styles.sectionToggle}
                  onClick={() => toggleSection(section.title)}
                >
                  <span className={styles.sectionTitleText}>{section.title}</span>
                  <span
                    className={`${styles.chevron} ${
                      expandedSections[section.title] ? styles.chevronOpen : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {expandedSections[section.title] && (
                  <div className={styles.mobileSectionItems}>
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`${styles.mobileLink} ${isActive ? styles.active : ""}`}
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className={styles.linkLabel}>{item.label}</span>
                          <span className={styles.linkMeta}>{item.description}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <button
              className={styles.mobileSignOut}
              type="button"
              onClick={() => {
                setMenuOpen(false);
                handleSignOut();
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
      <div className={styles.status}>
        <span className={styles.statusDot} />
        <div>
          <p className={styles.statusLabel}>System Health</p>
          <p className={styles.statusValue}>Stable · 99.98% uptime</p>
        </div>
      </div>
      <nav className={styles.nav}>
        {navSections.map((section) => (
          <div key={section.title} className={styles.section}>
            <button
              type="button"
              className={styles.sectionToggle}
              onClick={() => toggleSection(section.title)}
            >
              <span className={styles.sectionTitleText}>{section.title}</span>
              <span
                className={`${styles.chevron} ${
                  expandedSections[section.title] ? styles.chevronOpen : ""
                }`}
              >
                ▾
              </span>
            </button>
            {expandedSections[section.title] && (
              <div className={styles.sectionItems}>
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${styles.link} ${isActive ? styles.active : ""}`}
                    >
                      <span className={styles.linkLabel}>{item.label}</span>
                      <span className={styles.linkMeta}>{item.description}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className={styles.footer}>
        <p>Security tier: Admin</p>
        <button className={styles.footerButton} type="button" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </aside>
  );
}
