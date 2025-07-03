import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R0WW1RW0XF"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R0WW1RW0XF', {
                cookie_domain: 'replyke.com'
              });
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
