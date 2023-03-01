/**
 * Represents a Github repository within this App with only used props
 * This will be stored in the localStorage, so the amount of data matters.
 */
export type Repository = {
  /** The Github unique ID */
  id: number;
  /** The Owner login or a Team Name */
  owner: string;
  /** The Repository name */
  name: string;
  /** The Repository description */
  description: string;
  /** The Github URL for this project */
  url: string;
  /** The number of star this repository has */
  starsCount: number;
  /** The number of Forks this repository has */
  forksCount: number;
  /** The most used language in this repository */
  language: string;
};

export type StoredRepos = Record<number, Repository>;

/**
 * This is the state value of the Favorite Store
 * It holds the list of favorites as objects
 * And is supposed to be stored in the LocalStorage
 */
export type FavoriteStoreValue = {
  storedRepos: StoredRepos;
  addRepo(repo: Repository): void;
  removeRepo(repoId: number): void;
  isStared(repoId: number): boolean;
};
