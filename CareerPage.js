import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component
import './CareerPage.css'; // Import CSS for styling

const CareerPage = () => {
  return (
    <div className="career-page">
      <Navbar /> {/* Add Navbar here */}
      
      <main className="main-content">
        <header className="career-header">
          <h1>Join Our Team</h1>
          <p>We are a dynamic team working on innovative projects in the renewable energy sector. Explore our current openings and become part of our mission to drive sustainable energy solutions.</p>
        </header>

        <section className="job-listings">
          <h2>Current Job Openings</h2>
          <div className="job-card">
            <h3>Renewable Energy Analyst</h3>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Responsibilities:</strong> Analyze market trends, support project development, and contribute to strategic planning.</p>
            <p><strong>Requirements:</strong> Degree in Environmental Science or related field, strong analytical skills, and experience with data analysis.</p>
            <a href="/apply" className="apply-button">Apply Now</a>
          </div>
          <div className="job-card">
            <h3>Project Manager</h3>
            <p><strong>Location:</strong> Paramesh Puram, Tamilnadu</p>
            <p><strong>Responsibilities:</strong> Manage project timelines, coordinate with stakeholders, and ensure project milestones are met.</p>
            <p><strong>Requirements:</strong> Proven experience in project management, excellent organizational skills, and familiarity with renewable energy projects.</p>
            <a href="/apply" className="apply-button">Apply Now</a>
          </div>
        </section>

        <section className="company-culture">
          <h2>Why Work With Us?</h2>
          <p>At our company, we value innovation, collaboration, and sustainability. Join us to be part of a team that is committed to making a positive impact on the world.</p>
          <ul>
            <li>Dynamic work environment</li>
            <li>Opportunities for growth and development</li>
            <li>Competitive salaries and benefits</li>
          </ul>
        </section>

        <section className="application-info">
          <h2>How to Apply</h2>
          <p>To apply for any of the positions listed, please send your resume and cover letter to <a href="mailto:careers@yourcompany.com">careers@yourcompany.com</a> with the subject line "Application for [Position Name]".</p>
        </section>
      </main>

      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default CareerPage;
