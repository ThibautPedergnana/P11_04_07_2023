import logo_footer from "../../assets/logo_footer.png";
import styled from "styled-components";

const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 10px;
`;

const LogoFooter = styled.img`
  margin: 40px 0 30px 0;
`;

const Copyright = styled.p`
  color: white;
`;

function Footer() {
  return (
    <MainFooter>
      <LogoFooter src={logo_footer} className="App-logo" alt="logo" />
      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </MainFooter>
  );
}

export default Footer;
