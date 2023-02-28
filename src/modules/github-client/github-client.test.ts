import { fetchTrendingRepos } from './github-client';

jest.mock('./get-client');

jest.useFakeTimers().setSystemTime(new Date('2023-01-08'));

test('should call the github client with right values', async () => {
  const reposMock = await fetchTrendingRepos();

  expect(reposMock).toHaveBeenCalledWith({
    q: 'created:2023-01-01',
    sort: 'stars',
    per_page: 25,
    headers: {},
  });
});
