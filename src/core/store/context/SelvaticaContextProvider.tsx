import React, { useState } from "react";

import SelvaticaContext from "./SelvaticaContext";

interface SelvaticaProviderProps {
  children: JSX.Element;
}

const SelvaticaContextProvider = ({ children }: SelvaticaProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <SelvaticaContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </SelvaticaContext.Provider>
  );
};

export default SelvaticaContextProvider;
