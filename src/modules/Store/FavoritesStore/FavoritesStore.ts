import { create } from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';
import { addRepo, removeRepo } from './FavoritesStoreActions';
import type { FavoriteStoreValue } from './FavoriteStore.types';

/**
 * Wrapper for SSR, as localStorage isn't available at NextJS build time.
 */
function getStorageImplementation(): StateStorage {
  if (typeof window === 'undefined') {
    return {
      getItem: () => null,
      setItem: () => undefined,
      removeItem: () => undefined,
    };
  }

  return localStorage;
}

/**
 * Key used to store the data in the local storage
 */
export const STORAGE_KEY = 'FavoriteStore';

const favoriteStoreFactoryPersisted = persist<FavoriteStoreValue>(
  (set, get): FavoriteStoreValue => ({
    storedRepos: {},
    addRepo(repo) {
      set({
        storedRepos: addRepo(repo, get().storedRepos),
      });
    },
    removeRepo(repoId) {
      set({
        storedRepos: removeRepo(repoId, get().storedRepos),
      });
    },
    isStared(repoId) {
      return repoId in get().storedRepos;
    },
  }),
  {
    name: STORAGE_KEY,
    getStorage: () => getStorageImplementation(),
  },
);

export const useFavoriteStore = create(favoriteStoreFactoryPersisted);
