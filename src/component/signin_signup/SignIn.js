import React, { useContext, useState } from "react";
import blacklogo from "../../assets/blacklogo.png";
import "./auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../../context/ContextProvider";

function SignIn() {
  const [logdata, setlogdata] = useState({
    email: "",
    password: "",
  });
  console.log(logdata);

  const navigate = useNavigate()

  const {account,setAccount} = useContext(LoginContext)
  console.log(account)

  const handleData = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setlogdata((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = logdata;

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      const data = response.data;
      console.log(data);
     
      if (response.status === 400 || !data) {
        console.log("invalid details");
        toast.error("Invalid Details 👎!", {
            position: "top-center"
        });
    } else {
        setAccount(data);
        setlogdata({ ...logdata, email: "", password: "" })
        toast.success("Login Successfully done 😃!", {
            position: "top-center"
        });
        setTimeout(() => {
          navigate("/") // Navigate to the main page
        }, 1000);
       
    }
    } catch (error) {
      console.log("Error in sendData:", error);
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
            <h1>Sign-In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={logdata.email}
                onChange={handleData}
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="At least 6 char"
                value={logdata.password}
                onChange={handleData}
              />
            </div>
            <button className="signin_btn" onClick={sendData}>
              Continue
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>
            <NavLink to="/register">Create Account</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
