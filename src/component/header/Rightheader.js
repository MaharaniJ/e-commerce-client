import React, { useContext } from "react";
import { LoginContext } from "../../context/ContextProvider";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import "./rightheader.css";
import LogoutIcon from "@mui/icons-material/Logout";
import india from "../../assets/india.png"

function Rightheader({ drawClose,logoutuser }) {
  const { account, setAccount } = useContext(LoginContext);
  console.log(account);
  return (
    <div className="rightheader">
      <div className="right_nav">
        {account && account.fname ? (
          <Avatar className="avtar">{account.fname[0].toUpperCase()}</Avatar>
        ) : (
          <Avatar className="avtar"></Avatar>
        )}

        {account && account.fname ? (
          <h3>Helloo, {account.fname.toUpperCase()}</h3>
        ) : (
         <h3>Guest</h3> 
        )}
         {/* "Guest" */}
        {/* <h3>{account ? account.fname : "Guest"}</h3> */}
      </div>
      <div className="nav_btn" onClick={() => drawClose()}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Shop by Category</NavLink>
        <Divider style={{ width: "100%", marginLeft: "-20px" }} />
        <NavLink>Today's Deal</NavLink>
        {account ? (
          <NavLink to="/buynow">Your Orders</NavLink>
        ) : (
          <NavLink to="/login">Your Orders</NavLink>
        )}
        <Divider style={{ width: "100%", marginLeft: "-20px" }} />
        <div className="flag">
          <NavLink to="/">Settings</NavLink>
          <img src={india} alt="" style={{width:35,marginLeft:10}} />
        </div>
        {
            account?<div className="flag">
                <LogoutIcon style={{fontSize:18,marginRight:4}} />
                <h3 onClick={()=>logoutuser()} style={{cursor:"pointer",fontWeight:500}}>Logout</h3>

            </div>:<NavLink to="/login">SINGIN</NavLink>
        }
      </div>
    </div>
  );
}

export default Rightheader;
