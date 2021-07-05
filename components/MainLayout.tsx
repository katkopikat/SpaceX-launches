import Head from "next/head";
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from "../styles/global";
import styled from "styled-components";

const Main = styled.main`
	margin: 0 auto;
`;

const MainLayout = ({children, title = "SpaceX | Launches"}) => {
    return (
    <>
      <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="SpaceX | Launches" />
          <meta name="description" content="This is an application that shows a list of all SpaceX launches." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
        <GlobalStyle />
    </>
    );
};

export default MainLayout;