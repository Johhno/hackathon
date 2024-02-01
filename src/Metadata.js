import React, { useEffect, useState } from 'react';
import fetchData from './controllers/Api';

const Metadata = () => {
  const [jobOfferData, setJobOfferData] = useState(null);

  const fetchJobData = async () => {
    try {
      const data = await fetchData();
      setJobOfferData(data);
      console.log(data);
      console.log("Data:", jobOfferData);
    } catch (error) {
      console.error('Error fetching job offer data:', error);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <div>
      {jobOfferData ? (
        <div>
          <p>Job Title: {jobOfferData.intitule}</p>
          <p>Experience Required: {jobOfferData.experienceLibelle}</p>
          <p>Date of Creation: {jobOfferData.dateCreation}</p>
          <p>Department: {jobOfferData.departement}</p>
        </div>
      ) : (
        <p>Loading job offer data...</p>
      )}
    </div>
  );
};

export default Metadata;
