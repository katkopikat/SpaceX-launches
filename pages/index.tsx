import Head from 'next/head'
import styled from 'styled-components';

const Heading = styled.h1`
  color: green;
  font-size: 40px;
  text-align: center;
`;

 const Home: React.FC = () => {
  return (
    <div>
      <Heading>SpaceX launches</Heading>
      <Head>
        <title>SpaceX launches</title>
        <meta name="description" content="SpaceX launches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home;

