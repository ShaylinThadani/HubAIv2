import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={require('../videos/video-1.mp4')} autoPlay loop muted />
      <h1>Hub AI</h1>
      <p>An Online Repository of Everything AI</p>
      <p>Elevate your fluency with the future</p>
      <Link
        to="#about-us"
        smooth={true}
        duration={250}
        offset={-50} 
        className="scroll-button"
      >
       About Us
      </Link>
    </div>
  );
}

export default HeroSection;
