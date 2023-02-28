import { create } from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';
import { addRepo, removeRepo } from './FavoritesStoreActions';

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

export type FavoriteStoreValue = {
  storedIds: number[];
  addRepo(id: number): void;
  removeRepo(id: number): void;
};

const favoriteStoreFactoryPersisted = persist<FavoriteStoreValue>(
  (set, get): FavoriteStoreValue => ({
    storedIds: [],
    addRepo(id) {
      set({
        storedIds: addRepo(id, get().storedIds),
      });
    },
    removeRepo(id) {
      set({
        storedIds: removeRepo(id, get().storedIds),
      });
    },
  }),
  {
    name: STORAGE_KEY,
    getStorage: () => getStorageImplementation(),
  },
);

export const useFavoriteStore = create(favoriteStoreFactoryPersisted);
