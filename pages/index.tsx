import { useWeb3 } from "@providers/web3";
import type { NextPage } from "next";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { useEffect, useState } from "react";
import { BaseLayout } from "../components/ui";
import { Contract } from "@ethersproject/contracts";
import tokenAbi from "../json/token.json";
import { toast } from "react-toastify";
const Home: NextPage = () => {
  const { connect, account, disconnect, signer } = useWeb3();
  const [tokenAddress, setTokenAddress] = useState<any>(null);
  const [balance, setBalance] = useState<number>(0);
  const [recipentAddress, setRecipentAddress] = useState<string | null>(null);
  const [transferAmount, setTransferAmount] = useState<any>(0);
  const [tokenContract, setTokenContract] = useState<any>(null);
  const [decimal, setDecimal] = useState<any>(null);
  const onchageHandler = (e: any): any => {
    if (!account)
      return toast("Please connect your wallet!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    let address = e.target.value.trim();
    setTokenAddress(address);
  };
  useEffect(() => {
    (async () => {
      try {
        if (tokenAddress && account) {
          const contract = await new Contract(tokenAddress, tokenAbi, signer);
          if (contract) {
            setTokenContract(contract);
            const balance = await contract.balanceOf(account);
            setBalance(balance);
            const decimals = await contract.decimals();
            setDecimal(decimals);
          }
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [tokenAddress, account, signer]);

  const transferHandler = async () => {
    try {
      if (!account)
        return toast("Please connect your wallet!", {
          hideProgressBar: true,
          autoClose: 5000,
          type: "error",
        });

      if (!tokenContract && decimal)
        return toast("Please add token!", {
          hideProgressBar: true,
          autoClose: 5000,
          type: "error",
        });

      if (!recipentAddress) {
        return toast("Please add recipient Address Address!", {
          hideProgressBar: true,
          autoClose: 5000,
          type: "error",
        });
      }
      const tx = await tokenContract?.transfer(
        recipentAddress,
        parseUnits(transferAmount.toString(), decimal)
      );
      await tx.wait();
      return toast("token Transfer Successfully!", {
        hideProgressBar: true,
        autoClose: 5000,
        type: "success",
      });
    } catch (e: any) {
      return toast(e.reason || e.message || e.data.message, {
        hideProgressBar: true,
        autoClose: 5000,
        type: "error",
      });
    }
  };

  return (
    <>
      {/* @ts-ignore: Unreachable code error */}
      <BaseLayout>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-screen  lg:h-full sm:h-2/3" />
          </div>
          <div className="relative">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Transfer Balance
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                insert you token address!
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Token Address
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          disabled={!account}
                          value={tokenAddress}
                          onChange={(e) => onchageHandler(e)}
                          type="text"
                          name="name"
                          id="name"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder={
                            !account
                              ? "please connect wallet first"
                              : "token address"
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        your Token Balance
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          readOnly
                          value={balance}
                          type="text"
                          name="name"
                          id="name"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="100000"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Recipient Address
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={(e) => setRecipentAddress(e.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="address"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Enter Amount you want to Transfer
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={(e) => setTransferAmount(+e.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="amount"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      onClick={transferHandler}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Transfer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};
export default Home;
