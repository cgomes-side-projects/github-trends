import { useFavoriteStore } from '../Store/FavoritesStore';
import { shallow } from 'zustand/shallow';

import styles from './FavoriteButton.module.scss';
import type { Repository } from '../Store/FavoritesStore/FavoriteStore.types';

type FavoriteButtonProps = {
  className?: string;
  repo: Repository;
};

export default function FavoriteButton({ className, repo }: FavoriteButtonProps) {
  const repoId = repo.id;

  const { isStarred, addRepo, removeRepo } = useFavoriteStore(
    (state) => ({
      isStarred: state.isStared(repoId),
      addRepo: state.addRepo,
      removeRepo: state.removeRepo,
    }),
    shallow,
  );

  const toggleStar = () => (isStarred ? removeRepo(repoId) : addRepo(repo));

  return (
    <button
      className={`${styles.root} ${className} ${isStarred ? styles.starred : ''}`}
      onClick={toggleStar}
    >
      <i aria-hidden="true">{isStarred ? '★' : '☆'}</i>
      <label>{isStarred ? 'Starred' : 'Star'}</label>
    </button>
  );
}
