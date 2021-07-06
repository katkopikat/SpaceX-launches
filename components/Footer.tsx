import styled from "styled-components";
import variables from "../styles/variables";

const Footer = () => (
	<FooterContent>
		<span>
			made by <a href={"https://github.com/katkopikat"}>katkopikat</a>
		</span>
		<span>
			<a href={"https://github.com/r-spacex/SpaceX-API"}>SpaceX-API</a>
		</span>
	</FooterContent>
);

export default Footer;

const FooterContent = styled.footer`
	height: ${variables.footerHeight};
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	gap: 0.5rem;
	background: #131313;
	color: #555f5c;
	letter-spacing: 0.2rem;
`;
