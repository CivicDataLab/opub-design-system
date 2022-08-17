import React from 'react';
import Head from 'next/head';
import '../styles.css';
import { DesignSystemProvider } from '../components/DesignSystemProvider';

function App({ Component, pageProps }) {
  return (
    <DesignSystemProvider>
      <div>
        <Head>
          <title>Design System</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <Component {...pageProps} />
      </div>
    </DesignSystemProvider>
  );
}

export default App;
