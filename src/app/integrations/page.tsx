import styles from "../section.module.css";

const panels = [
  {
    title: "Connected systems",
    body: "7 external systems active with 2 pending renewals.",
  },
  {
    title: "API health",
    body: "All integrations responding under 180ms latency.",
  },
  {
    title: "Data sync",
    body: "Next scheduled sync: 15 minutes from now.",
  },
];

export default function IntegrationsPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Integrations</h2>
          <p className={styles.subtitle}>
            Manage external services, API connections, and data exchange health.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Add integration
          </button>
          <button className={styles.actionButton} type="button">
            Review webhooks
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
