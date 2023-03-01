import Head from 'next/head';
import Link from 'next/link';
import ReposList from '../modules/ReposList/ReposList';
import { useFavoriteStore } from '../modules/Store/FavoritesStore';

import styles from '../styles/favoritesPage.module.scss';

export default function favorites() {
  return (
    <>
      <Head>
        <title>Favorites - GitHub Trends</title>
        <meta name="description" content="My personal github favorites repositories" />
      </Head>

      <div className="container">
        <h1>♥️ Favorites</h1>
        <ListWithState />
      </div>
    </>
  );
}

function ListWithState() {
  const storedRepos = useFavoriteStore((state) => Object.values(state.storedRepos));

  if (!storedRepos.length) {
    return (
      <section className={styles.noFavorites}>
        <h3>You have no Favorites yet.</h3>
        <p>
          Go to our <Link href="/">Trends</Link> page and start adding some!
        </p>
      </section>
    );
  }

  return <ReposList repos={storedRepos} />;
}
