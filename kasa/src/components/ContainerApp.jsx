import React from "react";
import Footer from "./footer";
import Header from "./header";

function ContainerApp({ children }) {
  return (
    <div className="container-app">
      <Header />
      <div
        className="app"
        style={{
          padding: "0 100px",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default ContainerApp;
