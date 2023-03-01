import { useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useRepositoriesStore } from '../Store/RepositoriesStore';

export function useFilters() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const { languages, fetchedRepositories, setRepositories, repositories } = useRepositoriesStore(
    (s) => ({
      languages: s.languages.filter((l) => !selectedLanguages.includes(l)),
      fetchedRepositories: s.fetchedRepositories,
      repositories: s.repositories,
      setRepositories: s.setRepositories,
    }),
    shallow,
  );

  const handleSelectLanguage = (lang: string) => {
    setSelectedLanguages((prev) => [...prev, lang]);
  };

  const handleRemoveLanguage = (lang: string) => {
    setSelectedLanguages((prev) => prev.filter((l) => l !== lang));
  };

  useEffect(() => {
    const newRepos = !selectedLanguages.length
      ? [...fetchedRepositories]
      : fetchedRepositories.filter(({ language }) => {
          return selectedLanguages.includes(language);
        });

    setRepositories(newRepos);
  }, [fetchedRepositories, selectedLanguages, setRepositories]);

  return {
    selectedLanguages,
    languages,
    handleSelectLanguage,
    handleRemoveLanguage,
    totalCount: fetchedRepositories.length,
    currentCount: repositories.length,
  };
}
