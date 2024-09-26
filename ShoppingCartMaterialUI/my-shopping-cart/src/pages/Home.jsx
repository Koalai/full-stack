import { Box, Button, Typography } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(../assets/background.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box mr={18}>
        <Typography variant="h2" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
          Let&apos;s go shopping
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4B5563',
            color: '#D1D5DB',
            fontWeight: 'semibold',
            borderRadius: 'md',
            fontSize: '1.5rem',
            padding: '8px',
            marginTop: '16px',
            '&:hover': {
              backgroundColor: '#F8FAFC',
              color: '#4B5563',
            },
          }}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
