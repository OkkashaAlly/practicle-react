import Head from "next/head";
// styling
import "../styles/globals.css";

// imports

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Practicle React</title>
        <meta name="title" content="Metarootz — List, Trade and Earn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  );
};

export default MyApp;
