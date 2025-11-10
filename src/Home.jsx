import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <div className="home-content">
        <div className="hero-section">
          <h2>Discover Amazing Things</h2>
          <p>We're excited to have you here! Explore our services and find out what makes us special.</p>
        </div>
        <div className="features">
          <div className="feature-card">
            <h3>Quality Service</h3>
            <p>We provide top-notch services to all our clients.</p>
          </div>
          <div className="feature-card">
            <h3>Expert Team</h3>
            <p>Our team of experts is here to help you succeed.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Round-the-clock support for all your needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;