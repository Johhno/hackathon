import React, { useEffect, useState } from 'react';
import pickBodyPartsFromColor from './controllers/bodyController';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

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

    if (!bodyParts) {
        // Render loading state or return null if you prefer
        return <p>Loading...</p>;
    }

    return (
        <Grid container justifyContent="center">
          <Grid item>
            <Paper elevation={3} style={{ padding: '20px', width: '400px', height: '600px' }}>
              <div>
                <Grid container direction="column" alignItems="center">
                  <Grid item container justifyContent="center">
                    <Grid item>
                      <Eye imagePath={bodyParts.eye1} />
                    </Grid>
                    <Grid item>
                      <Eye imagePath={bodyParts.eye2} />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Nose imagePath={bodyParts.nose} />
                  </Grid>
                  <Grid item>
                    <Mouth imagePath={bodyParts.mouth} />
                  </Grid>
                  <Grid item container justifyContent="center">
                    <Grid item spacing={0}>
                      <Arm imagePath={bodyParts.arm1} style={{ transform: 'scaleX(-1)' }} />
                    </Grid>
                    <Grid item spacing={0} className="body-image">
                      <Body imagePath={bodyParts.body} zeroMinWidth />
                    </Grid>
                    <Grid item spacing={0}>
                      <Arm imagePath={bodyParts.arm2} />
                    </Grid>
                  </Grid>
                  <Grid item container justifyContent="center"  className="leg-image">
                    <Grid item spacing={0}>
                      <Leg imagePath={bodyParts.leg1} style={{ transform: 'scaleX(-1)' }} />
                    </Grid>
                    <Grid item spacing={0}>
                      <Leg imagePath={bodyParts.leg2} />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>

    );
}

export default Character;
