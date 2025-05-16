import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-bg">
      <nav className="navbar">
        <div className="logo-area">
          <div className="logo-placeholder" />
          <span className="brand">SmartReview</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it Works</a>
          <a href="#video" className="how-to-use-link">How to Use</a>
          <a href="#faq">FAQ</a>
          <a href="#get">Get Extension</a>
        </div>
        <div className="nav-actions">
          <button className="cta-btn">Get Started</button>
        </div>
      </nav>
      <header className="hero">
        <h1 className="hero-title">Cut through the noise.<br />Shop smarter.</h1>
        <p className="hero-desc">SmartReview is your personal AI shopping assistant that summarizes product reviews so you don't have to. Skip the endless scrolling — get quick, trustworthy insights into what real customers are saying.</p>
        <div className="hero-actions">
          <button className="cta-btn">Get Started</button>
          <button className="secondary-btn">See it in Action</button>
        </div>
      </header>
      <section className="features" id="features">
        <h2>🔍 Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>AI-Powered Summaries</h3>
            <p>Instantly highlights the most common pros and cons.</p>
          </div>
          <div className="feature-card">
            <h3>Sentiment Analysis</h3>
            <p>Understand overall customer satisfaction at a glance.</p>
          </div>
          <div className="feature-card">
            <h3>Review Quality Checker</h3>
            <p>Flags reviews that might be fake or suspicious.</p>
          </div>
          <div className="feature-card">
            <h3>Clean, Minimal UI</h3>
            <p>Designed for clarity, focus, and ease of use.</p>
          </div>
          <div className="feature-card">
            <h3>One-Click Insights</h3>
            <p>Just click the SmartReview icon on any Amazon product page.</p>
          </div>
        </div>
      </section>
      <section className="perfect-for">
        <h2>🛍️ Perfect For</h2>
        <ul>
          <li>Busy shoppers who want quick insights</li>
          <li>Anyone overwhelmed by too many reviews</li>
          <li>Smart consumers who value honest feedback</li>
        </ul>
      </section>
      <section className="how" id="how">
        <h2>How it Works</h2>
        <ol>
          <li>Install the extension</li>
          <li>Browse Amazon as usual</li>
          <li>Click the SmartReview icon for an instant, AI-generated review summary — all in seconds.</li>
        </ol>
      </section>
      <section className="video-demo" id="video">
        <h2>See SmartReview in Action</h2>
        <video className="demo-video" autoPlay loop muted playsInline poster="/video-poster.png" style={{borderRadius: '20px', maxWidth: '100%', boxShadow: '0 4px 32px 0 rgba(29,233,182,0.10)'}}>
          <source src="/recording.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <footer className="footer">
        <span>© {new Date().getFullYear()} SmartReview. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
