import React from 'react';
import logo from '../img/logo-nav.png';
import '../App.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" className="custom-logo" style={{ width: '50px', height: 'auto' }} />
          <span className="ml-2" style={{ fontSize: '20px' }}>QuantumSky Solution</span>
        </a>
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/solutions">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
