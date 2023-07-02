import React, { useState } from 'react';
import './CardList.css';
import CardItem from './CardItem';

function CardList() {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const cardItems = [
    {
      src: require('../images/chatgpt.jpg'),
      text: 'ChatGPT: A large language model from OpenAI that can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way.',
      url: 'https://chat.openai.com/',
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/bard.jpg'),
      text: 'Bard: A large language model from Google AI that can generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way.',
      url: 'https://bard.google.com/',
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/talkai.jpg'),
      text: 'TalkAI - Text Generator: A platform that offers a variety of AI tools, including a text generator, a chatbot, and an image generator.',
      url: 'https://talkai.info/chat/',
      type: 'text',
      price: 'free'
    },
    {
      src: require('../images/talkai.jpg'),
      text: 'TalkAI - Image Generator: A platform that offers a variety of AI tools, including a text generator, a chatbot, and an image generator.',
      url: 'https://talkai.info/image/',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/canva.jpg'),
      text: 'Canva: A free online graphic design platform that offers a text-to-image generator.',
      url: 'https://www.canva.com/your-apps/text-to-image',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/picsart.jpg'),
      text: 'Picsart: A free photo editing app that offers a text-to-image generator.',
      url: 'https://picsart.com/',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/starry.jpg'),
      text: 'Starry AI: A free mobile app that generates abstract images from text descriptions.',
      url: 'https://starryai.com/',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/wombo.jpg'),
      text: 'Dream by Wombo: A free mobile app that generates dream-like images from text descriptions.',
      url: 'https://dream.ai/create',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/jasper.jpg'),
      text: 'Jasper: A paid AI writing assistant that can generate text, translate languages, and write different kinds of creative content.',
      url: 'https://www.jasper.ai/',
      type: 'text',
      price: 'paid'
    },
    {
      src: require('../images/copy.jpg'),
      text: 'CopyAI: A paid AI writing assistant that can generate text, translate languages, and write different kinds of creative content.',
      url: 'https://www.copy.ai/',
      type: 'text',
      price: 'paid'
    },
    {
      src: require('../images/midjourney.jpg'),
      text: 'Midjourney: A paid AI image generator that can create realistic and creative images from text descriptions.',
      url: 'https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F',
      type: 'image',
      price: 'paid'
    },
    {
      src: require('../images/craiyon.jpg'),
      text: 'Craiyon: A free AI image generator that can create realistic and creative images from text descriptions.',
      url: 'https://www.craiyon.com/',
      type: 'image',
      price: 'free'
    },
    {
      src: require('../images/dalle2.jpg'),
      text: 'DALL-E 2: A paid AI image generator that can create realistic and creative images from text descriptions.',
      url: 'https://openai.com/dall-e-2',
      type: 'image',
      price: 'paid'
    },
    {
      src: require('../images/Imagen.jpg'),
      text: 'Imagen: A paid AI image generator that can create realistic and creative images from text descriptions.',
      url: 'https://imagen-ai.com/',
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
    <div id = '#browse' className='card-list'>
      <h1>Toolbox</h1>
      <div className='filter-buttons'>
        <label>
          <input
            type='checkbox'
            checked={filters.includes('text')}
            onChange={() => handleFilterChange('text')}
          />
          Text
        </label>
        <label>
          <input
            type='checkbox'
            checked={filters.includes('image')}
            onChange={() => handleFilterChange('image')}
          />
          Image
        </label>
        <label>
          <input
            type='checkbox'
            checked={filters.includes('free')}
            onChange={() => handleFilterChange('free')}
          />
          Free
        </label>
        <label>
          <input
            type='checkbox'
            checked={filters.includes('paid')}
            onChange={() => handleFilterChange('paid')}
          />
          Paid
        </label>
      </div>
      <div className='card-grid'>
        {filteredItems.map((card, index) => (
          <CardItem key={index} src={card.src} text={card.text} url={card.url} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
