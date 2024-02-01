import logo from './logo.svg';
import './App.css';
import pickBodyPartsFromColor from './controllers/bodyController';
import React from 'react';

function App() {
  const color = 'blue';
  const bodyParts = pickBodyPartsFromColor(color);
  console.log(bodyParts)

  return (
    <div>
      <image src="assets/arm_blueA.png"></image>
    </div>
  );
}

export default App;
