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
      text: 'ChatGPT: A large language model from OpenAI that can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way.',
      url: 'https://chat.openai.com/',
      alt: 'Image of Chat GPT Logo',
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/bard.jpg'),
      text: 'Bard: A large language model from Google AI that can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way.',
      url: 'https://bard.google.com/',
      alt: 'Image of Bard Logo',
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/talkai.jpg'),
      text: 'TalkAI - Text Generator: A platform that offers a variety of AI tools, including a text generator, a chatbot, and an image generator.',
      url: 'https://talkai.info/chat/',
      alt: 'Image of Talk AI Logo',
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/talkai.jpg'),
      text: 'TalkAI - Image Generator: A platform that offers a variety of AI tools, including a text generator, a chatbot, and an image generator.',
      url: 'https://talkai.info/image/',
      alt: 'Image of Talk AI Logo',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/canva.jpg'),
      text: 'Canva: A free online graphic design platform that offers a text-to-image generator.',
      url: 'https://www.canva.com/your-apps/text-to-image',
      alt: 'Image of Canva Logo',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/picsart.jpg'),
      text: 'Picsart: A free photo editing app that offers a text-to-image generator.',
      url: 'https://picsart.com/',
      alt: 'Image of Picsart Logo',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/starry.jpg'),
      text: 'Starry AI: A free mobile app that generates abstract images from text descriptions.',
      url: 'https://starryai.com/',
      alt: 'Image of Starry AI Logo',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/wombo.jpg'),
      text: 'Dream by Wombo: A free mobile app that generates dream-like images from text descriptions.',
      url: 'https://dream.ai/create',
      alt: 'Image of Wombo by Dream Logo',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/jasper.jpg'),
      text: 'Jasper: A paid AI writing assistant that can generate text, translate languages, and write different kinds of creative content.',
      alt: 'Image of Jasper Logo',
      url: 'https://www.jasper.ai/',
      type: 'text',
      price: 'paid'
    },
    {
      src: require('../images/copy.jpg'),
      text: 'CopyAI: A paid AI writing assistant that can generate text, translate languages, and write different kinds of creative content.',
      url: 'https://www.copy.ai/',
      alt: 'Image of Copy AI Logo',
      type: 'text',
      price: 'paid'
    },
    {
      src: require('../images/midjourney.jpg'),
      text: 'Midjourney: A paid AI image generator that can create realistic and creative images from text descriptions.',
      url: 'https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F',
      alt: 'Image of Mid Journey Logo',
      type: 'image',
      price: 'paid'
    },
    {
      src: require('../images/craiyon.jpg'),
      text: 'Craiyon: A free AI image generator that can create realistic and creative images from text descriptions.',
      url: 'https://www.craiyon.com/',
      alt: 'Image of Craiyon Logo',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/dalle2.jpg'),
      text: 'DALL-E 2: A paid AI image generator that can create realistic and creative images from text descriptions.',
      url: 'https://openai.com/dall-e-2',
      alt: 'Image of Dall e 2 Logo',
      type: 'image',
      price: 'paid'
    },
    {
      src: require('../images/Imagen.jpg'),
      text: 'Imagen: A paid AI image generator that can create realistic and creative images from text descriptions.',
      url: 'https://imagen-ai.com/',
      alt: 'Image of Imagen Logo',
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
    <div id="#browse" className="card-list" role="region" aria-label="Toolbox">
      <h1>Toolbox</h1>
      <div className="filter-buttons">
        <label tabIndex="0" onKeyDown={(event) => handleFilterKeyPress(event, 'text')}>
          <input
            type="checkbox"
            id="text"
            checked={filters.includes('text')}
            onChange={() => handleFilterChange('text')}
          />
          Text
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
          Free
        </label>
        <label tabIndex="0" onKeyDown={(event) => handleFilterKeyPress(event, 'paid')}>
          <input
            type="checkbox"
            id="paid"
            checked={filters.includes('paid')}
            onChange={() => handleFilterChange('paid')}
          />
          Paid
        </label>
      </div>
      <TransitionGroup className="card-grid">
        {filteredItems.map((card, index) => (
          <CSSTransition key={card.url} timeout={500} classNames="item">
            <CardItem src={card.src} text={card.text} url={card.url} alt = {card.alt}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default CardList;
