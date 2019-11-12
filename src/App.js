import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Welcome To RemindR</p>
        <hr></hr>
        <p>
          <div className='intro'>
          RemindR is your one stop shop to make sure everyone gets to your event on time and at the right place. 
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
