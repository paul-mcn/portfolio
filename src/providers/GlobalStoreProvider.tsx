"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type GlobalStore, createGlobalStore, initGlobalStore } from "../stores/globalStore";

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>;

export const GlobalStoreContext = createContext<GlobalStoreApi | undefined>(
  undefined,
);

export interface GlobalStoreProviderProps {
  children: ReactNode;
}

export const GlobalStoreProvider = ({ children }: GlobalStoreProviderProps) => {
  const storeRef = useRef<GlobalStoreApi>(undefined);
  if (!storeRef.current) {
    storeRef.current = createGlobalStore(initGlobalStore());
  }
  return (
    <GlobalStoreContext.Provider value={storeRef.current}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalStore = <T,>(selector: (store: GlobalStore) => T): T => {
  const globalStoreContext = useContext(GlobalStoreContext);
  if (!globalStoreContext) {
    throw new Error("useGlobalStore must be used within a GlobalStoreProvider");
  }
  return useStore(globalStoreContext, selector);
};
