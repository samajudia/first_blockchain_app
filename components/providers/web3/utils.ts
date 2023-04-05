import { Contract, providers } from "ethers";

export type InitialState = {
  provider?: providers.Web3Provider | null;
  _web3Provider?: any;
  account?: string | null;
  chainId?: number | null;
  signer?: any;
  currentBlock?: any;
  contract?: Contract | null;
  isInstalled: any;
};

export type Web3State = {
  isLoading: boolean;
} & InitialState;

const NETWORK_ID: string | undefined = process.env.NEXT_PUBLIC_NETWORK_ID;
