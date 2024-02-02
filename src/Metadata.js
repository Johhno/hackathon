import React from 'react';

const Metadata = ({ jobOfferData }) => {
  return (
    <div>
      {jobOfferData ? (
        <div>
          <p><strong>Job Title:</strong> {jobOfferData.intitule}</p>
          <p><strong>Experience Required:</strong> {jobOfferData.experienceLibelle}</p>
          <p><strong>Date of Creation:</strong> {jobOfferData.dateCreation}</p>
          <p><strong>Department:</strong> {jobOfferData.departement}</p>
        </div>
      ) : (
        <p>Loading job offer data...</p>
      )}
    </div>
  );
};

export default Metadata;