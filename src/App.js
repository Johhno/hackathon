/**
 * @author Alex
 * Handles the display of Homepage, along with fetching the necessary data from API and passing it to its children components, Metadata and Character?
 */

import React, { useState, useEffect } from 'react';
import Metadata from './Metadata';
import Character from './Character';
import fetchData from './controllers/Api';

function App() {
  const [color, setColor] = useState(null);
  const [jobOfferData, setJobOfferData] = useState(null);
  const [loading, setLoading] = useState(true);

  //Color map
  const colorMap = {
    D: 'blue',
    E: 'yellow',
    S: 'green',
  }

  //Retrieve API data
  const fetchJobData = async () => {
    try {
      // Check if job data is already available as safety measure
      if (!jobOfferData) {
        const data = await fetchData();
        setJobOfferData(data);

        //Match the experience to the color to be passsed to the character
        const newColor = data?.experienceExige ? colorMap[data.experienceExige] || null : null;
        setColor(newColor);
        setLoading(false)
      }
    } catch (error) {
      console.error('Error fetching job offer data:', error);
    } finally {
      setLoading(false);
    }
  };

  //Fetch once on component loading
  useEffect(() => {
    fetchJobData();
  }, []);

  //Retrieves the data at top-level component to pass data to children
  return (
    <div>
      <h1>Job Offer Information</h1>
      <Metadata jobOfferData={jobOfferData} />
      <hr />
      <h1>Your Character</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        color && <Character color={color} />
      )}
    </div>
  );
}

export default App;
