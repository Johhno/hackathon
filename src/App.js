import './App.css';
import pickBodyPartsFromColor from './controllers/bodyController';
import React from 'react';

function App() {
  const color = 'blue';
  const bodyParts = pickBodyPartsFromColor(color);
  //console.log(bodyParts)

  return (
    <div>
      <p>Image</p>
      <img src="/assets/arm_blueA.png"  alt="Arm"/>
    </div>
  );
}

export default App;
