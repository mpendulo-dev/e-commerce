import React from "react";
import Nav from "./Nav";
import NavFilter from "./NavFilter";
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <div>
      <Nav />
      <NavLinks />
      <NavFilter />
    </div>
  );
};

export default Header;
