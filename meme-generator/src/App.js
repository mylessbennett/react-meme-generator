import React from 'react';
import './App.css';
import Meme from './Meme';
import logo from './img/logo.png';

function App() {

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <img className="site-logo" src={logo} alt="site logo" />
      </header>
      <div className="content-wrapper">
          <Meme />
      </div>
      <footer>2019 Myles Bennett</footer>
    </div>
  );
}

export default App;
