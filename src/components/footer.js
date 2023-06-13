import React from "react";
import footImage from "../images/icon.png";
import "../style.css";
//import "./App.css";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row text-center">
        <div className="col-md-4">
          <img src={footImage} alt="foot" width="40px" />
          <h3>Get in Touch</h3>
          <hr className="light" />
          <p>09-422500882</p>
          <p>info@nexis-tech.com</p>
          <p>NO(43)Yeik Thar Street,ThinGunGyun township</p>
        </div>
        <div className="col-md-4">
          <hr className="light" />
          <h3>Our Hours</h3>
          <hr className="light" />
          <p>Mon-Fir</p>
          <p>9:00 AM -5:00 PM</p>
          <p>Sat-Sun : OFF</p>
        </div>
        <div className="col-md-4">
          <hr className="light" />
          <h3>Services</h3>
          <hr className="light" />
          <p>Technical Consultant</p>
          <p>System and Network</p>
          <p>Cyber Security</p>
          <p>Software Development</p>
        </div>
        <div className="col-12">
          <hr className="light" />
          <h6>&copy;nexistech.com Copyright all right reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
