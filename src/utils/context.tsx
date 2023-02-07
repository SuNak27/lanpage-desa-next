import React, { createContext, useContext, useReducer } from "react";
import { Data } from "./dataInterface";

type ContextType = {
  state: State;
  commit: React.Dispatch<Action>;
};

type State = {
  title: string;
  tag:
  | "idle"
  | "loading"
  | "success"
  | "empty"
  | "error";
  data: Data | null;
  errorMessage: string;
};

type Action =
  | { type: "FETCH" }
  | { type: "CHANGE_TITLE"; payload: string }
  | { type: "SUCCESS"; payload: Data }
  | { type: "EMPTY" }
  | { type: "ERROR"; payload: string };

export const Context = createContext<ContextType>({
  state: {
    title: "Beranda",
    tag: "idle",
    data: null,
    errorMessage: "",
  },
  commit() { },
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: State = {
    title: "Beranda",
    tag: "idle",
    data: null,
    errorMessage: "",
  };

  const reducer = (state: State, action: Action): State => {
    switch (state.tag) {
      case "idle": {
        switch (action.type) {
          case "FETCH": {
            return {
              ...state,
              tag: "loading",
            };
          }
          case "CHANGE_TITLE": {
            return {
              ...state,
              title: action.payload,
            };
          }
          default: {
            return state;
          }
        }
      }
      case "loading": {
        switch (action.type) {
          case "SUCCESS": {
            return {
              ...state,
              tag: "success",
              data: action.payload,
            };
          }
          case "ERROR": {
            return {
              ...state,
              tag: "error",
              data: null,
              errorMessage: action.payload,
            };
          }
          case "EMPTY": {
            return {
              ...state,
              tag: "empty",
              data: null,
            };
          }
          default:
            return state;
        }
      }
      case "success": {
        switch (action.type) {
          case "FETCH": {
            return {
              ...state,
              tag: "loading",
            };
          }
          default:
            return state;
        }
      }
      case "empty": {
        switch (action.type) {
          case "FETCH": {
            return {
              ...state,
              tag: "loading",
            };
          }
          default:
            return state;
        }
      }
      case "error": {
        switch (action.type) {
          case "FETCH": {
            return {
              ...state,
              tag: "loading",
            };
          }
          default:
            return state;
        }
      }
      default:
        return state;
    }
  };

  const [state, commit] = useReducer(reducer, initialState);

  const contextValue = {
    state,
    commit,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};