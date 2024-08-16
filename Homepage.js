import React from 'react';
import './Homepage.css'; // Import your CSS file for additional styling
import Navbar from './Navbar'; // Import Navbar component
import Sidebar from './Sidebar'; // Import Sidebar component
import Navbar2 from './Navbar2'; // Import Navbar2 component
import CountUp from 'react-countup'; // Import CountUp component

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar /> {/* Add Navbar here */}
      <Navbar2 /> {/* Add Navbar2 here */}
      <Sidebar /> {/* Add Sidebar here */}

      <header className="header d-flex justify-content-between align-items-center p-3 bg-light">
        <div className="logo-container">
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/303127071/LW/TC/LU/56406864/solar-epc-consultancy-service-500x500.png" alt="Logo" className="logo-image" /> {/* Adjust path */}
          <div className="logo-text">
            <span className="logo-orange">Paramesh</span> <span className="logo-white">Share</span>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>PROVIDING VULNERABLE COMMUNITIES ACCESS TO</h1>
          <h1 className="highlight">AWESOME ENERGY SERVICES</h1>
        </div>
      </section>

      <section className="impact-stats">
        <h2>A first mover in the latest clean-tech developments in Chennai, a high social impact market with more EVs on its streets than Tesla has sold globally to date and the world’s largest distributed renewable energy program.</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3><CountUp end={120} duration={5} />+</h3>
            <p>Peer to Peer Microgrids</p>
          </div>
          <div className="stat">
            <h3><CountUp end={80000} duration={5} />+</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="stat">
            <h3><CountUp end={2000000} duration={5} />+</h3>
            <p>Electric Three-Wheeler kms Driven</p>
          </div>
          <div className="stat">
            <h3><CountUp end={27} duration={5} />+</h3>
            <p>MW Solar Rooftop in the Pipeline</p>
          </div>
          <div className="stat">
            <h3><CountUp end={2700} duration={5} />+</h3>
            <p>mtCO2 Emissions Reduced</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
