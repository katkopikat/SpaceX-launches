import styled from 'styled-components';
import Header from './Header';
import Head from "next/head";
const MainContainer = ({children}) => {
    return (
    <>
      <Head>
          <title>SpaceX | Launches</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="SpaceX | Launches" />
          <meta property="og:description" content="This is an application that shows a list of all SpaceX launches." key="description" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <div>
            {children}
        </div>
    </>
    );
};

export default MainContainer;