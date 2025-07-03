import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
