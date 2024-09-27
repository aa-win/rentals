import React from 'react';
import { Grid, List, ListItem, ListItemText } from '@mui/material';
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { selectItems } from '../features/itemsSlice';

const ItemList = ({ layout }) => {
    const items = useSelector(selectItems); // Get items from store

    if (layout === 'list') {
        return (
            <List>
                {items.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        );
    }

    return (
        <Grid container spacing={3}>
            {items.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                    <ItemCard item={item} /> {/* Render item card */}
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemList; // Export component
