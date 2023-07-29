import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
  @media (max-width: 768px) {
    padding: 20px 25px;
  }
`;

const LinkLogo = styled(Link)`
  width: 17%;
`;

const Logo = styled.img`
  width: 100%;
`;

const NavLink = styled(Link)`
  margin: 20px;
  text-decoration: none;
  color: ${colors.primary};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  font-size: 24px;
`;

function Header() {
  return (
    <MainHeader>
      <LinkLogo to="/">
        <Logo src={logo} className="App-logo" alt="logo" />
      </LinkLogo>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A propos</NavLink>
      </nav>
    </MainHeader>
  );
}

export default Header;
