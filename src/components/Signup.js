import React, { useState } from "react";
import logo from "../images/laptop.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log("apple", e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      alert("Registration failed");
      console.log("Registration failed");
    } else {
      alert("Registration Successfull");
      console.log("Registration Successfull");

      navigate("/login");
    }
  };
  return (
    <>
      <section className="register">
        <div className="mega">
          <div className="upper">
            <div className="signup">
              <h3 className="signup-text">Sign up</h3>
            </div>
            <form method="POST">
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
                  value={user.name}
                  onChange={handleInputs}
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
                  value={user.email}
                  onChange={handleInputs}
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
                  value={user.phone}
                  onChange={handleInputs}
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
                  value={user.work}
                  onChange={handleInputs}
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
                  value={user.password}
                  onChange={handleInputs}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock-outline confirm-password"></i>
                </label>
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Your Password"
                  autoComplete="off"
                  className="field"
                  value={user.cpassword}
                  onChange={handleInputs}
                ></input>
              </div>
              <div className="btn-text">
                <button
                  type="submit"
                  className="btn"
                  name="signup"
                  onClick={postData}
                >
                  Register
                </button>
              </div>
            </form>
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
