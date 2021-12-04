import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@picocss/pico/css/pico.min.css";

const PsychologicalTestApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Psychological test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default PsychologicalTestApp;
