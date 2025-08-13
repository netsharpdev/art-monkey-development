import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/artmonkey.scss";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-HS0WDJ8092`}
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'G-HS0WDJ8092', { page_path: window.location.pathname });
      `}</Script>
      <Component {...pageProps} />
    </>
  );
}