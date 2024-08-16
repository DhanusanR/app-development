// src/components/SupplierPage.js
import React from 'react';
import './SupplierPage.css'; // Import your CSS file for additional styling
import Navbar from './Navbar'; // Import Navbar component
import Sidebar from './Sidebar'; // Import Sidebar component
import Footer from './Footer'; // Import Footer component

const SupplierPage = () => {
  return (
    <div className="supplier-page">
      <Sidebar /> {/* Add Sidebar here */}
      <div className="main-content"> {/* Wrap the rest of the content in a div */}
        <Navbar /> {/* Add Navbar here */}
        
        <header className="header">
          <h1>Become a Supplier</h1>
        </header>

        <section className="supplier-info">
          <p>Join us in providing top-notch energy solutions to our communities.</p>
          <form className="supplier-form">
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" name="companyName" required />
            </div>
            <div className="form-group">
              <label htmlFor="contactPerson">Contact Person:</label>
              <input type="text" id="contactPerson" name="contactPerson" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        
        <Footer /> {/* Add Footer here */}
      </div>
    </div>
  );
};

export default SupplierPage;
