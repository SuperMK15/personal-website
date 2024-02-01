import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";

import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head title={`Manasva Katyal | ${pageProps.title}`} />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
