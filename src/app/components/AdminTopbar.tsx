import styles from "./AdminTopbar.module.css";

export default function AdminTopbar() {
  return (
    <header className={styles.topbar}>
      <div>
        <p className={styles.kicker}>Global Admin</p>
        <h1 className={styles.heading}>Lotly Control Center</h1>
      </div>
      <div className={styles.actions}>
        <button className={styles.ghost} type="button">
          Deploy update
        </button>
        <button className={styles.primary} type="button">
          Create alert
        </button>
      </div>
    </header>
  );
}
