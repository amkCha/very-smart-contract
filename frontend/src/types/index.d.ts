import { Address } from 'wagmi';

export interface Network {
  name: string;
  chainId: number;
  nativeCurrencySymbol: string;
  explorerURL: string;
  vscCoin: ERC20;
}

interface ERC20 {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
}
