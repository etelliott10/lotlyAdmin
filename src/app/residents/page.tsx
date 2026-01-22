import styles from "../section.module.css";

const panels = [
  {
    title: "Resident experience",
    body: "CSAT holding at 4.8 with two regions trending upward.",
  },
  {
    title: "Care plans",
    body: "118 care plans require quarterly review sign-off.",
  },
  {
    title: "Wellness signals",
    body: "Daily engagement at 87%, with 14 alerts in follow-up queues.",
  },
];

export default function ResidentsPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Residents</h2>
          <p className={styles.subtitle}>
            Track resident satisfaction, care plan adherence, and wellness
            activity across the platform.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Review alerts
          </button>
          <button className={styles.actionButton} type="button">
            Export wellness data
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
