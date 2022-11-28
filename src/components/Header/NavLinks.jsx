import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center text-[#6b568c] text-sm font-normal border-b-2  border-slate-100">
      <div className="flex gap-4 items-center pl-8">
        <NavLink>Blogs</NavLink>
        <NavLink>Hornsby Store</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Contact Us</NavLink>
      </div>
      <div className="grid justify-items-end pr-4 font-medium">
        <div className="row flex gap-6">
          <NavLink>LOG IN</NavLink>
          <NavLink>REGISTER</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
