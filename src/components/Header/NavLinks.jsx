import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center text-[#6b568c] text-sm font-normal border-b-2  border-slate-100">
      <div className="flex gap-16 items-center m-2 md:pl-8 h-full">
        <NavLink>Blogs</NavLink>
        <NavLink>Hornsby Store</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Contact Us</NavLink>
      </div>
      <div className="flex pr-4 gap-8">
        <NavLink>LOG IN</NavLink>
        <NavLink>REGISTER</NavLink>
      </div>
    </div>
  );
};

export default NavLinks;
