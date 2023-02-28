import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/">GH Trends</Link>
        </div>

        <nav className={styles.nav} role="navigation">
          <span>
            <Link href="/">📈 Trends</Link>
          </span>
          <span>|</span>
          <span>
            <Link href="/favorites">🤍 Favorites</Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
