import React, { useEffect, useState } from 'react';
import pickBodyPartsFromColor from './controllers/bodyController';

const Body = ({ imagePath }) => <img src={`/assets/${imagePath}`} alt="Body" />;
const Arm = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Arm" style={style} />;
const Leg = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Leg" style={style} />;
const Nose = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Nose" style={style} />;
const Mouth = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Mouth" style={style} />;
const Eye = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Eye" style={style} />;

const Character = ({ color }) => {
  const [bodyParts, setBodyParts] = useState(null);

  useEffect(() => {
    const fetchDataAndDrawCharacter = async () => {
      try {
        console.log("Color in cahracter", color)
        const fetchedBodyParts = await pickBodyPartsFromColor(color);
        setBodyParts(fetchedBodyParts);
        
      } catch (error) {
        console.error('Error fetching or drawing character:', error);
      }
    };

    fetchDataAndDrawCharacter();
  }, [color]); // Trigger fetch and redraw when color changes

  return (
    <div>
      <h2>Character Preview</h2>
      {bodyParts ? (
        <div>
          {/* Render your character using bodyParts */}
          <Body imagePath={bodyParts.body} />
                    <Eye imagePath={bodyParts.eye1} style={{ position: 'absolute', top: 20, left: 0 }} />
                    <Eye imagePath={bodyParts.eye2} style={{ position: 'absolute', top: 20, left: -50 }} />
                    <Arm imagePath={bodyParts.arm1} style={{ position: 'absolute', top: 50, left: -20 }} />
                    <Arm imagePath={bodyParts.arm2} style={{ position: 'absolute', top: 50, right: -20 }} />
                    <Leg imagePath={bodyParts.leg1} style={{ position: 'absolute', top: 150, left: -10 }} />
                    <Leg imagePath={bodyParts.leg2} style={{ position: 'absolute', top: 150, right: -10 }} />
                    <Nose imagePath={bodyParts.nose} style={{ position: 'absolute', top: 80, left: -5 }} />
                    <Mouth imagePath={bodyParts.mouth} style={{ position: 'absolute', top: 110, left: -10 }} />
          
          {/* Add other body parts here */}
        </div>
      ) : (
        <p>Loading character data...</p>
      )}
    </div>
  );
};

export default Character;
