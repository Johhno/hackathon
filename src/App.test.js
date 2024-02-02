import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./controllers/Api', () => ({
  __esModule: true,
  default: jest.fn(async () => ({
    intitule: 'Mock Job',
    experienceLibelle: 'Mock Experience',
    dateCreation: '2022-10-01',
    departement: '69003',
    experienceExige: 'D',
  })),
}));

describe('App component', () => {
  it('renders loading state and then displays character with mock information', async () => {
    render(<App />);

    // Check if loading state is displayed initially
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the character to be displayed
    await waitFor(() => screen.getByText('Your Character'));

    // Check if character is displayed
    expect(screen.getByText('Your Character')).toBeInTheDocument();

  });
});
