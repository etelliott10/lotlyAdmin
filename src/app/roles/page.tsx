import styles from "../section.module.css";

const panels = [
  {
    title: "Role inventory",
    body: "14 admin roles with 38 custom permission sets.",
  },
  {
    title: "Policy changes",
    body: "5 pending policy edits awaiting approval.",
  },
  {
    title: "Privilege drift",
    body: "2 roles exceed least-privilege guidelines.",
  },
];

export default function RolesPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Roles & Policies</h2>
          <p className={styles.subtitle}>
            Define access boundaries and maintain consistent policy enforcement.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Create role
          </button>
          <button className={styles.actionButton} type="button">
            Review policies
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
