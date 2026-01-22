import styles from "./page.module.css";

const statCards = [
  { label: "Active accounts", value: "62", trend: "+3" },
  { label: "Total sites", value: "182", trend: "+6" },
  { label: "Storage used", value: "74 TB", trend: "+4%" },
  { label: "Billing health", value: "99.4%", trend: "stable" },
];

const watchlist = [
  {
    title: "New account onboarding",
    detail: "5 tenants waiting on billing owner setup",
    status: "Action",
  },
  {
    title: "Payment follow-up",
    detail: "3 accounts at risk of suspension",
    status: "Review",
  },
  {
    title: "Data throughput",
    detail: "Read/write volume up 12% this week",
    status: "Monitor",
  },
];

export default function AdminDashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.hero}>
        <div>
          <p className={styles.heroKicker}>Admin overview</p>
          <h2 className={styles.heroTitle}>Operational pulse across Lotly</h2>
          <p className={styles.heroBody}>
            Create new accounts, manage admin access, and keep billing and usage
            signals clean. Every action here impacts every tenant.
          </p>
        </div>
        <div className={styles.heroPanel}>
          <p className={styles.panelLabel}>Admin on-call</p>
          <p className={styles.panelValue}>Samantha Rivera</p>
          <div className={styles.panelMeta}>
            Next window starts in 2h · Escalation tier A
          </div>
        </div>
      </div>

      <div className={styles.statGrid}>
        {statCards.map((card) => (
          <div key={card.label} className={styles.statCard}>
            <p className={styles.statLabel}>{card.label}</p>
            <div className={styles.statValue}>{card.value}</div>
            <p className={styles.statTrend}>{card.trend}</p>
          </div>
        ))}
      </div>

      <div className={styles.split}>
        <div className={styles.sectionCard}>
          <h3>Priority watchlist</h3>
          <p className={styles.sectionBody}>
            Signals needing executive attention this cycle.
          </p>
          <div className={styles.list}>
            {watchlist.map((item) => (
              <div key={item.title} className={styles.listItem}>
                <div>
                  <p className={styles.listTitle}>{item.title}</p>
                  <p className={styles.listDetail}>{item.detail}</p>
                </div>
                <span className={styles.badge}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sectionCard}>
          <h3>Control actions</h3>
          <p className={styles.sectionBody}>
            Quick actions with platform-wide impact.
          </p>
          <div className={styles.actions}>
            <button className={styles.actionButton} type="button">
              Activate new account
            </button>
            <button className={styles.actionButton} type="button">
              Pause delinquent account
            </button>
            <button className={styles.actionButton} type="button">
              Trigger usage report
            </button>
          </div>
          <div className={styles.actionFoot}>
            Last global action applied 6 hours ago.
          </div>
        </div>
      </div>
    </section>
  );
}
