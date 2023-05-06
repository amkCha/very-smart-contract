import React, { useMemo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useAccount, useBalance, useNetwork } from 'wagmi';
import { getNetworkPerChainId } from '../../helpers/utils';
import Transfer from './Transfer';
import Mint from './Mint';
import AddToken from './AddToken';

interface IProps {}

const ERC20: React.FC<IProps> = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const network = useMemo(() => getNetworkPerChainId(chain?.id), [chain?.id]);
  const { data: vscCoinBalance } = useBalance({
    address,
    token: network.vscCoin.address,
    watch: true,
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            m: 5,
          }}
        >
          <Paper elevation={0}>
            <Typography variant="h5" component="div" gutterBottom>
              {isConnected ? (
                <>{network.vscCoin.name}</>
              ) : (
                'Connect your wallet to play with the VSCCoin'
              )}
            </Typography>
            {isConnected && (
              <>
                <ul>
                  <li>
                    VSCCoin address:{' '}
                    <a
                      href={
                        network.explorerURL +
                        'address/' +
                        network.vscCoin.address
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {network.vscCoin.address}
                    </a>
                  </li>
                  <li>
                    VSCCoin balance:{' '}
                    {`${vscCoinBalance?.formatted} ${network.vscCoin.symbol}`}
                  </li>
                </ul>
                <AddToken />
              </>
            )}
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            m: 5,
          }}
        >
          <Paper elevation={0}>
            <Typography variant="h5" component="div" gutterBottom>
              {isConnected && <>{`Interact with ${network.vscCoin.symbol}`}</>}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Mint />
              </Grid>
              <Grid item xs={6}>
                <Transfer />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ERC20;
