import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children ,dashboard}) => {
  return (
    <>
      <NavBar dashboard={dashboard} />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
