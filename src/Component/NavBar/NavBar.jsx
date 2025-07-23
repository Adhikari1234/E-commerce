import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center rounded-md p-2 px-4 shadow-md bg-orange-90 w-full h-10">
      
      {/* Logo */}
      <div className="w-10 sm:w-15 md:w-15">
        <NavLink to="/">
          <img
            src="./logo2.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </NavLink>
      </div>

      {/* Search & Cart */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
        
        {/* Search */}
        <div className="flex border border-orange-500 items-center rounded-md bg-Orange-500 overflow-hidden">
          <input
            type="text"
            className="outline-none p-1 text-[10px] sm:text-xs md:text-sm w-16 sm:w-24 md:w-48"
            placeholder="Search"
          />
          <IoSearch className="text-orange-600 text-sm sm:text-base md:text-lg mr-2" />
        </div>

        {/* Cart */}
        <NavLink to="/cart">
          <MdOutlineShoppingCart className="text-2xl sm:text-3xl md:text-4xl text-orange-600 hover:text-orange-500 transition" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
