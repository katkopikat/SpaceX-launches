import Head from 'next/head'
import styled from 'styled-components';
import Launch from '../components/launch';
import MainContainer from '../components/MainContainer';
// import GlobalStyle from '../components/GlobalStyle';
import React, { Fragment } from 'react';

import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: red;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
const Heading = styled.h1`
  color: green;
  font-size: 40px;
  text-align: center;
`;

 const App = () => {
  return (
    <Fragment>
      <GlobalStyle />

      <MainContainer>
        <Heading>SpaceX launches</Heading>
        {/* <Launch /> */}
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

