import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' role="region" aria-label="Nouvelles et tutoriels">
      <h1>Nouvelles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/img-1.jpg')}
              text="Le PDG d'OpenAI, Sam Altman, déclare que l'IA est l'étape la plus importante à ce jour pour les humains et la technologie"
              alt = "image de sam altman"
              url='https://www.bloomberg.com/news/articles/2023-06-22/chatgpt-maker-openai-ceo-speaks-at-bloomberg-tech-summit'
            />
            <CardItem
              src={require('../images/img-2.jpg')}
              text="Moment d'apprentissage de l'IA : comment ChatGPT transforme la salle de classe"
              alt = "image du chat gpt"
              url='https://www.cnet.com/tech/features/ais-teachable-moment-how-chatgpt-is-transforming-the-classroom/'
            />
            <CardItem
              src={require('../images/img-3.jpg')}
              text="J'utilise Google Bard en tant que stagiaire. Voici 5 invites que j'utilise pour obtenir le maximum d'aide de mon chatbot."
              alt = "image du Bard"
              url='https://www.businessinsider.com/how-i-use-google-bard-as-a-writer-prompt-chatbots-2023-6'
            />
          </ul>
        </div>
      </div>
      <h1>Tutoriels</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/img-4.jpg')}
              text="Le guide avancé ULTIMATE de l'ingénierie de la demande avec GPT-4 | Compétences de base de l'IA"
              alt = "image miniature youtube"
              url='https://www.youtube.com/watch?v=-XivIt_5oSw&ab_channel=LiamOttley'
            />
            <CardItem
              src={require('../images/img-5.jpg')}
              text="Cours d'ingénierie de la demande ChatGPT"
              url='https://www.youtube.com/watch?v=mBYu5NoXBcs&ab_channel=H-EDUCATE'
              alt = "image miniature youtube"
            />
            <CardItem
              src={require('../images/img-6.jpg')}
              text="Le guide du débutant sur l'ingénierie de la demande : comment débloquer le plein potentiel de LLM comme ChatGPT"
              alt = "image miniature youtube"
              url='https://www.youtube.com/watch?v=A806OYAveYA&ab_channel=ZeroToMastery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
