import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.css';

function Lessons() {
  return (
    <div id="#lessons" className="about-us-container" role="region" aria-label="Pratiquez votre ingénierie de la demande">
      <h1>Pratiquez votre ingénierie de la demande!</h1>
      <div className="about-us-content">
        <div className="mission-journey-container">
          <div className="mission-journey">
            <h2>Qu'est-ce que l'ingénierie de la demande?</h2>
            <p>
              L'ingénierie de la demande est la pratique consistant à élaborer avec soin des invites ou des instructions données aux modèles de langage pour guider leurs réponses. Cela implique de formuler des invites de manière à susciter les comportements souhaités, à éviter les préjugés et à produire des résultats précis et pertinents.
            </p>
            <h2>Maximiser les résultats grâce à l'ingénierie de la demande</h2>
            <p>
              Pour maximiser le potentiel de l'ingénierie de la demande, il est crucial de fournir des instructions claires et explicites au modèle. En spécifiant les sorties souhaitées, les contraintes ou en utilisant des invites riches en contexte, les utilisateurs peuvent orienter le modèle de langage vers la génération de réponses plus précises, cohérentes et personnalisées.
            </p>
            <h2>Conseil:</h2>
            <ul>
              <li>Expérimentez avec différentes variations de la demande pour explorer l'impact sur les réponses du modèle.</li>
              <li>Envisagez d'incorporer des instructions, un contexte ou des contraintes spécifiques pour guider le modèle vers les comportements souhaités.</li>
              <li>Continuez à affiner et à itérer vos invites pour obtenir de meilleurs résultats, et notez les techniques qui fonctionnent bien pour vous.</li>
            </ul>
          </div>
          <div className="mission-journey">
            <div className="iframe-container">
              <iframe src="https://chateverywhere.app/" title="Chat Everywhere" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lessons;
