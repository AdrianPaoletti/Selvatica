import React, { useState } from "react";

import SelvaticaContext from "./SelvaticaContext";

interface SelvaticaProviderProps {
  children: JSX.Element;
}

const SelvaticaContextProvider = ({ children }: SelvaticaProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isWhite, setIsWhite] = useState<boolean>(true);
  return (
    <SelvaticaContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isWhite,
        setIsWhite,
      }}
    >
      {children}
    </SelvaticaContext.Provider>
  );
};

export default SelvaticaContextProvider;
