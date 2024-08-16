import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Navbar.css'; // Import custom CSS for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img 
            src="https://w7.pngwing.com/pngs/611/827/png-transparent-logo-solar-panels-solar-energy-solar-power-energy-text-logo-renewable-energy.png" 
            alt="Company Logo" 
            className="navbar-logo" 
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li><Link className="dropdown-item" to="/overview">Overview</Link></li>
                <li><Link className="dropdown-item" to="/our-team">Our Team</Link></li>
                <li><Link className="dropdown-item" to="/management">Management</Link></li>
              </ul>
            </li>
          
<li className="nav-item">
  <Link className="nav-link" to="/business-lines">Nearest Grid</Link>
</li>

            
            <li className="nav-item">
              <Link className="nav-link" to="/publications">BLog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">Career</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
