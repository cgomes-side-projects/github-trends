import Head from 'next/head';
import { useTrendingRepos } from '../modules/github-client';
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
  const { isLoading, error, data } = useTrendingRepos();

  if (error || isLoading) {
    return null;
  }

  return <ReposList repos={data?.items!} />;
}
