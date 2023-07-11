import React, { useState } from 'react';
import './CardList.css';
import CardItem from './CardItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function CardList() {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };
  const handleFilterKeyPress = (event, filter) => {
    if (event.key === 'Enter') {
      const checkbox = document.getElementById(filter);
      if (checkbox) {
        checkbox.click();
      }
    }
  };

  const cardItems = [
    {
      src: require('../images/chatgpt.jpg'),
      text: "ChatGPT: un grand modèle de langage d'OpenAI qui peut générer du texte, traduire des langues, écrire différents types de contenu créatif et répondre à vos questions de manière informative.",
      url: 'https://chat.openai.com/',
      alt: "Image du logo Chat GPT",
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/bard.jpg'),
      text: "Bard: un grand modèle de langage de Google AI qui peut générer du texte, traduire des langues, écrire différents types de contenu créatif et répondre à vos questions de manière informative.",
      url: 'https://bard.google.com/',
      alt: "Image du logo Bard",
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/talkai.jpg'),
      text: "TalkAI - Générateur de texte: une plate-forme qui offre une variété d'outils d'IA, y compris un générateur de texte, un chatbot et un générateur d'images.",
      url: 'https://talkai.info/chat/',
      alt: "Image du logo Talk AI",
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/talkai.jpg'),
      text: "TalkAI - Générateur d'images: Une plate-forme qui offre une variété d'outils d'IA, y compris un générateur de texte, un chatbot et un générateur d'images.",
      url: 'https://talkai.info/image/',
      alt: "Image du logo Talk AI",
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/canva.jpg'),
      text: 'Canva: une plate-forme de conception graphique en ligne gratuite qui propose un générateur de texte en image.',
      url: 'https://www.canva.com/your-apps/text-to-image',
      alt: "Image du logo Canva",
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/picsart.jpg'),
      text: "Picsart: une application de retouche photo gratuite qui propose un générateur de texte en image.",
      url: 'https://picsart.com/',
      alt: "Image du logo picsart",
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/starry.jpg'),
      text: "Starry AI: Une application mobile gratuite qui génère des images abstraites à partir de descriptions textuelles.",
      url: 'https://starryai.com/',
      alt: "Image du logo stary AI",
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/wombo.jpg'),
      text: "Dream by Wombo: une application mobile gratuite qui génère des images oniriques à partir de descriptions textuelles.",
      url: 'https://dream.ai/create',
      alt: "Image du logo Wombo",
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/jasper.jpg'),
      text: "Jasper: un assistant d'écriture IA payant qui peut générer du texte, traduire des langues et écrire différents types de contenu créatif.",
      url: 'https://www.jasper.ai/',
      alt: "Image du logo jasper",
      type: 'text',
      price: 'paid'
    },
    {
      src: require('../images/copy.jpg'),
      text: "CopyAI: Un assistant d'écriture IA payant qui peut générer du texte, traduire des langues et écrire différents types de contenu créatif.",
      url: 'https://www.copy.ai/',
      alt: "Image du logo copy AI",
      type: 'text',
      price: 'paid'
    },
    {
      src: require('../images/midjourney.jpg'),
      text: "Midjourney: un générateur d'images AI payant qui peut créer des images réalistes et créatives à partir de descriptions textuelles.",
      url: 'https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F',
      alt: "Image du logo mid Journey",
      type: 'image',
      price: 'paid'
    },
    {
      src: require('../images/craiyon.jpg'),
      text: "Craiyon: Un générateur d'images AI gratuit qui peut créer des images réalistes et créatives à partir de descriptions textuelles.",
      url: 'https://www.craiyon.com/',
      alt: "Image du logo craiyon",
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/dalle2.jpg'),
      text: "DALL-E 2: Un générateur d'images AI payant qui peut créer des images réalistes et créatives à partir de descriptions textuelles.",
      url: 'https://openai.com/dall-e-2',
      alt: "Image du logo dall e 2",
      type: 'image',
      price: 'paid'
    },
    {
      src: require('../images/Imagen.jpg'),
      text: "Imagen: Un générateur d'images AI payant qui peut créer des images réalistes et créatives à partir de descriptions textuelles.",
      url: 'https://imagen-ai.com/',
      alt: "Image du logo Imagen",
      type: 'image',
      price: 'paid'
    },
  ];

  const filteredItems = cardItems.filter((item) => {
    if (filters.length === 0) {
      return true;
    }

    const hasTextFilter = filters.includes('text');
    const hasImageFilter = filters.includes('image');
    const hasFreeFilter = filters.includes('free');
    const hasPaidFilter = filters.includes('paid');

    if (
      hasTextFilter &&
      hasImageFilter &&
      hasFreeFilter &&
      hasPaidFilter
    ) {
      return true;
    }

    if (
      hasTextFilter &&
      !hasImageFilter &&
      !hasFreeFilter &&
      !hasPaidFilter
    ) {
      return item.type === 'text';
    }
    if (
      !hasTextFilter &&
       hasImageFilter &&
      !hasFreeFilter &&
      !hasPaidFilter
    ) {
      return item.type === 'image';
    }

    if (
      !hasTextFilter &&
      !hasImageFilter &&
      hasFreeFilter &&
      !hasPaidFilter
    ) {
      return item.price === 'free';
    }
    if (
      !hasTextFilter &&
      !hasImageFilter &&
      !hasFreeFilter &&
      hasPaidFilter
    ) {
      return item.price === 'paid';
    }

    if (
      hasTextFilter &&
      hasImageFilter &&
      !hasFreeFilter &&
      !hasPaidFilter
    ) {
      return item.type === 'text' || item.type === 'image';
    }
    if (
      !hasTextFilter &&
      !hasImageFilter &&
      hasFreeFilter &&
      hasPaidFilter
    ) {
      return item.price === 'free' || item.price === 'paid';
    }

    if (
      hasTextFilter &&
      !hasImageFilter &&
      hasFreeFilter &&
      !hasPaidFilter
    ) {
      return item.type === 'text' && item.price === 'free';
    }

    if (
      !hasTextFilter &&
      hasImageFilter &&
      hasFreeFilter &&
      !hasPaidFilter
    ) {
      return item.type === 'image' && item.price === 'free';
    }

    if (
      !hasTextFilter &&
      hasImageFilter &&
      !hasFreeFilter &&
      hasPaidFilter
    ) {
      return item.type === 'image' && item.price === 'paid';
    }
    if (
      hasTextFilter &&
      !hasImageFilter &&
      !hasFreeFilter &&
      hasPaidFilter
    ) {
      return item.type === 'text' && item.price === 'paid';
    }
    if (
      hasTextFilter &&
      hasImageFilter &&
      hasFreeFilter &&
      !hasPaidFilter
    ) {
      return (
        (item.type === 'text' || item.type === 'image') &&
        item.price === 'free'
      );
    }

    if (
      hasTextFilter &&
      hasImageFilter &&
      !hasFreeFilter &&
      hasPaidFilter
    ) {
      return (
        (item.type === 'text' || item.type === 'image') &&
        item.price === 'paid'
      );
    }
    if (
      hasTextFilter &&
      !hasImageFilter &&
      hasFreeFilter &&
      hasPaidFilter
    ) {
      return (
        (item.price === 'free' || item.price === 'paid') &&
        item.type === 'text'
      );
    }
    if (
      !hasTextFilter &&
      hasImageFilter &&
      hasFreeFilter &&
      hasPaidFilter
    ) {
      return (
        (item.price === 'free' || item.price === 'paid') &&
        item.type === 'image'
      );
    }

    return false;
  });

  return (
    <div id="#browse" className="card-list" role="region" aria-label="Boîte à outils">
      <h1>Boîte à outils</h1>
      <div className="filter-buttons">
        <label tabIndex="0" onKeyDown={(event) => handleFilterKeyPress(event, 'text')}>
          <input
            type="checkbox"
            id="text"
            checked={filters.includes('text')}
            onChange={() => handleFilterChange('text')}
          />
          Texte
        </label>
        <label tabIndex="0" onKeyDown={(event) => handleFilterKeyPress(event, 'image')}>
          <input
            type="checkbox"
            id="image"
            checked={filters.includes('image')}
            onChange={() => handleFilterChange('image')}
          />
          Image
        </label>
        <label tabIndex="0" onKeyDown={(event) => handleFilterKeyPress(event, 'free')}>
          <input
            type="checkbox"
            id="free"
            checked={filters.includes('free')}
            onChange={() => handleFilterChange('free')}
          />
          Gratuit
        </label>
        <label tabIndex="0" onKeyDown={(event) => handleFilterKeyPress(event, 'paid')}>
          <input
            type="checkbox"
            id="paid"
            checked={filters.includes('paid')}
            onChange={() => handleFilterChange('paid')}
          />
          Payé
        </label>
      </div>
      <TransitionGroup className="card-grid">
        {filteredItems.map((card, index) => (
          <CSSTransition key={card.url} timeout={500} classNames="item">
            <CardItem src={card.src} text={card.text} url={card.url} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default CardList;
