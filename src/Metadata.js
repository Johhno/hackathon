/**
 * @author Alex
 * Displays the Metadata from retrieved job offers.
 */

import React from 'react';

const Metadata = ({ jobOfferData }) => {
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