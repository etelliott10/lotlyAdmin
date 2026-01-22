import styles from "../section.module.css";

const panels = [
  {
    title: "Revenue capture",
    body: "$4.2M billed this cycle with 1.2% variance.",
  },
  {
    title: "Payment status",
    body: "Flag delinquent accounts and auto-notify billing owners.",
  },
  {
    title: "Account activation",
    body: "Activate or pause accounts based on payment completion.",
  },
  {
    title: "Write-off queue",
    body: "18 accounts pending approval for write-off.",
  },
];

export default function BillingPage() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>Billing Control</h2>
          <p className={styles.subtitle}>
            Stay ahead of revenue flows, collections, and payment performance.
          </p>
        </div>
        <div className={styles.actionRow}>
          <button className={styles.actionButton} type="button">
            Run reconciliation
          </button>
          <button className={styles.actionButton} type="button">
            Export revenue
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
