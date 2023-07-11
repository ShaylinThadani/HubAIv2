import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className='navbar' role="navigation" aria-label="Navigation principale">
        <div className='navbar-container'>
          <Link to='/frenchhome' className='navbar-logo' onClick={handleClick}>
            Hub AI
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/frenchhome' className='nav-links' onClick={handleClick}>
              Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/frenchsupport' className='nav-links' onClick={handleClick}>
              Soutien
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/frenchlearning-hub'
                className='nav-links'
                onClick={handleClick}
              >
                Centre d'apprentissage
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/frenchlibrary' className='nav-links' onClick={handleClick}>
              Bibliothèque d'IA
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={handleClick}>
                EN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
