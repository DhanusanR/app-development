import React from 'react';
import './Partner.css'; // Import your CSS file for additional styling
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component

const Partner = () => {
  return (
    <div className="partner">
      <Navbar /> {/* Add Navbar here */}
      
      <main className="main-content">
        <header className="page-header">
          <h1>Become a Partner</h1>
          <p>Join us in making a difference. Partner with us to help spread renewable energy solutions to communities in need.</p>
        </header>

        <section className="partner-info">
          <h2>Why Partner with Us?</h2>
          <p>We are a leader in the clean-tech industry, and partnering with us offers numerous benefits, including:</p>
          <ul>
            <li>Access to cutting-edge technology and solutions.</li>
            <li>Opportunities for business growth and expansion.</li>
            <li>Support in implementing sustainable energy projects.</li>
          </ul>
          
          <h2>How to Become a Partner</h2>
          <p>Getting started is easy! Follow these steps:</p>
          <ol>
            <li>Fill out our partnership form.</li>
            <li>Our team will review your application.</li>
            <li>We'll get in touch to discuss the next steps.</li>
          </ol>

          <a href="https://example.com/partnership-form" target="_blank" rel="noopener noreferrer" className="cta-button">Apply Now</a>
        </section>
      </main>
      
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Partner;
