import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';


import currency from './assets/app/currency.png';


import PolicyPage from './PolicyPage';

function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Kingdom Builders Christian School" className="logo-img" />
                <span className="studio-name">Kingdom Builders Christian School</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

function HomePage() {
  const apps = [
    {
      name: 'Currency Converter',
      image: currency,
      link: 'com.moneytracker.budgetmanager.moneyplanner.personalbudget'
    }
  ];

  return (
    <>
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Kingdom Builders Christian School – Welcome Aboard</h2>
            <p className="about-text">Kingdom Builders Christian School is an innovative mobile app studio dedicated to developing reliable, creative, and user-friendly applications. We aim to merge imagination with functionality, delivering solutions across casual gaming, productivity, lifestyle, and education. Every app we produce is designed with the user experience at its core — featuring intuitive navigation, refined details, and practical value — to make everyday life easier, smarter, and more enjoyable for people worldwide.</p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Productivity Tools</h2>
          <div className="game-grid">
            {apps.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto: phammanht564@gmail.com"> phammanht564@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              🏠 KINGDOM BUILDERS CHRISTIAN SCHOOL
                24137 498th St
                Bemidji - 56601
                United States (US)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Kingdom Builders Christian School. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
