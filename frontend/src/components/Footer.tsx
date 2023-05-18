import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface IProps {}

const Footer: React.FC<IProps> = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#3030ff',
        borderTop: 'solid',
        color: '#ffffff',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ textAlign: 'center', m: 2 }}>
          <Typography>
            VSC Team © 2023 - {`${new Date().getFullYear()}`}
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
