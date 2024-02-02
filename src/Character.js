/**
 * @author Alex, Yacine
 * Handles the displaying of the character via the color provided by top-level component App.js, and pick random bodyparts via pickBodyPartsFromColor(color)
 */

import React, { useEffect, useState } from 'react';
import pickBodyPartsFromColor from './controllers/bodyController';
import { Unstable_Grid2 as Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

//Body parts ass their own HTML tags
const Body = ({ imagePath }) => <img src={`/assets/${imagePath}`} alt="Body" />;
const Arm = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Arm" style={style} />;
const Leg = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Leg" style={style} />;
const Nose = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Nose" style={style} />;
const Mouth = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Mouth" style={style} />;
const Eye = ({ imagePath, style }) => <img src={`/assets/${imagePath}`} alt="Eye" style={style} />;

const Character = ({ color }) => {
  const [bodyParts, setBodyParts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataAndDrawCharacter();
  }, [color]); // Trigger fetch and redraw when color changes

  const fetchDataAndDrawCharacter = async () => {
    try {
      //console.log("Color in character", color)
      //Retrieves random body parts according to the retrieved color from top-level component App.js
      const fetchedBodyParts = await pickBodyPartsFromColor(color);
      setBodyParts(fetchedBodyParts);
      setLoading(false)

    } catch (error) {
      console.error('Error fetching or drawing character:', error);
    }
    finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!bodyParts) {
    // Render loading state or return null if you prefer
    return <p>Error loading character</p>;
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
