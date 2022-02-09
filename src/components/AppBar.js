import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 3 }}
              >    
              <HomeIcon />
           </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            INVENTORY
          </Typography>
          <Avatar src='/logo.jpg' className='classes.avatar' />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
