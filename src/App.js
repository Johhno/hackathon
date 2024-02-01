import React, { useState, useEffect } from 'react';
import Metadata from './Metadata';
import Character from './Character';
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
    <div>
      <h1>Job Offer Information</h1>
      <Metadata jobOfferData={jobOfferData} />
      <hr />
      <h1>Your Character</h1>
      {color && <Character color={color} />}
    </div>
  );
}

export default App;
