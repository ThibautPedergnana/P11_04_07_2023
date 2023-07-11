import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
`;

const Logo = styled.img`
  width: 40%;
`;

const NavLink = styled(Link)`
  margin: 20px;
  text-decoration: none;
  color: ${colors.primary};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <MainHeader>
      <Link to="/">
        <Logo src={logo} className="App-logo" alt="logo" />
      </Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A propos</NavLink>
      </nav>
    </MainHeader>
  );
}

export default Header;
