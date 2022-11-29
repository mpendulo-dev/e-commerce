import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus, FaSearch } from "react-icons/fa";

const NavFilter = () => {
  return (
    <div
      className="w-full h-16 flex justify-between items-center text-[#6b568c] border-b-2  border-slate-50 p-0
    text-sm font-bold"
    >
      <div className="w-full flex gap-6 items-center m-2 md:pl-8 h-full">
        <NavLink>PRE ORDERS</NavLink>
        <NavLink>KITCHEN</NavLink>
        <NavLink>KIDS</NavLink>
        <NavLink>BABY</NavLink>
        <NavLink>SHOP ALL</NavLink>
        <NavLink>SALE</NavLink>
      </div>
      <div className="flex gap-16 md:pr-8 justify-items-end">
        <div>
          <li className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-[#6b568c] hover:text-gray-700">
            <a href="#" role="button" className="relative flex">
              <svg className="flex-1 w-8 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 
                0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 
                7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 
                21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-orange-400 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs text-center">
                0
              </span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavFilter;
