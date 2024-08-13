import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import JoinUs from './JoinUs';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>EduMaster Pro</h1>
          <nav>
            <ul>
              <li><Link to="#home">Home</Link></li>
              <li><Link to="#services">Services</Link></li>
              <li><Link to="#about-us">About Us</Link></li>
              <li><Link to="/join-us">Join Us</Link></li>
              <li><Link to="/login">Log In</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <div>
              <section id="home" className="hero-section">
                <div className="hero-text">
                  <h2>"Revolutionize Your Teaching Environment"</h2>
                  <p>Enhance productivity with an all-in-one solution for tracking and organizing student records and daily operations.</p>
                  <Link to="/login">
                    <button className="login-btn">Log In</button>
                  </Link>
                </div>
                <div className="hero-image">
                  <img src="C:\Users\hiren ahir\Desktop\edumaster\public\istockphoto-2103894533-612x612.webp" alt="Teacher at desk" />
                </div>
              </section>

              <section id="services" className="services-section">
                <h3>Our Services</h3>
                <div className="services-grid">
                  <div className="service-card">Service 1</div>
                  <div className="service-card">Service 2</div>
                  <div className="service-card">Service 3</div>
                  <div className="service-card">Service 4</div>
                </div>
              </section>

              <section id="about-us" className="about-section">
                <h3>About Us</h3>
                <div className="about-content">
                  <div className="about-card">
                    <p>We are dedicated to providing educators with the tools they need to succeed in the modern classroom...</p>
                  </div>
                  {/* Additional about content */}
                </div>
              </section>

              <footer className="footer">
                <div className="footer-links">
                  <div>
                    <h4>Follow Us</h4>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                  </div>
                  <div>
                    <h4>Learn Languages</h4>
                    <a href="#">English</a>
                    <a href="#">Mandarin</a>
                    <a href="#">Japanese</a>
                  </div>
                  <div>
                    <h4>Subscription</h4>
                    <a href="#">English Private Package</a>
                    <a href="#">Mandarin Private Package</a>
                    <a href="#">Japanese Private Package</a>
                  </div>
                </div>
              </footer>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
