import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import "../public/css/plugins.css";
import "../public/css/style.css?ver=1.1";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
