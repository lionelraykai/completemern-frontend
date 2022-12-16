import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <section id="not-found">
      <div className="not-found">
        <div className="not-found-404">
          <h2 className="not-found-404-num">404</h2>
        </div>
        <span className="not-found-404-msg">We are Sorry, page not found!</span>
        <p className="not-found-404-info">
          {" "}
          The page you are looking for might have been removed had its name
          changed or is temporarily unavaiable
        </p>
        <NavLink to="/" className="not-found-404-btn">
          Back to Homepage
        </NavLink>
      </div>
    </section>
  );
};

export default Errorpage;
