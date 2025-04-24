import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">🧠 Feedback App</Typography>
        </Toolbar>
      </AppBar>

      <Container
  maxWidth="md"
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 64px - 60px)', // height minus header/footer
    py: 4,
  }}
>
  <Box
    sx={{
      width: '100%',
      maxWidth: 500,
      bgcolor: 'white',
      borderRadius: 3,
      boxShadow: 3,
      p: 4,
    }}
  >
    {children}
  </Box>
</Container>


      <Box component="footer" sx={{ textAlign: 'center', py: 2, bgcolor: '#e0e0e0' }}>
        <Typography variant="body2">© {new Date().getFullYear()} Built with ❤️</Typography>
      </Box>
    </Box>
  );
};

export default Layout;
