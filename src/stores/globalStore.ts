import { createStore } from "zustand/vanilla";

export type GlobalStoreState = {
  cursorVariant: "default" | "text";
  cursorVariantSize: {
    default: number;
    text: number;
  };
};

export type GlobalStoreActions = {
  setCursorVariant: (variant: GlobalStore["cursorVariant"]) => void;
  setCursorVariantSize: (variant: GlobalStore["cursorVariantSize"]) => void;
};

export type GlobalStore = GlobalStoreState & GlobalStoreActions;

export const defaultInitState: GlobalStoreState = {
  cursorVariant: "default",
  cursorVariantSize: {
    default: 32,
    text: 64,
  },
};

export const initGlobalStore = (): GlobalStoreState => {
  return defaultInitState;
};

export const createGlobalStore = (
  initState: GlobalStoreState = defaultInitState,
) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,
    setCursorVariant: (variant) => set({ cursorVariant: variant }),
    setCursorVariantSize: (variant) => set({ cursorVariantSize: variant }),
  }));
};
