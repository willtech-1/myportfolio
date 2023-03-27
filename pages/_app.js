import "../styles/globals.css";
// import next script
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* google analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2ZVNBGHNMD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2ZVNBGHNMD');
  `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
