import React from 'react';
import { Grid } from '@mui/material';
import vscLogo from '../assets/img/vsc-logo.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Selector.css';

interface IProps {}

const Selector: React.FC<IProps> = () => {
  return (
    <>
      <Grid container spacing={4} height={'100vh'}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link to={'/'}>
            <img src={vscLogo} alt={'VSC logo'} />
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="center"
          className={'main-tile'}
          textAlign={'center'}
        >
          <Link to={'creator'} className={'main-link'}>
            I am an NFT creator
            <br />
            🧑‍🎨
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="center"
          className={'main-tile'}
          textAlign={'center'}
        >
          <Link
            to={'http://localhost:5173/'}
            target={'_blank'}
            className={'main-link'}
          >
            I am a ML scientist
            <br />
            👷‍♂️
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="center"
          className={'main-tile'}
          textAlign={'center'}
        >
          <Link to={'nfts'} className={'main-link'}>
            I am an NFT collector
            <br />
            👨‍💻
          </Link>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Selector;
