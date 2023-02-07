import { createContext } from "react";

export type ContextType = {
  title: string;
  setTitle: (title: string) => void;
};

export const Context = createContext<ContextType>({
  title: "",
  setTitle: () => { },
});