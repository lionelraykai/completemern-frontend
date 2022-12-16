import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="icon">
            <i class="zmdi zmdi-smartphone-download"></i>
          </div>
          <div className="user-contact-info">
            <h4 className="contact-phone">Phone</h4>
            <span className="user-num">+91 1111 543 218</span>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="icon">
            <i class="zmdi zmdi-email"></i>
          </div>
          <div className="user-contact-info">
            <h4 className="contact-phone">Email</h4>
            <span className="user-num">srk001929@gmail.com</span>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="icon">
            <i class="zmdi zmdi-map"></i>
          </div>
          <div className="user-contact-info">
            <h4 className="contact-phone">Address</h4>
            <span className="user-num">Una,HP,India</span>
          </div>
        </div>
      </div>
      <div className="get-touch">
        <div className="get-touch-group">
          <h4 className="get-touch-title">Get in Touch</h4>
        </div>
        <div className="get-touch-fields">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="get-touch-fill"
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="get-touch-fill"
            ></input>
          </div>
          <div>
            <input
              type="phone"
              name="phone"
              placeholder="Your phone number"
              className="get-touch-fill"
            ></input>
          </div>
        </div>
        <div className="get-touch-message">
          <textarea
            rows="5"
            cols="65"
            placeholder="Message"
            className="message"
          ></textarea>
          <button type="submit" className="get-touch-btn">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
