import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event, faqId) => {
    if (event.key === 'Enter') {
      const checkbox = document.getElementById(faqId);
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
      }
    }
  };

  return (
    <div id="contact-us" className="contact-us-container" role="region" aria-label="Contactez-nous">
      <h1>Contactez-nous</h1>
      <form className="contact-form">
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          aria-required="true"
          aria-label="votre nom"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          aria-required="true"
          aria-label="votre email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
          aria-required="true"
          aria-label="votre message"
        />

        <button type="submit">Soumettre</button>
      </form>

      <div className="faq-container">
        <h2>FAQ</h2>
        <div className="accordion">
          <div className="accordion-item">
            <input type="checkbox" id="faq1" className="accordion-item-toggle" />
            <label htmlFor="faq1" className="accordion-item-title" tabIndex="0" onKeyPress={(event) => handleKeyPress(event, 'faq1')}>
              Comment puis-je fournir des commentaires ou signaler un bogue dans l'outil d'IA?
            </label>
            <div className="accordion-item-content">
              Nous apprécions vos commentaires et apprécions les rapports de bogues. Pour nous faire part de vos commentaires ou signaler un bogue, veuillez contacter notre équipe d'assistance en utilisant le formulaire ci-dessus. Incluez des détails spécifiques sur le problème, les étapes pour le reproduire et toutes les captures d'écran ou messages d'erreur pertinents. Vos commentaires nous aident à améliorer l'outil et à offrir une meilleure expérience à tous les utilisateurs.
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="accordion-item-toggle" />
            <label htmlFor="faq2" className="accordion-item-title" tabIndex="0" onKeyPress={(event) => handleKeyPress(event, 'faq2')}>
              Combien de temps faut-il généralement pour recevoir une réponse de l'équipe d'assistance?
            </label>
            <div className="accordion-item-content">
              Nous nous efforçons de fournir une assistance rapide à nos utilisateurs. Notre équipe d'assistance a pour objectif de répondre aux questions et aux demandes d'assistance dans les 24 à 48 heures. Toutefois, veuillez noter que les délais de réponse peuvent varier en fonction du volume de demandes reçues. Soyez assuré que nous ferons de notre mieux pour répondre à vos préoccupations le plus rapidement possible.
            </div>
          </div>

          <div className="accordion-item">
            <input type="checkbox" id="faq3" className="accordion-item-toggle" />
            <label htmlFor="faq3" className="accordion-item-title" tabIndex="0" onKeyPress={(event) => handleKeyPress(event, 'faq3')}>
              Je rencontre des difficultés techniques avec l'outil AI. Que dois-je faire?
            </label>
            <div className="accordion-item-content">
              <ul>
                <li>Rafraîchir la page : Parfois, un simple rafraîchissement peut résoudre des problèmes temporaires.</li>
                <li>Effacer le cache de votre navigateur: vider votre cache peut aider à éliminer toutes les données mises en cache susceptibles de causer des problèmes.</li>
                <li>Essayez un autre navigateur: le fait de passer à un autre navigateur peut aider à déterminer si le problème est spécifique au navigateur.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
