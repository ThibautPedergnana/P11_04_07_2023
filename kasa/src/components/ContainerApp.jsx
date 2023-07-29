import React from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

const App = styled.div`
  padding: 0 100px;
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

function ContainerApp({ children }) {
  return (
    <div>
      <Header />
      <App>{children}</App>
      <Footer style={{ bottom: 0 }} />
    </div>
  );
}

export default ContainerApp;
