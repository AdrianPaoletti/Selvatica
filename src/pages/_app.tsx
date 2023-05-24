import { useEffect, useMemo } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Navbar from "selvatica/components/shared/Navbar/Navbar";
import SelvaticaContextProvider from "selvatica/core/store/context/SelvaticaContextProvider";

import "selvatica/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const {pathname, asPath} = useRouter();
  const pathNames = useMemo(() => (["servicios", "quienes-somos"]), []);

  useEffect(() => {
    if(asPath === "/#carousel" || pathNames.includes(pathname)){
      window.scrollTo(0, 0);
    }
  }, [asPath, pathNames, pathname]);

  return (
    <SelvaticaContextProvider>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </SelvaticaContextProvider>
  );
}
