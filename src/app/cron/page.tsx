import styles from "../section.module.css";

const panels = [
  {
    title: "Job catalog",
    body: "Define scheduled jobs for billing sync, reports, and cleanup.",
  },
  {
    title: "Run history",
    body: "Review recent job executions, runtime, and failure alerts.",
  },
  {
    title: "Automation rules",
    body: "Trigger notifications when jobs exceed thresholds or retries.",
  },
];

export default function CronPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Cron & Automation</h2>
          <p className={styles.subtitle}>
            Configure recurring jobs, schedule maintenance workflows, and manage
            automated tasks across all accounts.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Create cron job
          </button>
          <button className={styles.actionButton} type="button">
            Run job now
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
