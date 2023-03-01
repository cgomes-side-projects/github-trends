import Head from 'next/head';
import { useEffect } from 'react';
import { useTrendingRepos } from '../modules/github-client';
import Filters from '../modules/ReposList/Filters';
import ReposList from '../modules/ReposList/ReposList';
import { useRepositoriesStore } from '../modules/Store/RepositoriesStore';

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub Trends</title>
        <meta name="description" content="github trends and favorites" />
      </Head>

      <div className="container">
        <h1>📈 Trends</h1>
        <ListWithState />
      </div>
    </>
  );
}

function ListWithState() {
  const { isLoading, error, data = [], isFetched } = useTrendingRepos();
  const setFetchedRepositories = useRepositoriesStore((s) => s.setFetchedRepositories);
  const repositories = useRepositoriesStore((s) => s.repositories);

  useEffect(() => {
    if (isFetched && !error) {
      setFetchedRepositories(data);
    }
  }, [isFetched, data, setFetchedRepositories, error]);

  if (error || isLoading || !isFetched) {
    return null;
  }

  return (
    <ReposList repos={repositories}>
      <Filters />
    </ReposList>
  );
}
