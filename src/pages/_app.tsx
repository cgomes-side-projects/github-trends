import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../modules/Template/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GitHub Trends</title>
        <meta name="description" content="github trends and favorites" />
      </Head>
      <div className="app">
        <Header />
        <main className="app-main">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
