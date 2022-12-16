import React from "react";
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
     <Routes>
     <Route exact path="/" element={ <Home />} />
     <Route exact path="/about" element={ <About />} />
     <Route exact path="/contact" element={ <Contact />} />
     <Route exact path="/login" element={ <Login />} />
     <Route exact path="/signup" element={ <Signup />} />
     <Route path='*' element={<Errorpage />}/>
     </Routes>
      
    </>
  );
};

export default App;
