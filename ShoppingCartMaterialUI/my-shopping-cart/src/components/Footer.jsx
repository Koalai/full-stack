
import { Box, Typography, TextField, Button, Grid2 } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '80%',
        paddingX: { xs: 2, md: 10 },
        fontWeight: 'semibold',
        backgroundColor: '#E0E0E0',
        marginX: 'auto',
        marginY: 2,
        paddingY: 3,
        justifyContent: 'space-between',
      }}
    >
     <Grid2 container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid2 xs={12} md={4}>
          <Typography variant="h6">SHOPPING ONLINE</Typography>
          <Typography>Returns</Typography>
          <Typography>Shipping</Typography>
          <Typography>Gift Cards</Typography>
          <Typography>Click and Collect</Typography>
          <Typography>Shop The App</Typography>
        </Grid2>
        <Grid2 xs={12} md={4}>
          <Typography variant="h6">HELP CENTRE</Typography>
          <Typography>Contact Us</Typography>
          <Typography>Stores</Typography>
          <Typography>FAQ</Typography>
        </Grid2>
        <Grid2 xs={12} md={4}>
          <Typography variant="h6">ABOUT US</Typography>
          <Typography>Our Company</Typography>
          <Typography>FAQ</Typography>
          <Typography>Recruitment</Typography>
        </Grid2>
      </Grid2>
      <Box sx={{ maxWidth: '400px', marginTop: { xs: 2, md: 0 } }}>
        <Typography variant="h5">Join our membership to get 15% sales off</Typography>
        <Typography>
          Become our members and you can receive 10% off* your first full price
          purchase. Discover a world of exclusive rewards and VIP benefits.
        </Typography>
        <TextField
          id="emailRegis"
          variant="outlined"
          placeholder="Enter your email"
          sx={{ marginTop: 1, marginRight: 1, width: '100%' }}
        />
        <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>
          Join
        </Button>
      </Box>
    </Box>
  );
};
