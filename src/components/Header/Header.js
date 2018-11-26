import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Blog</h1>
        </Link>
        <button onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

export default Header;