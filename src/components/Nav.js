import React from "react";
// import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import logo from "../images/n.png";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

import "../style.css";

function Nav() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <Link to="/" className="nav-item active">
                <li>Home</li>
              </Link>

              <Link to="/about/" className="nav-item">
                <li>About</li>
              </Link>

              <Link to="/service/" className="nav-item">
                <li>Service</li>
              </Link>

              <Link to="/contact/" className="nav-item">
                <li>COntact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-links">
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />

        <Route path="/service/" component={Service} />

        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default Nav;
