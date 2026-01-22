import styles from "../section.module.css";

const panels = [
  {
    title: "Environment",
    body: "Production cluster · 12 regions · 3 failover zones.",
  },
  {
    title: "Release gates",
    body: "Feature flags at 72% rollout. Next release in 4 days.",
  },
  {
    title: "Data retention",
    body: "Retention policies comply with 100% of regulatory SLAs.",
  },
];

export default function SystemPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>System Settings</h2>
          <p className={styles.subtitle}>
            Global configuration, environment health, and compliance windows.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Adjust release gates
          </button>
          <button className={styles.actionButton} type="button">
            Schedule backup
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
