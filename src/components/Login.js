import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/group.jpg";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="login-form">
          <div className="submit">
            <img src={logo} className="login-img"></img>
            <NavLink to="/signup" className="create-account">
              Create an account
            </NavLink>
          </div>
          <div className="login-input">
            <div className="login-text">
              <h3 className="login-head">Sign in</h3>
            </div>
            <div className="login-form-group">
              <label htmlFor="email">
                <i class="zmdi zmdi-email"></i>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                autoComplete="off"
                className="login-field"
              ></input>
            </div>
            <div className="login-form-group">
              <label htmlFor="password">
                <i class="zmdi zmdi-lock-outline"></i>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                className="login-field"
              ></input>
            </div>
            <div className="btn-text">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
