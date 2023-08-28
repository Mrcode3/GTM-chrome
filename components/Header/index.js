import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      <div className={styles.headerlinks}>
        <img src="/refresh.png" alt="refresh" />
        <img src="/bell.png" alt="notification" />
        <img src="/menu.png" alt="menu" />
      </div>
    </div>
  );
}
