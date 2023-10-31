import React, { useState } from "react";
import blacklogo from "../../assets/blacklogo.png";
import "./auth.css";
import { Divider } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendData = async (e) => {
    e.preventDefault();

    // Client-side validation
    const { fname, email, mobile, password, cpassword } = userData;
    if (!fname || !email || !mobile || !password || !cpassword) {
      toast.error("Please fill in all the required fields.", {
        position: "top-right",
      });
      return; // Exit the function to prevent the API request
    }

    try {
      const response = await axios.post(
        "https://ecommerce-w73k.onrender.com/register",
        {
          fname,
          email,
          mobile,
          password,
          cpassword,
        }
      );
      const data = response.data;

      if (response.status === 422 || !data) {
        toast.error("Invalid Details 👎!", {
          position: "top-right",
        });
      } else {
        setUserData({
          ...userData,
          fname: "",
          email: "",
          mobile: "",
          password: "",
          cpassword: "",
        });
        toast.success("Registration Successfully done 😃!", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/"); // Navigate to the main page
        }, 1000);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Registration failed. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={blacklogo} alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form method="POST">
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
              <label htmlFor="mobile">Mobile</label>
              <input
                type="number"
                name="mobile"
                id="mobile"
                value={userData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="At least 12 char"
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
            <button className="signin_btn" onClick={sendData}>
              Continue
            </button>
            <Divider />
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default SignUp;
