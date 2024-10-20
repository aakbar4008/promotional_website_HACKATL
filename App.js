import React from 'react';
import { Link } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="home" className="section home-section">
        <h1 className="home-header">Circles</h1>
        <h3 className="home-text">Find your third place</h3>
        <button className="cta-button">Get Started</button>
      </section>

      <section id="about" className="section about-section">
        <h2 className="about-header">About Us</h2>
        <h4 className="about-text">Circles is an app meant for friends who want to organize hang-outs while also supporting local businesses.</h4>
      </section>

      <section id="features" className="section features-section">
        <h2 className="features-header">Features</h2>
          <h4>Coordinate with friends and track RSVPs </h4>
          <h4>See available events near you</h4>
          <h4>Earn coupons from local businesses to support them</h4>
          <h4>Share your status and events you've attended </h4>
      </section>

      <section id="contact" className="section contact-section">
        <h2 className="contact-header">Our Goal</h2>
        <h5 className="contact-text">Have questions? Reach out to us and we'll get back to you as soon as possible.</h5>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>© Circles. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
