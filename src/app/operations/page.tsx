import styles from "../section.module.css";

const panels = [
  {
    title: "Incident bridge",
    body: "Open a cross-team bridge and broadcast to all regional leads.",
  },
  {
    title: "Compliance sweep",
    body: "Schedule audit checks across communities with overdue tasks.",
  },
  {
    title: "Service windows",
    body: "Coordinate maintenance windows without disrupting care cycles.",
  },
];

export default function OperationsPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Operations Command</h2>
          <p className={styles.subtitle}>
            Apply platform-wide controls, escalate incidents, and align the
            regional cadence.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Start incident
          </button>
          <button className={styles.actionButton} type="button">
            Broadcast update
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
