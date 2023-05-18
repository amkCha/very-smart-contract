import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ConnectKitButton } from 'connectkit';

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            backgroundColor: '#3030ff',
          }}
        >
          <Toolbar style={{ display: 'flex', justifyContent: 'end' }}>
            <ConnectKitButton />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
