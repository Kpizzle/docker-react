import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Test Automation CI/CD Project</p>
        <hr></hr>
        <p>
          <div className='intro'>
            Welcome to my CI/CD project!
            <br />
            Here is a sample application that I will be using to learn CI/CD
            with a host with a cool hip tech stack!
          </div>
        </p>
        <a className='App-link' href='https://kylepotter.co.uk'>
          My Blog
        </a>
      </header>
    </div>
  );
}

export default App;
