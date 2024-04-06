// WalletContext.tsx
import React, { createContext, useContext, useState } from "react";
import * as web3 from "@solana/web3.js";

const WalletContext = createContext<web3.PublicKey | null>(null);

export const useWalletContext = () => useContext(WalletContext);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [publicKey, setPublicKey] = useState<web3.PublicKey | null>(null);

  return (
    <WalletContext.Provider value={publicKey}>
      {children}
    </WalletContext.Provider>
  );
};
