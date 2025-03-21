import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white">
      {/* Header Area */}
      <header className="header">
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                {/* Contact */}
                {/* <ul className="top-link">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul> */}
                {/* End Contact */}
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                {/* Top Contact */}
                <ul className="top-contact">
                  <li><i className="bi bi-telephone-fill" />+910 1234 56789</li>
                  <li><i className="bi bi-envelope-fill" /><a href="mailto:donornet@gmail.com">donornet@gmail.com</a></li>
                </ul>
                {/* End Top Contact */}
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  {/* Start Logo */}
                  <div className="logo">
                    <a href="index.html"><img src={logo} alt="Logo" style={{ paddingBottom: 15, height: 55 }} /></a>
                  </div>
                  {/* End Logo */}
                  {/* Mobile Nav */}
                  <div className="mobile-nav" />
                  {/* End Mobile Nav */}
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active"><a href="http://localhost:3000">Home </a>
                          {/* <ul class="dropdown">
                      <li><a href="index.html">Home Page 1</a></li>
                    </ul> */}
                        </li>
                        <li><a href="#">Services <i className="icofont-rounded-down" /></a>
                          <ul className="dropdown">
                            <li><a href="http://localhost:3000/donate">Register as a donor</a></li>
                            <li><a href="http://localhost:3000/find-donor">Find Donors</a></li>
                            <li><a href="http://localhost:3000/hospital">Hospital Registration</a></li>
                            <li><a href="http://localhost:3000/hospital/dashboard">View Blood Stock</a></li>
                            <li><a href="404.html">AI Assistant</a></li>
                          </ul>
                        </li>
                        {/* <li><a href="#">Specialists<i className="icofont-rounded-down" /></a>
                          <ul className="dropdown">
                            <li><a href="404.html">General Treatment</a></li>
                            <li><a href="404.html">ENT</a></li>
                            <li><a href="404.html">Cardiologists</a></li>
                            <li><a href="404.html">Gynaecologists</a></li>
                            <li><a href="404.html">Psychologists</a></li>
                            <li><a href="404.html">Dermatologists</a></li>
                          </ul>
                        </li> */}
                        <li><a href="http://localhost:3000/#about-us">Who We Are?</a></li>
                        <li><a href="http://localhost:3000/#footer">Contact Us</a></li>
                        <li><a href="#">Find Us <i className="icofont-rounded-down" /></a>
                          <ul className="dropdown">
                            <li><a href="https://www.facebook.com/login/"><i className="icofont-facebook" /> Facebook</a></li>
                            <li><a href="https://www.instagram.com"><i className="icofont-instagram" /> Instagram</a></li>
                            <li><a href="https://twitter.com"><i className="icofont-twitter" />
                              twitter</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*/ End Main Menu */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
      {/* End Header Area */}
    </nav>
  );
};

export default Navbar;
