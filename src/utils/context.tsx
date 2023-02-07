import { createContext } from "react";
import { InfoDesa, MasterData, TentangKami } from "./dataInterface";

type ContextType = {
  title: string;
  setTitle: (title: string) => void;
  masterData: MasterData | null;
  setMasterData: (masterData: any) => void;
  desa: InfoDesa | null;
  setDesa: (desa: any) => void;
};

export const Context = createContext<ContextType>({
  title: "",
  setTitle: () => { },
  masterData: null,
  setMasterData: () => { },
  desa: null,
  setDesa: () => { },
});

export const AboutContext = createContext<TentangKami | null>(null);