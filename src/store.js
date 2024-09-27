import { configureStore } from '@reduxjs/toolkit'; // Import Redux Toolkit
import itemsReducer from './features/itemsSlice'; // Import items reducer

// Configure the Redux store
const store = configureStore({
    reducer: {
        items: itemsReducer, // Set items reducer in the store
    },
});

export default store; // Export the configured store
