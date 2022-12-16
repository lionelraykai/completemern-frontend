import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div>
          <h3 className="main"> Wave </h3>
        </div>
        <div >
          <ul>
            <li className="nav-item">
              <NavLink to="/" className="link active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="link active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="link active">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="link active">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="link active">Registration</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
