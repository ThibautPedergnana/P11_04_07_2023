import React from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

const App = styled.div`
  padding: 0 100px;
`;

function ContainerApp({ children }) {
  return (
    <div>
      <Header />
      <App>{children}</App>
      <Footer />
    </div>
  );
}

export default ContainerApp;
