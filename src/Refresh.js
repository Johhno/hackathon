import React from 'react';
import Button from '@mui/material/Button';

const Refresh = ({ onClick }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#" onClick={onClick}>
        <Button variant="contained" color="primary">
          Refresh
        </Button>
      </a>
    </nav>
  );
}

export default Refresh;

