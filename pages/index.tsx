import Head from 'next/head'
import styled from 'styled-components';
// import MainContainer from '../components/MainContainer';
import React, { Fragment } from 'react';
import Header from '../components/Header';
import { createGlobalStyle } from "styled-components";
import MainContainer from '../components/MainContainer';

import Launches from '../components/Launches';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #0e0d0d;
    // font-family: Open-Sans, Helvetica, Sans-Serif;
    font-family: 'Roboto', sans-serif;
    color: white;
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const GET_ALL_LAUNCHES = 'https://api.spacexdata.com/v4/launches/query';

 const App = ({ launches }) => {
   console.log(launches)
  return (
    <Fragment>
      <GlobalStyle />
      <MainContainer />
      <Launches launches={launches}/>   
    </Fragment>
  )
}

export default App;

export async function getStaticProps() {

  // const optionsBody = 
  //   {
  //     options: {
  //       select: 'name details',
  //       limit: 2,
  //       page: 10
  //     },
  // };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    // body: JSON.stringify(optionsBody)
  };

  const response = await fetch(GET_ALL_LAUNCHES, requestOptions)
  const launches = await response.json()

  return {
      props: {launches},
  }
}

