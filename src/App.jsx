import './styles/App.css';
import { projects } from '../projectInfo';
import { useState, useEffect } from 'react';
import Project from './components/Project';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setShowMenu(false);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setShowMenu(false);
      });
    };
  });

  return (
    <div className="main-app">
      <div className="header">
        <a href="#top">CAYLIN VU</a>
        <div className={showMenu ? 'show nav' : 'nav'}>
          <a href="#projects">PROJECTS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          <img src="/icons/menu.svg" alt="" />
        </button>
      </div>
      <div className="content" id="top">
        <div id="intro">
          <div>Hello, my name is Caylin!</div>
          <p>
            I&apos;m a full-stack web developer with experience using React.js, Node.js, and
            MongoDB.
          </p>
        </div>
        <div id="projects">
          <div className="section-title">MY PROJECTS</div>
          <div className="fullstack">FULL-STACK PROJECTS</div>
          <div className="project-container">
            {projects.map((project) => {
              if (project.type === 'fullstack') {
                return <Project project={project} key={project.title} />;
              }
            })}
          </div>
          <div className="frontend">FRONTEND PROJECTS</div>
          <div className="project-container">
            {projects.map((project) => {
              if (project.type === 'frontend') {
                return <Project project={project} key={project.title} />;
              }
            })}
          </div>
        </div>
        <div id="about">
          <div className="section-title">ABOUT ME</div>
          <p>
            I graduated college in 2019 with a degree in Accounting and went on to work in banking
            for almost 3 years. I ultimately discovered that it was not a career path I was
            interested in continuing, so I took the opportunity to make a career switch and have
            been teaching myself how to program for the past year and a half. I followed an online
            program called The Odin Project, which included many projects that helped me build my
            development skills and discover my passion for programming. I am eager to continue
            advancing as a web developer through working on personal projects and seeking career
            opportunities that allow me to continue shaping my programming skills.
          </p>
        </div>
        <div id="contact">
          <div className="section-title">CONTACT ME</div>
          <div>Interested in working together? Reach out and let&apos;s discuss!</div>
          <div className="contact-info">
            <img src="/icons/location.svg" alt="" />
            <p>Fayetteville, AR</p>
          </div>
          <div className="contact-info">
            <img src="/icons/email.svg" alt="" />
            <p>caylinvu@gmail.com</p>
          </div>
          <div className="icon-container">
            <a href="https://github.com/caylinvu">
              <img src="/icons/github.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/caylin-vu-4a287914a">
              <img src="/icons/linkedin.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// TO DO

// Figure out which projets to include

// Make data structure that contains project info

// Add projects!!!!

// Add pics

// Maybe clean up about me???

// Make name at top link to top of page

// Switch to headers and p

// Add link hover

// Make responsive
