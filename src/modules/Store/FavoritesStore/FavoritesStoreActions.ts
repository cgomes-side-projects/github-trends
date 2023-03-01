import type { Repository, StoredRepos } from './FavoriteStore.types';

export function addRepo(repo: Repository, storedRepos: StoredRepos): StoredRepos {
  if (repo.id in storedRepos) {
    return storedRepos;
  }

  return {
    ...storedRepos,
    [repo.id]: repo,
  };
}

export function removeRepo(id: number, storedRepos: StoredRepos): StoredRepos {
  delete storedRepos[id];

  return {
    ...storedRepos,
  };
}
