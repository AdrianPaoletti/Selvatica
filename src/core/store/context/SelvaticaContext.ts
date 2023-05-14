import { createContext } from "react";

interface SelvaticaCreateContext {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isWhite: boolean;
  setIsWhite: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelvaticaContext = createContext<SelvaticaCreateContext>(
  {} as SelvaticaCreateContext
);
SelvaticaContext.displayName = "Selvatica Context";

export default SelvaticaContext;
