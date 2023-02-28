import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.logo}>VEED.IO</div>

        <nav className={styles.nav} role="navigation">
          <span>
            <Link href="/">Trends</Link>
          </span>
          <span>
            <Link href="/favorites">Favorites</Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
