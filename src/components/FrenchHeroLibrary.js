import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './HeroSection.css';

function HeroLibrary() {
  return (
    <div className='hero-container' role="banner" aria-label="Notre bibliothèque d'IA">
      <video src={require('../videos/video-3.mp4')} autoPlay loop muted />
      <h1>Notre bibliothèque d'IA</h1>
      <p>Chaque outil</p>
      <p>à portée de main</p>
      <Link
        to="#browse"
        smooth={true}
        duration={250}
        offset={-50}
        className="scroll-button"
      >
        Parcourir
      </Link>
    </div>
  );
}

export default HeroLibrary;
