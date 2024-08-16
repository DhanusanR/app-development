import React from 'react';
import './BlogPage.css'; // Import your CSS file for additional styling
import Navbar from './Navbar'; // Import Navbar component
import Sidebar from './Sidebar'; // Import Sidebar component
import Footer from './Footer'; // Import Footer component

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Navbar /> {/* Add Navbar here */}
      
      <div className="content-wrapper">
        <Sidebar /> {/* Add Sidebar here */}
        
        <main className="main-content">
          <header className="header">
            <h1>Our Professional Blog</h1>
            <nav className="header-nav">
             
            </nav>
          </header>

          <article className="blog-post">
            <h2>Understanding Renewable Energy</h2>
            <p>Renewable energy is derived from natural processes that are replenished constantly. Examples include solar, wind, and hydro power. Our project aims to leverage these technologies to create sustainable and eco-friendly energy solutions.</p>
            
            <div className="card">
              <h3>Introduction to Renewable Energy</h3>
              <p>Renewable energy sources are crucial for reducing our reliance on fossil fuels and mitigating climate change. By harnessing the power of natural resources, we can create a more sustainable future.</p>
              <div className="video-container">
                <video controls width="100%">
                  <source src="https://videos.pexels.com/video-files/855472/855472-sd_640_360_30fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div className="card">
              <h3>Benefits of Renewable Energy</h3>
              <p>Renewable energy not only helps in reducing greenhouse gas emissions but also offers numerous other benefits such as energy security, job creation, and economic growth. Our project is focused on integrating these benefits into practical solutions.</p>
              <div className="video-container">
                <video controls width="100%">
                  <source src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </article>
        </main>
      </div>

      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default BlogPage;
