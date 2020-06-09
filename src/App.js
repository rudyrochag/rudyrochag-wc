import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This site will be a fullstack-javascript project.
        </p>
        <a
          className="App-link"
          href="https://about.me/rudyrocha"
          target="_blank"
          rel="noopener noreferrer"
        >
          My personal website
        </a>
      </header>
    </div>
  );
}

export default App;
