import React, { useContext, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/amazon.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const { account, setAccount } = useContext(LoginContext);
  console.log(account);

  const send = () => {
    if (account) {
      navigate("/");
    }
  };

  const getvaliduser = async () => {
    const token = window.localStorage.getItem("app-token");
    try {
      const response = await axios.get(`http://localhost:8000/validuser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.date;
      console.log(data);
      if (response !== 200) {
        console.log("server respond with error message");
      } else {
        setAccount(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getvaliduser();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
              <img alt="logo" src={logo} />
            </NavLink>
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
          {account ? (
            <NavLink to="/buynow">
              <div className="cart_btn">
                <Badge badgeContent={account.carts ? account.carts.length : 0} color="secondary">
                  <ShoppingCartIcon color="white" />
                </Badge>

                <p>Cart</p>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <div className="cart_btn">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
                <p>Cart</p>
              </div>
            </NavLink>
          )}
          {account ? (
            <Avatar className="avtar">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
