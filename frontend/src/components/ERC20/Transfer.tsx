import React, { useEffect, useMemo, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import {
  useAccount,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { getNetworkPerChainId } from '../../helpers/utils';
import erc20Abi from '../../config/abi/erc20Abi.json';
import { parseUnits } from 'ethers/lib/utils';
import { Check } from '@mui/icons-material';

interface IProps {}

const Transfer: React.FC<IProps> = () => {
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const network = useMemo(() => getNetworkPerChainId(chain?.id), [chain?.id]);

  const { config } = usePrepareContractWrite({
    address: network.vscCoin.address,
    abi: erc20Abi.abi,
    functionName: 'transfer',
    args: [
      '0x809e815596AbEB3764aBf81BE2DC39fBBAcc9949',
      parseUnits('10', network.vscCoin.decimals),
    ],
    enabled: Boolean(isConnected && network),
  });

  const { data, write, error: writeError } = useContractWrite(config);

  const { isSuccess: isTransactionSuccess, error: txError } =
    useWaitForTransaction({
      hash: data?.hash,
    });

  const transferTokens = () => {
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
          onClick={() => transferTokens()}
          startIcon={
            isTransactionLoading && (
              <CircularProgress color="inherit" size={16} />
            )
          }
          endIcon={isTransactionSuccess && <Check />}
          variant={'contained'}
        >
          Transfer 10 {network.vscCoin.symbol}
        </Button>
      )}
    </>
  );
};

export default Transfer;
