import React from "react";
import eren from "../images/eren.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about-us">
        <div className="about-us-combine">
          <div className="about-us-group">
            <img src={eren} alt="Wave" className="about-us-profile-pic"></img>
            <ul className="about-us-user-profession">
              <li className="profession-name">
                <a
                  href="https://youtu.be/tKOnDi-fZuQ"
                  target="_blank"
                  className="profession-link"
                >
                  Youtuber
                </a>
              </li>
              <li className="profession-name">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="profession-link"
                >
                  Instagram
                </a>
              </li>
              <li className="profession-name">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="profession-link"
                >
                  Twitter
                </a>
              </li>
              <li className="profession-name">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  className="profession-link"
                >
                  Developer
                </a>
              </li>
              <li className="profession-name">
                <a
                  href="https://attackontitan.fandom.com/wiki/Eren_Yeager"
                  target="_blank"
                  className="profession-link"
                >
                  Yeagerist
                </a>
              </li>
            </ul>
          </div>
          <div className="about-us-details">
            <h5 className="about-us-name">Eren Yeager</h5>
            <h6 className="about-us-profession">Founding Titan</h6>
            <p className="about-us-ranking">
              Ranking: <span>1/10</span>
            </p>
            <h4 className="about-us-details-heading">About</h4>
            <div className="about-us-user-details-grp">
              <div className="about-us-user-details">
                <div className="about-us-user-label">
                  <label className="about-us-user-label-name">User ID:</label>
                </div>
                <div className="about-us-user-identity">
                  <span className="about-us-user-value">747983477874</span>
                </div>
              </div>
              <div className="about-us-user-details">
                <div className="about-us-user-label">
                  <label className="about-us-user-label-name">Name:</label>
                </div>
                <div className="about-us-user-identity">
                  <span className="about-us-user-value">Eren Yeager</span>
                </div>
              </div>
              <div className="about-us-user-details">
                <div className="about-us-user-label">
                  <label className="about-us-user-label-name">Email:</label>
                </div>
                <div className="about-us-user-identity">
                  <span className="about-us-user-value">eren02@yopmail.com</span>
                </div>
              </div>
              <div className="about-us-user-details">
                <div className="about-us-user-label">
                  <label className="about-us-user-label-name">Phone:</label>
                </div>
                <div className="about-us-user-identity">
                  <span className="about-us-user-value">9876543210</span>
                </div>
              </div>
              <div className="about-us-user-details">
                <div className="about-us-user-label">
                  <label className="about-us-user-label-name">Profession:</label>
                </div>
                <div className="about-us-user-identity">
                  <span className="about-us-user-value">Titan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-profile">
            <NavLink className="edit-profile-link"> Edit profile</NavLink>
            <div>
            <h4 className="about-us-details-timeline">
                Timeline
              </h4>
              <div className="about-us-details-timeline-grp">
                <div className="about-us-user-timeline-label">
                  <label className="about-us-user-timeline-label-name">Experience</label>
                </div>
                <div className="about-us-user-timeline-identity">
                  <span className="about-us-user-timeline-value">Expert</span>
                </div>
              </div>
              <div className="about-us-details-timeline-grp">
                <div className="about-us-user-timeline-label">
                  <label className="about-us-user-timeline-label-name">Hourly Rate</label>
                </div>
                <div className="about-us-user-timeline-identity">
                  <span className="about-us-user-timeline-value">10$/hr</span>
                </div>
              </div>
              <div className="about-us-details-timeline-grp">
                <div className="about-us-user-timeline-label">
                  <label className="about-us-user-timeline-label-name">Total Projects</label>
                </div>
                <div className="about-us-user-timeline-identity">
                  <span className="about-us-user-timeline-value">230</span>
                </div>
              </div>
              <div className="about-us-details-timeline-grp">
                <div className="about-us-user-timeline-label">
                  <label className="about-us-user-timeline-label-name">English Level</label>
                </div>
                <div className="about-us-user-timeline-identity">
                  <span className="about-us-user-timeline-value">Expert</span>
                </div>
              </div>
              <div className="about-us-details-timeline-grp">
                <div className="about-us-user-timeline-label">
                  <label className="about-us-user-timeline-label-name">Availability</label>
                </div>
                <div className="about-us-user-timeline-identity">
                  <span className="about-us-user-timeline-value">6 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
