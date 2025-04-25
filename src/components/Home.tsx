import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm a Frontend Developer passionate about creating beautiful web experiences.</p>
        <div className="cta-buttons">
          <a href="/projects" className="cta-primary">View My Work</a>
          <a href="/contact" className="cta-secondary">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}

export default Home; 