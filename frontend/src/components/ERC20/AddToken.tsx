import React, { useMemo } from 'react';
import { Button } from '@mui/material';
import { useAccount, useNetwork } from 'wagmi';
import { getNetworkPerChainId } from '../../helpers/utils';

interface IProps {}

const AddToken: React.FC<IProps> = () => {
  const { chain } = useNetwork();
  const network = useMemo(() => getNetworkPerChainId(chain?.id), [chain?.id]);
  const { connector } = useAccount();

  const addToken = async () => {
    const callback = (err: any, added: any) => {
      if (err || 'error' in added) {
        alert('There was an issue while adding the token');
      }
    };

    const dmoAsset = {
      type: 'ERC20',
      options: {
        address: network.vscCoin.address,
        symbol: network.vscCoin.symbol,
        decimals: network.vscCoin.decimals,
      },
    };

    if (connector) {
      const provider = await connector.getProvider();
      provider.send(
        {
          method: 'wallet_watchAsset',
          params: dmoAsset,
        },
        callback,
      );
    }
  };

  return (
    <>
      <Button onClick={() => addToken()} variant={'outlined'}>
        Add VSC to your wallet
      </Button>
    </>
  );
};

export default AddToken;
