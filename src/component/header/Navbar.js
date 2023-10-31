import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/amazon.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import axios from "axios";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Rightheader from "./Rightheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { products } = useSelector((state) => state.getProductdata);
  console.log(products);

  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(getProducts)
  // },[dispatch])

  const [text, setText] = useState("");
  console.log(text);
  const [liOpen, setLiopen] = useState(true);

  const { account, setAccount } = useContext(LoginContext);
  console.log(account);
  // console.log(account.fname);

  if (account && account.hasOwnProperty("fname")) {
    console.log(account.fname);
  } else {
    console.log("The 'fname' property does not exist in the account object.");
  }

  const [drawOpen, setDrawopen] = useState(false);

  const send = () => {
    if (account) {
      navigate("/");
    }
  };
  const token = window.localStorage.getItem("app-token");
  const getvaliduser = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce-w73k.onrender.com/validuser`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;
      console.log(data);
      if (response.status !== 200) {
        console.log("server respond with error message");
      } else {
        setAccount(data);

        // alert("User Valid");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getvaliduser();
  }, []);

  const logoutuser = async () => {
    try {
      const token = window.localStorage.getItem("app-token");

      // Display a confirmation dialog to the user
      const userConfirmed = window.confirm("Do you want to logout?");

      if (userConfirmed) {
        // User confirmed the logout

        const res = await axios.get(
          `https://ecommerce-w73k.onrender.com/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.data;
        console.log(data);

        //   if (!res.status === 200) {
        //     const error = new Error(res.error);
        //     throw error;
        // } else {
        //     setAccount(false);
        //     setOpen(false)
        //     toast.success("user Logout 😃!", {
        //         position: "top-center"
        //     });
        //     navigate("/");
        // }

        if (res.status !== 200 || !data) {
          console.log("Server responded with an error message");
        } else {
          alert("User Valid");

          // Remove the token from local storage
          window.localStorage.removeItem("app-token");

          // Redirect to a new location using React Router's history
          //  navigate("/");

          // Set the account to false or perform any other necessary state updates
          setAccount(false);
        }
      } else {
        // User canceled the logout, do nothing or handle it as needed
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelopen = () => {
    // console.log("handelopen");
    setDrawopen(true);
  };

  const handldrawclose = () => {
    setDrawopen(false);
  };

  const getText = (items) => {
    setText(items);
    setLiopen(false);
  };

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handelopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer open={drawOpen} onClose={handldrawclose}>
            <Rightheader drawClose={handldrawclose} logoutuser={logoutuser} />
          </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              <img alt="logo" src={logo} />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input
              type="text"
              id=""
              name=""
              placeholder="Search your Product"
              value={text}
              // onChange={(e) => {
              //   setText(e.target.value);
              //   console.log(e.target.value); // Add this
              // }}
              onChange={(e) => getText(e.target.value)} // Change this to onChange
            />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
            {text && (
              <List className="extrasearch" hidden={liOpen}>
                {products
                  .filter((product) =>
                    product.title.longTitle
                      .toLowerCase()
                      .includes(text.toLowerCase())
                  )
                  .map((product) => (
                    <ListItem>
                      <Link to={`/getproduct/${product.id}`}>
                        {" "}
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))}
              </List>
            )}
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">signin</NavLink>
          </div>
          {account ? (
            <NavLink to="/buynow">
              <div className="cart_btn">
                <Badge
                  badgeContent={account.carts ? account.carts.length : 0}
                  color="secondary"
                >
                  <ShoppingCartIcon color="white" />
                </Badge>

                <NavLink to="/buynow">
                  <p>Cart</p>
                </NavLink>
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
            account.fname ? (
              <Avatar
                className="avtar"
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                title={account.fname.toUpperCase()}
              >
                {account.fname[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar
                className="avtar"
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            )
          ) : (
            <Avatar
              className="avtar"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          )}
          {/* <div className="menu_div"> */}
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {account ? (
              <MenuItem onClick={handleClose}>
                <LogoutIcon style={{ fontSize: 12 }} onClick={logoutuser} />
                Logout
              </MenuItem>
            ) : (
              ""
            )}
          </Menu>
          {/* </div> */}
          <ToastContainer />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
