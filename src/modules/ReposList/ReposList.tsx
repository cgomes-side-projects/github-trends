import { TrendRepo } from '../github-client';
import FavoriteButton from './FavoriteButton';
import styles from './ReposList.module.scss';

type ReposListProps = {
  className?: string;
  repos: TrendRepo[];
};

export default function ReposList({ className, repos }: ReposListProps) {
  return (
    <ul className={`${className} ${styles.list}`}>
      {repos.map((repo) => (
        <li key={repo.id} className={styles.item}>
          <header className={styles.header}>
            <h3>
              📘{' '}
              <a href={repo.html_url} target="_blank">
                {repo.owner?.login} / {repo.name}
              </a>
            </h3>
            <div>
              <FavoriteButton repoId={repo.id} />
            </div>
          </header>
          <p className={styles.description}>{repo.description}</p>
          <div className={styles.stats}>
            <span title="Number of stars">☆ {repo.stargazers_count}</span>
            <span title="Number of forks">⫚ {repo.forks_count}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
