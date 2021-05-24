import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

import Home from "./components/home";
import About from "./components/about";
import OurServices from "./components/ourservices";
import Contact from "./components/contact";

import logo from "./logo.svg";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Link to="/">
              <img src="arcs logo 1.png" alt="Logo" className="logo" />
            </Link>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse>
              <ReactBootstrap.Nav className="ml-auto">
                <Link to="/about us" className="nav-link">About Us</Link>
                <Link to="/our services" className="nav-link">Our Services</Link>
                <Link to="/contact us" className="nav-link">Contact Us</Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Navbar>
        
        <Route path="/" exact component={Home} />
        <Route path="/about us" component={About} />
        <Route path="/our services" component={OurServices} />
        <Route path="/contact us" component={Contact} />
        </div>
      </Router>
    );
  }
}


export default App;


