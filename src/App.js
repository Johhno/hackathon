import React, { useEffect, useState } from 'react';
import pickBodyPartsFromColor from './controllers/bodyController';

// Component for each body part
const Head = ({ imagePath }) => <img src={`/assets/${imagePath}`} alt="Head" />;
const Body = ({ imagePath }) => <img src={`/assets/${imagePath}`} alt="Body" />;
const Arm = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Arm" style={style} />;
const Leg = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Leg" style={style} />;
const Nose = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Nose" style={style} />;
const Mouth = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Mouth" style={style} />;
//const Detail = 

function App() {
  const color = 'blue';
  const [bodyParts, setBodyParts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBodyParts = await pickBodyPartsFromColor(color);
        setBodyParts(fetchedBodyParts);
        console.log(bodyParts)
      } catch (error) {
        console.error('Error fetching body parts:', error);
      }
    };

    fetchData();
  }, [color]);

  if (!bodyParts) {
    // Render loading state or return null if you prefer
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Your Character</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <Head imagePath={bodyParts.head} />
          <Body imagePath={bodyParts.body} />
          <Arm imagePath={bodyParts.arm1} style={{ position: 'absolute', top: 50, left: -20 }} />
          <Arm imagePath={bodyParts.arm2} style={{ position: 'absolute', top: 50, right: -20 }} />
          <Leg imagePath={bodyParts.leg1} style={{ position: 'absolute', top: 150, left: -10 }} />
          <Leg imagePath={bodyParts.leg2} style={{ position: 'absolute', top: 150, right: -10 }} />
          <Nose imagePath={bodyParts.nose} style={{ position: 'absolute', top: 80, left: -5 }} />
          <Mouth imagePath={bodyParts.mouth} style={{ position: 'absolute', top: 110, left: -10 }} />
        </div>
      </div>
    </div>
  );
}

export default App;
