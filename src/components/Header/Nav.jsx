import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div
      className="w-full h-8 bg-[#705b93] text-white flex justify-between items-center font-light p-0
    text-sm"
    >
      <div className="flex gap-4 h-full items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "activeNav" : "deactiveNav")}
        >
          Shop
        </NavLink>
        <NavLink
          to={"/wishlist"}
          className={({ isActive }) => (isActive ? "activeNav" : "deactiveNav")}
        >
          Wishlist
        </NavLink>
      </div>
      <div className="pr-4">ZAR 276 168 1842</div>
    </div>
  );
};

export default Nav;
