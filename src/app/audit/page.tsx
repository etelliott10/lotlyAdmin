import styles from "../section.module.css";

const panels = [
  {
    title: "Audit feed",
    body: "42 critical events logged in the last 24 hours.",
  },
  {
    title: "Data exports",
    body: "6 exports generated with privileged access.",
  },
  {
    title: "Compliance flags",
    body: "2 anomalies awaiting legal review.",
  },
];

export default function AuditPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Audit Log</h2>
          <p className={styles.subtitle}>
            Track sensitive events, exports, and policy breaches across Lotly.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Filter events
          </button>
          <button className={styles.actionButton} type="button">
            Export report
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
