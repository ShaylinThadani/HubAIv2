import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';
import './HeroSection.css';

function HeroLearning() {
  return (
    <div className='hero-container' role="banner" aria-label="Centre d'apprentissage">
      <video src={require('../videos/video-2.mp4')} autoPlay loop muted />
      <h1>Centre d'apprentissage</h1>
      <p>Libérez le potentiel de l'IA</p>
      <Link
        to="#lessons"
        smooth={true}
        duration={250}
        offset={-50}
        className="scroll-button"
      >
        Commencez votre voyage
      </Link>
    </div>
  );
}

export default HeroLearning;
