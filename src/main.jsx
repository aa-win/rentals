import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App'; // Import main App component
import { Provider } from 'react-redux';
import store from './store'; // Import Redux store
import './index.css'; // Import global CSS

// Theme configuration with a beautiful color scheme
const theme = createTheme({
  palette: {
    mode: 'light', // Light theme mode
    background: {
      default: '#f9f9f9', // Default background color
    },
    primary: {
      main: '#1976d2', // Primary color (blue)
    },
    secondary: {
      main: '#ff4081', // Secondary color (pink)
    },
    error: {
      main: '#d32f2f', // Error color (red)
    },
    text: {
      primary: '#333', // Primary text color (dark gray)
      secondary: '#555', // Secondary text color (medium gray)
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Font family for the app
    h6: {
      fontWeight: 600,
      color: '#333', // Headline color
    },
    body1: {
      color: '#555', // Body text color
    },
  },
});

// Render the app with Redux store and theme provider
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
