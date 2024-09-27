import React, { useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';

const ItemCard = ({ item }) => {
    const [isRented, setIsRented] = useState(false); // Track rental status
    const [openDialog, setOpenDialog] = useState(false); // Dialog visibility

    const handleRentClick = () => setOpenDialog(true); // Open dialog
    const handleCloseDialog = (confirm) => {
        if (confirm) setIsRented(true); // Update rental status
        setOpenDialog(false); // Close dialog
    };

    const styles = {
        card: {
            backgroundColor: isRented ? '#ffebee' : '#ffffff',
            border: isRented ? 'none' : '1px solid #ccc',
            borderRadius: '12px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            width: '300px',
            maxWidth: '100%',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'scale(1)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
            },
        },
        media: {
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            objectFit: 'cover',
        },
        title: {
            color: isRented ? '#d32f2f' : '#333',
            fontWeight: '600',
            mb: 1,
        },
        price: {
            color: isRented ? '#757575' : '#555',
            mb: 1,
        },
        button: {
            backgroundColor: '#3972b8',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '6px 14px',
            textTransform: 'none',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
                backgroundColor: '#365fbf',
                transform: 'scale(1)',
            },
        },
    };

    return (
        <>
            <Card sx={styles.card}>
                <CardMedia
                    component="img"
                    height="180"
                    image={item.imageUrl}
                    alt={item.name}
                    sx={styles.media}
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={styles.title}>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" sx={styles.price}>
                        {item.price}
                    </Typography>
                    {isRented ? (
                        <Typography variant="body2" color="error" sx={{ fontWeight: '600' }}>
                            Already Rented
                        </Typography>
                    ) : (
                        <Button
                            variant="contained"
                            sx={styles.button}
                            onClick={handleRentClick}
                        >
                            Rent Now
                        </Button>
                    )}
                </CardContent>
            </Card>

            <Dialog open={openDialog} onClose={() => handleCloseDialog(false)}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure to rent "{item.name}"?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleCloseDialog(true)} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ItemCard; // Export component
