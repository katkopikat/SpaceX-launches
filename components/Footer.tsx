import styled from "styled-components";


const Footer = () => (
    <FooterContent>
        <span>
            Made by katkopikat
        </span>
        <span>
            SpaceX 
        </span>
    </FooterContent>
)

export default Footer;


const FooterContent = styled.footer`
    height: 100px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: #131313;
    color: #555f5c;
`;