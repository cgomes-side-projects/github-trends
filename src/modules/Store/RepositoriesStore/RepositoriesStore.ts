import { create } from 'zustand';
import type { RepositoriesStoreValue } from './RepositoriesStore.types';

export const useRepositoriesStore = create<RepositoriesStoreValue>((set, get) => ({
  languages: [],
  repositories: [],
  fetchedRepositories: [],
  setLanguages(languages) {
    set({ languages });
  },
  setRepositories(repositories) {
    set({ repositories });
  },
  setFetchedRepositories(fetchedRepositories) {
    set({
      fetchedRepositories,
      repositories: fetchedRepositories,
      languages: fetchedRepositories.map((repo) => repo.language),
    });
  },
}));
