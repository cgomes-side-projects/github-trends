import Head from 'next/head';

export default function favorites() {
  return (
    <>
      <Head>
        <title>Favorites - GitHub Trends</title>
        <meta name="description" content="My personal github favorites repositories" />
      </Head>

      <div className="container">
        <h1>♥️ Favorites</h1>
      </div>
    </>
  );
}
