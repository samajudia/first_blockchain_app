import "../styles/globals.css";
import type { AppProps } from "next/app";

import { AppWeb3Provider } from "@providers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* @ts-ignore: Unreachable code error */}
      <AppWeb3Provider>
        <Component {...pageProps} />
        <ToastContainer />
      </AppWeb3Provider>
    </>
  );
}

export default MyApp;
