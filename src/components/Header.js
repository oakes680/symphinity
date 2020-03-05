import React from "react";
import { NavBar, Logo, LogoLink } from "../stylesheets/Header";

const Header = () => {
  return (
    <NavBar>
      <LogoLink to="/">
        <Logo>Symphinity</Logo>
      </LogoLink>
    </NavBar>
  );
};

export default Header;
