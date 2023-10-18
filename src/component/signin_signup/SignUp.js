import React, { useState } from "react";
import blacklogo from "../../assets/blacklogo.png";
import "./auth.css";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    number: "",
    password: "",
    cpassword: "",
  });
  console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={blacklogo} alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="fname">Your name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                value={userData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form_data">
              <label htmlFor="number">Mobile</label>
              <input
                type="text"
                name="number"
                id="number"
                value={userData.number}
                onChange={handleChange}
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="At least 6 char"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form_data">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                value={userData.cpassword}
                onChange={handleChange}
              />
            </div>
            <button className="signin_btn">Continue</button>
            <Divider />
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
