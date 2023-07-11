import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <div id="#about-us" className="about-us-container" role="region" aria-label="À propos de nous">
      <h1>À propos de nous</h1>
      <div className="about-us-content">
        <div className="mission-journey-container">
          <div className="mission-journey">
            <h2>Notre mission</h2>
            <p>
              Chez Hub AI, notre mission est d'autonomiser les particuliers et les entreprises en fournissant un référentiel complet d'outils d'IA et en favorisant une communauté qui facilite l'apprentissage et l'utilisation de ces technologies puissantes. Nous pensons qu'en démocratisant l'accès aux ressources et aux connaissances de l'IA, nous pouvons débloquer des possibilités infinies et stimuler l'innovation dans divers domaines.
            </p>
          </div>
          <div className="mission-journey">
            <h2>Notre Voyage</h2>
            <p>
              Hub AI est né d'une passion pour l'intelligence artificielle et d'une vision pour la rendre accessible à tous. Notre équipe de passionnés et d'experts en IA s'est lancée dans un voyage pour construire une plate-forme qui combine un contenu éducatif avec des outils pratiques, permettant aux utilisateurs d'exploiter le potentiel de l'IA dans leurs projets et efforts. En cours de route, nous avons collaboré avec des leaders de l'industrie, organisé des outils de pointe et affiné nos ressources pour offrir une expérience d'apprentissage intuitive aux utilisateurs de tous les niveaux de compétence. Rejoignez-nous alors que nous continuons à évoluer et à naviguer dans le domaine passionnant de l'IA, en en faisant une réalité pour tous.
            </p>
          </div>
        </div>
        <div className="stats-container">
          <div className="stat-box">
            <i className="fas fa-toolbox"></i>
            <p className="stat">14 outils d'IA</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-comments"></i>
            <p className="stat">5 modèles d'IA conversationnelle</p>
          </div>
          <div className="stat-box">
            <i className="fas fa-image"></i>
            <p className="stat">9 modèles d'IA génératifs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
