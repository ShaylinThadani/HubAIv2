import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <div id="#about-us" className="about-us-container">
      <h1>About Us</h1>
      <div className="about-us-content">
        <div className="mission-journey-container">
          <div className="mission-journey">
            <h2>For Practice!</h2>
            <p>
              At Hub AI, our mission is to empower individuals and businesses by providing a comprehensive repository of AI tools and fostering a community that facilitates learning and utilization of these powerful technologies. We believe that by democratizing access to AI resources and knowledge, we can unlock endless possibilities and drive innovation across diverse fields.
            </p>
          </div>
          <div className="mission-journey">
            <h2>Our Journey</h2>
            <p>
              Hub AI was born out of a passion for artificial intelligence and a vision to make it accessible to everyone. Our team of AI enthusiasts and experts embarked on a journey to build a platform that combines educational content with practical tools, enabling users to harness the potential of AI in their projects and endeavors. Along the way, we have collaborated with industry leaders, curated cutting-edge tools, and refined our resources to provide an intuitive learning experience for users at all skill levels. Join us as we continue to evolve and navigate the exciting realm of AI, making it a reality for all.
            </p>
          </div>
        </div>
        <div className="stats-container">
          <div className="stat-box">
            <i className="fas fa-toolbox"></i>
            <p className="stat">14 AI tools</p>
          </div>
          <div className="stat-box">
            <i class="fas fa-comments"></i>
            <p className="stat">5 Conversational AI Models</p>
          </div>
          <div className="stat-box">
          <i class="fas fa-image"></i>
            <p className="stat">9 Generative AI Models </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
