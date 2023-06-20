import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';


function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo-kasa" className='header-logo '/>
      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;