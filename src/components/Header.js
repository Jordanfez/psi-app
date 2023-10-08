import React from 'react'
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <div>
      <div className="top-navbar">
        <div className="top-navbar-grid">
          <div className="logo">Logo</div>
          <nav className="main-navigation">
            <ul>
              <li>Home</li>
              <li>Freelance</li>
              <li>SpaceMarket</li>
              <li>Consultation</li>
              <li>Industrialisation</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bottom-navbar">
        <div className="bottom-navbar-grid">
          <div className="logo">Logo</div>
          <div className="search-bar">
            <input type="text" placeholder="Recherche" />
          </div>
          <div className="button-container">
            <button className="signup-button">S'inscrire</button>
            <button className="login-button">Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header