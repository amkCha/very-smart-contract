import React, { useMemo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useAccount, useBalance, useNetwork } from 'wagmi';
import { getNetworkPerChainId } from '../helpers/utils';

interface IProps {}

const Welcome: React.FC<IProps> = () => {
  const { address, connector, isConnected } = useAccount();
  const { chain } = useNetwork();
  const network = useMemo(() => getNetworkPerChainId(chain?.id), [chain?.id]);
  const { data: ethBalance } = useBalance({ address, watch: true });

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
              Your wallet is <b>{isConnected ? '' : 'NOT'}</b> connected
            </Typography>
            {isConnected && (
              <ul>
                <li>
                  Ethereum address:{' '}
                  <a
                    href={network.explorerURL + 'address/' + address}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {address}
                  </a>
                </li>
                <li>Chain: {`${network.name} (ID = ${chain?.id})`}</li>
                <li>Wallet provider: {connector?.name}</li>
                {ethBalance && (
                  <li>
                    Native currency balance:{' '}
                    {`${parseFloat(ethBalance.formatted).toFixed(2)} ${
                      network.nativeCurrencySymbol
                    }`}
                  </li>
                )}
              </ul>
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
              How to use Very Smart Contract?
            </Typography>
            <ol>
              <li>Do something</li>
              <li>Do something else</li>
              <li>Maybe something else</li>
              <li>Enjoy!</li>
            </ol>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Welcome;
