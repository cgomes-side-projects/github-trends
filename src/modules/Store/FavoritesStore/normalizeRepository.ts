import type { GithubRepository } from '../../github-client';
import type { Repository } from './FavoriteStore.types';

/**
 * Normalizes the data received from Github API to a smaller local version
 * Which will latter be stored in localStore
 */
export function fromGithubToLocalRepository(ghRepo: GithubRepository): Repository {
  const [owner, name] = ghRepo.full_name.split('/');

  return {
    id: ghRepo.id,
    owner,
    name,
    description: ghRepo.description ?? '',
    url: ghRepo.html_url,
    starsCount: ghRepo.stargazers_count,
    forksCount: ghRepo.forks_count,
  };
}
