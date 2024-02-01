<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React, { useEffect, useState } from 'react';
import Character from './Character';
import pickBodyPartsFromColor from './controllers/bodyController';

// Component for each body part
const Body = ({ imagePath }) => <img src={`/assets/${imagePath}`} alt="Body" />;
const Arm = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Arm" style={style} />;
const Leg = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Leg" style={style} />;
const Nose = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Nose" style={style} />;
const Mouth = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Mouth" style={style} />;
const Eye = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Eye" style={style} />;
//const Detail = 

function App() {

  return (
    <Character />
>>>>>>> Stashed changes
  );
}

export default App;
