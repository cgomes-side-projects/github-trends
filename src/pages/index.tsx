import Head from 'next/head';
import { useTrendingRepos } from '../modules/github-client';
import Filters from '../modules/ReposList/Filters';
import ReposList from '../modules/ReposList/ReposList';

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

  if (error || isLoading || !isFetched) {
    return null;
  }

  return (
    <ReposList repos={data}>
      <Filters />
    </ReposList>
  );
}
