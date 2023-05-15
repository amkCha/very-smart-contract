import React, { useEffect, useMemo, useState } from 'react';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import {
  useAccount,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { getNetworkPerChainId } from '../../helpers/utils';
import vscAbi from '../../config/abi/VSC.json';
import { Check } from '@mui/icons-material';
import { useDebounce } from 'use-debounce';
import Footer from '../Footer';
import vscLogo from '../../assets/img/vsc-logo.png';
import { Link } from 'react-router-dom';

interface IProps {}

const Creator: React.FC<IProps> = () => {
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const network = useMemo(() => getNetworkPerChainId(chain?.id), [chain?.id]);

  const [collectionAddress, setCollectionAddress] = useState<string>('');
  const [debounceCollectionAddress] = useDebounce(collectionAddress, 500);

  const { config } = usePrepareContractWrite({
    address: network.VSC,
    abi: vscAbi.abi,
    functionName: 'approveCollection',
    args: ['0x465C81b66F4aF6e0A8535734a7CD15e1aa5A4788'],
    enabled: Boolean(isConnected && network && debounceCollectionAddress),
  });

  const { data, write, error: writeError } = useContractWrite(config);

  const { isSuccess: isTxSuccess, error: txError } = useWaitForTransaction({
    hash: data?.hash,
  });

  const approveCollection = () => {
    if (write) {
      setIsTransactionLoading(true);
      write();
    }
  };

  useEffect(() => {
    setIsTransactionLoading(false);
  }, [isTxSuccess]);

  useEffect(() => {
    if (txError || writeError) {
      setIsTransactionLoading(false);
    }
  }, [txError, writeError]);

  return (
    <>
      <Grid container spacing={2} padding={2} height={'100vh'}>
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
        <Grid item xs={4}></Grid>
        <Grid item xs={4} alignItems={'center'}>
          <TextField
            required
            id="standard-basic"
            label="Collection address"
            helperText="0x..."
            variant="standard"
            onChange={(e) => setCollectionAddress(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} alignItems={'center'}>
          <Button
            disabled={
              !write || debounceCollectionAddress === '' || isTransactionLoading
            }
            startIcon={
              isTransactionLoading && (
                <CircularProgress color="inherit" size={16} />
              )
            }
            endIcon={isTxSuccess && <Check />}
            onClick={() => approveCollection()}
            variant={'contained'}
            fullWidth
          >
            Approve collection
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Creator;
