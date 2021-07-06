import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const MainLayout = ({ children, title = "SpaceX | Launches" }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content="SpaceX | Launches" />
				<meta
					name="description"
					content="This is an application that shows a list of all SpaceX launches."
				/>
				<meta
					name="keywords"
					content="space, spaceX, universe, Mars, Ilon Mask, planet, launche. sciense"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default MainLayout;

const Main = styled.main`
	margin: 0 auto;
	width: 90vw;
`;
