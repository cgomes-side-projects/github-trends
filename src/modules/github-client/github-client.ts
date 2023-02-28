import { useQuery } from 'react-query';
import { dateToISO8601 } from '../helpers/dateFormat';
import { getClient } from './get-client';

/** How many days old we want to search for repositories */
const DAYS_OLD = 7;

let client: ReturnType<typeof getClient>;

/**
 * Fetch the repos created within the last 7 days ordered by Stars count
 */
export async function fetchTrendingRepos() {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - DAYS_OLD);
  const sevenDaysAgo = dateToISO8601(startDate);
  const dateFilter = `created:${sevenDaysAgo}`;

  client ??= getClient();
  const res = await client.search.repos({
    q: dateFilter,
    sort: 'stars',
    per_page: 25,
    headers: {},
  });

  return res.data;
}

export const useTrendingRepos = () => useQuery('trendingRepos', fetchTrendingRepos);

type UnwrapArray<T> = T extends Array<infer U> ? U : T;
type FetchTrendingReposResult = Awaited<ReturnType<typeof fetchTrendingRepos>>;
export type TrendRepo = UnwrapArray<FetchTrendingReposResult['items']>;
