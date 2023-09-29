import React from "react";
import amazon from "../../assets/amazon.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src={amazon} alt="logo" />
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="id" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <a href="void">Sign in</a>
          </div>
          <div className="cart_btn">
            <Badge color="secondary" badgeContent={0}>
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
