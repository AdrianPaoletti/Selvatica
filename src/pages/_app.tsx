import type { AppProps } from "next/app";

import Navbar from "selvatica/components/shared/Navbar/Navbar";
import SelvaticaContextProvider from "selvatica/core/store/context/SelvaticaContextProvider";

import "selvatica/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SelvaticaContextProvider>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </SelvaticaContextProvider>
  );
}
