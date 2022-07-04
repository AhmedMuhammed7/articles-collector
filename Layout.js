import React from 'react'
import Head from "next/head";
const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Articles Collector</title>
        <meta name="description" content="Articles Collector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default Layout