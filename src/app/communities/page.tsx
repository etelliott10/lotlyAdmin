import styles from "../section.module.css";

const panels = [
  {
    title: "Portfolio snapshot",
    body: "182 communities live, 5 in onboarding, 2 paused for audit.",
  },
  {
    title: "Occupancy shifts",
    body: "Net +1.4% occupancy month-over-month across all regions.",
  },
  {
    title: "Care quality",
    body: "9 communities flagged for staffing or compliance follow-up.",
  },
];

export default function CommunitiesPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Communities</h2>
          <p className={styles.subtitle}>
            Monitor the portfolio health, regional trends, and community-level
            escalations.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Add community
          </button>
          <button className={styles.actionButton} type="button">
            Download roster
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
