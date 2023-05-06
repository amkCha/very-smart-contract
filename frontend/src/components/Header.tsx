import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RocketIcon from '@mui/icons-material/Rocket';
import { ConnectKitButton } from 'connectkit';

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <RocketIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Very Smart Contract
            </Typography>
            <ConnectKitButton />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
