import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Hashtag 404</title>
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;
