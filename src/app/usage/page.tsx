import styles from "../section.module.css";

const panels = [
  {
    title: "Account totals",
    body: "Active accounts, total sites, and plan tier distribution.",
  },
  {
    title: "Storage consumption",
    body: "Monitor storage used per tenant and alert on threshold breaches.",
  },
  {
    title: "Read/Write activity",
    body: "Daily, weekly, and monthly read/write operations across the stack.",
  },
];

export default function UsagePage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Usage & Telemetry</h2>
          <p className={styles.subtitle}>
            Track accounts, sites, storage usage, and read/write activity over
            time to protect performance and capacity.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Export usage
          </button>
          <button className={styles.actionButton} type="button">
            Set alerts
          </button>
        </div>
      </header>
      <div className={styles.panelGrid}>
        {panels.map((panel) => (
          <div key={panel.title} className={styles.panel}>
            <p className={styles.panelTitle}>{panel.title}</p>
            <p className={styles.panelBody}>{panel.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
