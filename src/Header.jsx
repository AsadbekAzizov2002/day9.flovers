import React from "react";
import img from "./assets/Group.png";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <div>
      <main>
        <div className=" flex items-center justify-between container py-4 px-10">
          <img src={img} alt="logo" />
          <div>
            <ul className=" flex gap-5">
              <li>
                <NavLink to="/" element="home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>Plant Care</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <span>
              <SearchIcon />
            </span>
            <span className=" px-3">
              <ShoppingCartIcon />
            </span>
            <button className=" px-5 py-2 rounded hover:bg-green-600 active:bg-green-700 bg-green-500">
              Login
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
