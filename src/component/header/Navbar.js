import React from "react";
import "./navbar.css";
import logo from "../../assets/amazon.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar  from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
           <NavLink to='/'><img alt="logo" src={logo} /></NavLink> 
          </div>
          <div className="nav_searchbaar">
            <input type="text" id="" name="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">signin</NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
