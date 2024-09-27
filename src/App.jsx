import React from 'react';
import { Container, Typography } from '@mui/material';
import ItemList from './components/ItemList'; // Import ItemList component

const App = () => {
  return (
    <Container
      sx={{
        display: 'flex', // Flexbox layout
        flexDirection: 'column', // Vertical alignment
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        minHeight: '100vh' // Full viewport height
      }}
    >
      <Typography variant="h4" gutterBottom>
        Rentals
      </Typography>
      <ItemList />
    </Container>
  );
};

export default App; // Export App component
