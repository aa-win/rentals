import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [ // Sample items for the marketplace
        { id: 1, name: 'Apartment in NYC', price: '$3000/month', imageUrl: 'https://www.zillowstatic.com/bedrock/app/uploads/sites/26/NYC-apartment-for-3000-with-large-windows-b6aa46.jpg', available: true },
        { id: 2, name: 'House in LA', price: '$4500/month', imageUrl: 'https://images1.forrent.com/i2/tBI4B6ckQQN3KNzq8MJpAKf8b0u-yNnvnRzVtXSeblM/117/image.jpg', available: false },
        { id: 3, name: 'Condo in Miami', price: '$2000/month', imageUrl: 'https://images1.apartments.com/i2/VylUCBkKv8OTXaIiYcmamyajY6X8NINxBj823zFeDBk/117/image.jpg', available: true },
        { id: 4, name: 'Cabin in Colorado', price: '$1800/month', imageUrl: 'https://cdn.landsearch.com/listings/4CWQ9/small/nederland-co-126985852.jpg', available: true },
        { id: 5, name: 'Cottage in the Hamptons', price: '$5000/month', imageUrl: 'https://photos.zillowstatic.com/fp/8652cfed3e1fb2c2397523aef19ebd89-p_e.jpg', available: false },
        { id: 6, name: 'Penthouse in Chicago', price: '$6000/month', imageUrl: 'https://www.downtownapartmentcompany.com/wp-content/uploads/2024/09/02_350NCanalSt_Ph3102_165_LivingRoom_Large-768x512.jpg', available: true },
        { id: 7, name: 'Modern Condo in Seattle', price: '$2500/month', imageUrl: 'https://ssl.cdn-redfin.com/photo/1/islphoto/247/genIslnoResize.2293247_2.jpg', available: false },
        { id: 8, name: 'Cozy Studio', price: '$1800/month', imageUrl: 'https://i.pinimg.com/originals/01/78/10/01781082e02b6e318b042b07407e4c88.jpg', available: true }
    ],
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {}, // No reducers defined
});

export const selectItems = (state) => state.items.items; // Selector for items

export default itemsSlice.reducer; // Export reducer
