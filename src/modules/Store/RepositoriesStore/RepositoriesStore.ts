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
    const langSet = new Set<string>();
    fetchedRepositories.forEach(({ language }) => {
      if (language) {
        langSet.add(language);
      }
    });

    set({
      fetchedRepositories,
      repositories: fetchedRepositories,
      languages: Array.from(langSet),
    });
  },
}));
