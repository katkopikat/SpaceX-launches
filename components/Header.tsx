import Router from 'next/router';
import styled from 'styled-components';
import Logo from './Logo';

const Header = () => {

 return (
        <HeaderWrap>
            <HeaderContent>
              <Logo />
              <h1>SpaceX launches</h1>
              <h2>This app shows all launches by SpaceX company.</h2>
            </HeaderContent>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.header`
    position: relative;
    height: 30rem;
    background-image: url(/spacex1.jpg);
    background-size: cover;
    background-position-y: center;
    color: white;

&:before {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
    height: 30rem;
    content: "";
    background: linear-gradient(180deg,rgba(0,0,0,.81) 0,rgba(0,0,0,.61) 58%,transparent);
  }
`;

const HeaderContent = styled.div`
    position: relative;
    z-index: 2;
    max-width: 28rem;
    padding: 2rem 3rem;
    text-transform: uppercase;

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 0.05rem;
    line-height: 1.4rem;
  }
`;