import networks from './../config/networks.json';
import { ERC20, Network } from '../types';

const defaultVSCCoin: ERC20 = {
  address: '0x0',
  name: '',
  symbol: '',
  decimals: 0,
};

const defaultNetwork: Network = {
  name: '',
  chainId: 0,
  nativeCurrencySymbol: '',
  explorerURL: '',
  vscCoin: defaultVSCCoin,
};

export const getNetworkPerChainId = (chainId?: number): Network => {
  const network = networks.find((network) => network.chainId === chainId);

  if (chainId && network) {
    return network as Network;
  }

  return defaultNetwork;
};
