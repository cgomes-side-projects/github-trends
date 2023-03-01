import type { ReactNode } from 'react';
import type { Repository } from '../Store/FavoritesStore/FavoriteStore.types';
import FavoriteButton from './FavoriteButton';
import styles from './ReposList.module.scss';

type ReposListProps = {
  className?: string;
  repos: Repository[];
  children?: ReactNode;
};

export default function ReposList({ className, repos, children }: ReposListProps) {
  return (
    <ul className={`${className} ${styles.list}`}>
      {children && (
        <>
          <li>{children}</li>
        </>
      )}
      {repos.map((repo) => (
        <li key={repo.id} className={styles.item}>
          <header className={styles.header}>
            <h3>
              📘{' '}
              <a href={repo.url} target="_blank">
                {repo.owner} / {repo.name}
              </a>
            </h3>
            <div>
              <FavoriteButton repo={repo} />
            </div>
          </header>
          <p className={styles.description}>{repo.description}</p>
          <div className={styles.stats}>
            <span title="Number of stars">☆ {repo.starsCount}</span>
            <span title="Number of forks">⫚ {repo.forksCount}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
