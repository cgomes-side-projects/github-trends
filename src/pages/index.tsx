import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub Trends</title>
        <meta name="description" content="github trends and favorites" />
      </Head>

      <div className="container">
        <h1>📈 Trends</h1>
      </div>
    </>
  );
}
