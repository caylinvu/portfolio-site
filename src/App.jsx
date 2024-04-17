import './styles/App.css';

function App() {
  return (
    <div className="main-app">
      <div className="header">
        <div>Caylin Vu</div>
        <div className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div id="about"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    </div>
  );
}

export default App;
