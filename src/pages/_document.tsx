import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="alternate icon"
          type="image/png"
          href="https://github.githubassets.com/favicons/favicon.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#24292f" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
