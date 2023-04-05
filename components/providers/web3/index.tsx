import React, {
  createContext,
  FC,
  FunctionComponent,
  useCallback,
  useContext,
  useState,
} from "react";

import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { Contract, providers } from "ethers";
import {
  InitialState,
  //  loadContract
} from "./utils";
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      networkUrl:
        "https://mainnet.infura.io/v3/3158ce9d3c5d4a669a5764ebc561af4a",

      rpc: {
        5: "https://goerli.infura.io/v3/3158ce9d3c5d4a669a5764ebc561af4a",
        1: "https://mainnet.infura.io/v3/3158ce9d3c5d4a669a5764ebc561af4a",
      },
      chainId: 1,
    },
  },
};

let initialState = {
  provider: null || undefined,
  _web3Provider: null,
  account: null,
  chainId: null,
  signer: null,
  currentBlock: null,
  isLoading: true,
  contract: null,
  isInstalled: null,
};
let web3Modal: any;
let isInstalled: any;
if (typeof window !== "undefined") {
  // @ts-ignore
  isInstalled = window.ethereum?.isMetaMask || false;
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    // disableInjectedProvider: false,
    providerOptions, // required
    theme: {
      background: "rgb(0, 0, 0)",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      // border: "rgba(195, 195, 195, 0.14)",
      hover: "rgb(16, 26, 32)",
    } as any, // optionalDependencies
  });
}

export const Web3Context = createContext<any>(null);
const AppWeb3Provider: FunctionComponent = ({ children }: any) => {
  const [state, setState] = useState<InitialState>(initialState);
  const connect = async () => {
    const provider = await web3Modal?.connect();
    const _web3Provider = new providers.Web3Provider(provider);
    const signer = _web3Provider.getSigner();
    const account = await signer.getAddress();
    const network = await _web3Provider.getNetwork();
    const currentBlock = await _web3Provider.getBlockNumber();
    // const contract = await loadContract("NftMarket", provider, signer);

    setState({
      ...state,
      provider: provider,
      _web3Provider: _web3Provider,
      account: account,
      chainId: network.chainId,
      signer: signer,
      // contract: contract,
      isInstalled: isInstalled,
    });
  };
  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      setState({
        ...state,
        provider: null,
        _web3Provider: null,
        account: null,
        chainId: null,
        signer: null,
      });
      window.location.reload();
    },
    [state.provider]
  );
  React.useEffect(() => {
    if (state.provider?.on) {
      const handleAccountsChanged = (accounts: any) => {
        setState({
          ...state,
          account: accounts[0],
        });
      };
      const handleChainChanged = (_hexChainId: any) => {
        window.location.reload();
      };
      const handleDisconnect = (error: any) => {
        disconnect();
      };
      state.provider.on("accountsChanged", handleAccountsChanged);
      state.provider.on("chainChanged", handleChainChanged);
      state.provider.on("disconnect", handleDisconnect);
      return () => {
        // @ts-ignore
        if (state?.provider.removeListener) {
          state.provider.removeListener(
            "accountsChanged",
            handleAccountsChanged
          );
          state.provider.removeListener("chainChanged", handleChainChanged);
          state.provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [disconnect, state]);
  return (
    <Web3Context.Provider
      value={{
        account: state.account,
        signer: state.signer,
        connect,
        disconnect,
        contract: state.contract,
        isInstalled: isInstalled,
        chainId: state.chainId,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default AppWeb3Provider;

export function useWeb3() {
  return useContext(Web3Context);
}
