import React from "react";
import logo from "../images/laptop.jpg";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="register">
        <div className="mega">
          <div className="upper">
            <div className="signup">
              <h3 className="signup-text">Sign up</h3>
            </div>
            <div className="form-group">
              <label htmlFor="name">
                <i class="zmdi zmdi-account-circle"></i>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="off"
                className="field"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <i class="zmdi zmdi-email sign-email"></i>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                autoComplete="off"
                className="field"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="Phone">
                <i class="zmdi zmdi-phone-in-talk"></i>
              </label>
              <input
                type="phone"
                name="phone"
                placeholder="Your number"
                autoComplete="off"
                className="field"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="work">
                <i class="zmdi zmdi-slideshow"></i>
              </label>
              <input
                type="text"
                name="work"
                placeholder="Your Profession"
                autoComplete="off"
                className="field"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i class="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                className="field"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i class="zmdi zmdi-lock-outline confirm-password"></i>
              </label>
              <input
                type="text"
                name="confirm"
                placeholder="Confirm Your Password"
                autoComplete="off"
                className="field"
              ></input>
            </div>
            <div className="btn-text">
              <button type="submit" className="btn">
                Register
              </button>
            </div>
          </div>
          <div className="submit">
            <img src={logo} className="signup-img"></img>
            <NavLink to="/login" className="exist-user">
              i am already register
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
