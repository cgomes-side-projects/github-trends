import type { RestEndpointMethodTypes } from '@octokit/rest';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { dateToISO8601 } from '../helpers/dateFormat';
import type { Repository } from '../Store/FavoritesStore/FavoriteStore.types';
import { fromGithubToLocalRepository } from '../Store/FavoritesStore/normalizeRepository';
import { getClient } from './get-client';

/** How many days old we want to search for repositories */
const DAYS_OLD = 7;

let client: ReturnType<typeof getClient>;

/**
 * Fetch the repos created within the last 7 days ordered by Stars count
 */
export async function fetchTrendingRepos({
  language,
}: {
  language: string | string[] | undefined;
}): Promise<Repository[]> {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - DAYS_OLD);
  const sevenDaysAgo = dateToISO8601(startDate);
  let q = `created:${sevenDaysAgo}`;

  if (language) {
    q += ` language:${language}`;
  }

  client ??= getClient();
  const res = await client.search.repos({
    q,
    sort: 'stars',
    per_page: 25,
    headers: {},
  });

  return res.data.items.map(fromGithubToLocalRepository);
}

export const useTrendingRepos = () => {
  const { query, isReady } = useRouter();
  return useQuery('trendingRepos', () => fetchTrendingRepos({ language: query.lang }), {
    enabled: isReady,
  });
};

type UnwrapArray<T> = T extends Array<infer U> ? U : T;
export type GithubRepository = UnwrapArray<
  RestEndpointMethodTypes['search']['repos']['response']['data']['items']
>;
