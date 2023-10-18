import React, { useState } from "react";
import blacklogo from "../../assets/blacklogo.png";
import "./auth.css";
import { NavLink } from "react-router-dom";

function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(data);

  const handleData = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={blacklogo} alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={data.email}
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
                 value={data.password}
                 onChange={handleData}
              />
            </div>
            <button className="signin_btn">Continue</button>
          </form>
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
