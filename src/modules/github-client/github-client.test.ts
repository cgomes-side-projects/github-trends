import { fetchTrendingRepos } from './github-client';
import { fromGithubToLocalRepository } from '../Store/FavoritesStore/normalizeRepository';
import { getClient } from './get-client';

jest.mock('./get-client');
jest.mock('../Store/FavoritesStore/normalizeRepository');

jest.useFakeTimers().setSystemTime(new Date('2023-01-08'));

test('should call the github client with right values', async () => {
  await fetchTrendingRepos();

  expect((getClient as any).reposMock).toHaveBeenCalledWith({
    q: 'created:2023-01-01',
    sort: 'stars',
    per_page: 25,
    headers: {},
  });
});

test('should call the normalizer function', async () => {
  await fetchTrendingRepos();
  expect(fromGithubToLocalRepository).toHaveBeenCalled();
});
