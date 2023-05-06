import React, { useEffect, useMemo, useState } from 'react';
import {
  useAccount,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { getNetworkPerChainId } from '../../helpers/utils';
import erc20Abi from '../../config/abi/erc20Abi.json';
import { Button, CircularProgress } from '@mui/material';
import { Check } from '@mui/icons-material';

interface IProps {}

const Mint: React.FC<IProps> = () => {
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const network = useMemo(() => getNetworkPerChainId(chain?.id), [chain?.id]);

  const { config } = usePrepareContractWrite({
    address: network.vscCoin.address,
    abi: erc20Abi.abi,
    functionName: 'mint',
    enabled: Boolean(isConnected && network),
  });

  const { data, write, error: writeError } = useContractWrite(config);

  const { isSuccess: isTransactionSuccess, error: txError } =
    useWaitForTransaction({
      hash: data?.hash,
    });

  const mintTokens = () => {
    if (write) {
      setIsTransactionLoading(true);
      write();
    }
  };

  useEffect(() => {
    setIsTransactionLoading(false);
  }, [isTransactionSuccess]);

  useEffect(() => {
    if (txError || writeError) {
      setIsTransactionLoading(false);
    }
  }, [txError, writeError]);

  return (
    <>
      {isConnected && (
        <Button
          disabled={!write || isTransactionLoading}
          startIcon={
            isTransactionLoading && (
              <CircularProgress color="inherit" size={16} />
            )
          }
          endIcon={isTransactionSuccess && <Check />}
          onClick={() => mintTokens()}
          variant={'contained'}
        >
          Mint 100 {network.vscCoin.symbol}
        </Button>
      )}
    </>
  );
};

export default Mint;
