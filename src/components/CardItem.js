import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const handleCardClick = () => {
    window.location.href = props.url;
  };

  return (
    <>
      <li className='cards__item' onClick={handleCardClick}>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img className='cards__item__img' alt='Image' src={props.src} />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
