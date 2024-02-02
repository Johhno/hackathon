import React, { useState, useEffect } from 'react';
import Metadata from './Metadata';
import Character from './Character';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import fetchData from './controllers/Api';


function App() {
  // Retrieve stored color or use the default
  const [color, setColor] = useState(null);
  const [jobOfferData, setJobOfferData] = useState(null);

  // Map experienceExige to corresponding color
  const colorMap = {
    D: 'blue',
    E: 'yellow',
    S: 'green',
  };

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const data = await fetchData();
        setJobOfferData(data);

        // Set color based on experienceExige value
        const newColor = data?.experienceExige ? colorMap[data.experienceExige] || 'blue' : 'blue';
        setColor(newColor);
      } catch (error) {
        console.error('Error fetching job offer data:', error);
      }
    };

    fetchJobData();
  }, []);

  return (
    <Grid container style={{ height: '100vh' }}>

      <Grid item xs={12} sm={2} style={{ backgroundColor: 'lightgrey' }}>
         <h1>Job Offer Information</h1>

        <div>
          <Metadata jobOfferData={jobOfferData} />
          <hr />
          <h5>Tangent-Tech</h5>

        </div>
      </Grid>
      {/* 2/3 de la page */}
      <Grid item xs={12} sm={10}>
        {color && <Character color={color} />}
      </Grid>
    </Grid>
    )
  }
export default App;
