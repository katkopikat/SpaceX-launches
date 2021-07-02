import Head from 'next/head'
import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import React, { Fragment } from 'react';

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #0e0d0d;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


 const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer>
        <Head>
          <title>SpaceX launches</title>
          <meta name="description" content="This is an application that shows a list of all SpaceX launches." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </MainContainer>
    </Fragment>
  )
}

export default App;

