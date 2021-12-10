import "../styles/globals.css";
import { AppProvider } from "../context/AppContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
