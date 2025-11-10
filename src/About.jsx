import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>We started with a simple mission: to create amazing experiences for our customers. 
             Since then, we've grown into a team of passionate individuals dedicated to excellence.</p>
        </div>
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Gangadhar</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <h3>Superman</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <h3>Shaktiman</h3>
              <p>Design Director</p>
            </div>
          </div>
        </div>
        <div className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li>Innovation in everything we do</li>
            <li>Customer satisfaction first</li>
            <li>Continuous improvement</li>
            <li>Team collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;