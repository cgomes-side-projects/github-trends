import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../modules/Template/Header';

import '@/styles/globals.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

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
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </main>
      </div>
    </>
  );
}
