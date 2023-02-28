import type { ReactNode } from 'react';

import styles from './FavoriteButton.module.scss';

type FavoriteButtonProps = {
  className?: string;
  onClick?(): void;
};

export default function FavoriteButton({ className, onClick }: FavoriteButtonProps) {
  // TODO start / un-star
  return (
    <button className={`${styles.root} ${className}`} onClick={onClick}>
      <i aria-hidden="true">☆ ★</i>
      <label>Star</label>
    </button>
  );
}
