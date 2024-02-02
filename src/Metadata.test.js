import React from 'react';
import { render, screen } from '@testing-library/react';
import Metadata from './Metadata';

describe('Metadata component', () => {
  it('renders loading state when jobOfferData is null', () => {
    render(<Metadata jobOfferData={null} />);

    expect(screen.getByText('Loading job offer data...')).toBeInTheDocument();
    // You can add more assertions if needed
  });

  it('renders job offer data when jobOfferData is provided', () => {
    const jobOfferData = {
      intitule: 'Mock Job',
      experienceLibelle: 'Mock Experience',
      dateCreation: '2022-10-01',
      departement: '69003',
    };

    render(<Metadata jobOfferData={jobOfferData} />);

    expect(screen.getByText('Job Title: Mock Job')).toBeInTheDocument();
    expect(screen.getByText('Experience Required: Mock Experience')).toBeInTheDocument();
    expect(screen.getByText('Date of Creation: 2022-10-01')).toBeInTheDocument();
    expect(screen.getByText('Department: 69003')).toBeInTheDocument();
  });
});
