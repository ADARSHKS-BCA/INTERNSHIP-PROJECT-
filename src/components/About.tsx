import React from 'react';

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h2>About Me</h2>
        <p className="tagline">Passionate Frontend Developer crafting beautiful web experiences</p>
      </div>
      <div className="about-content">
        <div className="profile-section">
          <img src="/your-photo.jpg" alt="Profile" className="profile-image" />
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="about-text">
          <p>I'm a Frontend Developer with a keen eye for design and a passion for creating responsive, user-friendly web applications. With expertise in modern JavaScript frameworks and UI/UX principles, I transform ideas into seamless digital experiences.</p>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Webpack</li>
                  <li>Jest & Testing Library</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="experience-section">
            <h3>Experience Highlights</h3>
            <ul>
              <li>Developed responsive web applications using React and TypeScript</li>
              <li>Implemented modern UI/UX design principles</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Optimized web performance and accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 