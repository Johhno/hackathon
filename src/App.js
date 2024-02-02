import React from 'react';
import Character from './Character';
import { Refresh } from './Refresh';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';

function App() {

  return (
    <Grid container style={{ height: '100vh' }}>

      <Grid item xs={12} sm={2} style={{ backgroundColor: 'lightgrey' }}>
        <h1>Offres d'emplois</h1>
        <Refresh />
      </Grid>
      {/* 2/3 de la page */}
      <Grid item xs={12} sm={10}>
        <Character />
      </Grid>
    </Grid>


  );
}

export default App;
