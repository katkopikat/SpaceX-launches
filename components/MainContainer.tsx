
import Link from "next/link";
import Image from "next/dist/client/image";
import styled from 'styled-components';

const Header = styled.header`
background-image: url(/spacex.jpg);
background-size: cover;
height: 60vh;
background-position-y: center;
color: white;
position: relative;

&:before {
    height: 60vh;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
    content: "";
    background: linear-gradient(180deg,rgba(0,0,0,.81) 0,rgba(0,0,0,.61) 58%,transparent);
  }
`;

const HeaderContent = styled.div`
  position: relative;
  max-width: 400px;
  padding: 2rem;
  z-index: 2;
`;

const Heading = styled.h1`
font-size: 4rem;
text-transform: uppercase;
`;

const Subheading = styled.h2`
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 0.05rem;
    line-height: 1.4rem;
`;

const Logo = styled.div`
  filter:invert(1);
`;


const MainContainer = ({children}) => {
    return (
    <>
        <Header>
            <HeaderContent>
                <Logo>
                <svg xmlns="http://www.w3.org/2000/svg" height="150" width="200" viewBox="0 0 400 300">
                    <path d="M36 29.8H9.4v-6.6h34.3c-.9-2.8-3.8-5.4-8.9-5.4H9.9c-5.7 0-9 2.1-9 6.7v4.9c0 4 3.4 6.3 8.4 6.3h26.9v7H0c.9 3.8 3.8 5.8 9 5.8h27.1c5.7 0 8.5-2.2 8.5-6.9v-4.9c0-4.3-3.3-6.6-8.6-6.9zm54.3-11.9H57.5v30.7h9.3V36.8H91c6.7 0 10.4-2.3 10.4-7.7v-3.4c-.1-5-4.3-7.8-11.1-7.8zm3 9.8c0 2.2-.4 3.4-4 3.4H66.8l.1-8h22c4 0 4.5 1.2 4.5 3.3v1.3zm39 8.9h-19.8l-4.9 5.2h28.6l4.9 6.8h11l-23.7-32-5.6 6.9zm37.6-13.4h34.8c-.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5 0-8.8 1.8-8.8 6.7v17.2c0 4.9 4.3 6.7 8.8 6.7h26.3c6 0 8.1-1.7 9.1-5.8h-34.8zm75.6 10.2v-5.2h-28.1v20.4h41.5v-5.8h-32.1v-9.4zm-27.1-15.5h41.9v5.4h-41.9zm67.7 0h-14.6l17.2 12.6c2.5-1.7 5.4-3.5 8-5zm21.2 15.7c-2.5 1.7-5 3.6-7.4 5.4l13 9.5h14.7z"/><path d="M397.5 0c-80 4.6-117 38.8-125.3 46.9l-1.7 1.6h14.8C325.3 8.4 382.8 1.3 397.5 0z"/>
                </svg>
                </Logo>
                <Heading>SpaceX launches</Heading>
                <Subheading>This app shows all launches by SpaceX company.</Subheading>
            </HeaderContent>
        </Header>
        <div>
            {children}
        </div>
    </>
    );
};

export default MainContainer;