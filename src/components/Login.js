import React,{useState} from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import logo from "../images/group.jpg";

const Login = () => {
  const navigate= useNavigate()
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginData = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "content-type" : "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json()
    if(data.status === 422 || !data){
      alert('login unsuccessful')
    }else{
      alert('login Successful')
      navigate('/')
    }
  }
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
          <form method="POST">
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
                value={email}
                onChange={(e) => {setEmail(e.target.email)}}
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
                value={password}
                onChange={(e) => {setPassword(e.target.password)}}
              ></input>
            </div>
            <div className="btn-text">
              <button type="submit" className="btn" name="signin" onClick={loginData}>
                Login
              </button>
            </div>
          </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
