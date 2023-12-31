import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './HeroSection.css';

function HeroLibrary() {
  return (
    <div className='hero-container' role="banner" aria-label="Our AI Library">
      <video src={require('../videos/video-3.mp4')} autoPlay loop muted />
      <h1>Our AI Library</h1>
      <p>Every Tool</p>
      <p>At Your Fingertips</p>
      <Link
        to="#browse"
        smooth={true}
        duration={250}
        offset={-50} 
        className="scroll-button"
        role="link"
        aria-label="Browse"
      >
       Browse
      </Link>
    </div>
  );
}

export default HeroLibrary;
