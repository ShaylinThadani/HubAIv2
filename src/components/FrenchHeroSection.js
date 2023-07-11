import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' role="banner" aria-label="Hub AI">
      <video src={require('../videos/video-1.mp4')} autoPlay loop muted />
      <h1>Hub AI</h1>
      <p>Un référentiel en ligne de tout ce qui concerne l'IA</p>
      <p>Améliorez votre fluidité avec l'avenir</p>
      <Link
        to="#about-us"
        smooth={true}
        duration={250}
        offset={-50}
        className="scroll-button"
      >
        À propos de nous
      </Link>
    </div>
  );
}

export default HeroSection;
