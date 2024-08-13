import React from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="bg-gray text-blue-500 text-2xl flex justify-between items-center p-4">
      <div className="flex space-x-4 text-3xl">
        <Link
          to="/"
          className="hover:text-white transition-colors"
        >
          GlamGrab
        </Link>
      </div>
      <div className="flex-1 flex justify-center space-x-4">
        <Link
          to="/women"
          className="hover:text-white transition-colors"
        >
          Women
        </Link>
        <Link
          to="/men"
          className="hover:text-white transition-colors"
        >
          Men
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link
          to="/login"
          className="hover:text-white transition-colors"
        >
          Login
        </Link>
        {/* Add space here */}
        <div className="text-blue-500 text-2xl ml-4">
          <Link to="/addtocart">
            <FaCartArrowDown />
          </Link>
        </div>
      </div>
    </div>
  );
};
