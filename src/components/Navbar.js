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
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={handleClick}>
            Hub AI
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/HubAI/' className='nav-links' onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/HubAI/support' className='nav-links' onClick={handleClick}>
                Support
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/HubAI/learning-hub'
                className='nav-links'
                onClick={handleClick}
              >
                Learning Hub
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/HubAI/library' className='nav-links' onClick={handleClick}>
                AI Library
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
