import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './HeroSection.css';

function HeroLearning() {
  return (
    <div className='hero-container' role="banner" aria-label="Learning Hub">
      <video src={require('../videos/video-2.mp4')} autoPlay loop muted />
      <h1>Learning Hub</h1>
      <p>Unlock AI's Potential</p>
      <Link
        to="#lessons"
        smooth={true}
        duration={250}
        offset={-50} 
        className="scroll-button"
        role="link"
        aria-label="Start your Journey"
      >
       Start your Journey
      </Link>
    </div>
  );
}

export default HeroLearning;
