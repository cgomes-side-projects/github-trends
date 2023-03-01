import type { Repository } from '../FavoritesStore/FavoriteStore.types';

export type RepositoriesStoreValue = {
  /** a list of languages from the fetched repositories */
  languages: string[];
  /** replace the list of languages available */
  setLanguages(langs: string[]): void;
  /** The actual list of repositories after filtering */
  repositories: Repository[];
  setRepositories(repos: Repository[]): void;
  /**
   * The list of fetched repositories without filtering.
   * Can be used to clear the filters and restore the original results
   */
  fetchedRepositories: Repository[];
  setFetchedRepositories(repos: Repository[]): void;
};
