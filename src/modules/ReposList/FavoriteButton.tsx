import { useFavoriteStore } from '../Store/FavoritesStore';
import { shallow } from 'zustand/shallow';

import styles from './FavoriteButton.module.scss';

type FavoriteButtonProps = {
  className?: string;
  repoId: number;
};

export default function FavoriteButton({ className, repoId }: FavoriteButtonProps) {
  const { isStarred, addRepo, removeRepo } = useFavoriteStore(
    (state) => ({
      isStarred: state.storedIds.some((id) => id === repoId),
      addRepo: state.addRepo,
      removeRepo: state.removeRepo,
    }),
    shallow,
  );

  const toggleStar = () => (isStarred ? removeRepo(repoId) : addRepo(repoId));

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
