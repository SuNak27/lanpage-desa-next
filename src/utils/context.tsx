import { createContext, useContext, useReducer } from "react";
import { InfoDesa, MasterData, Data } from "./dataInterface";

type State = {
  tag: "idle" | "loading" | "success" | "error" | "empty";
  title: string;
  data: Data | null;
  errorMessage: string;
}

type ContextType = {
  state: State;
  commit: React.Dispatch<Action>;
};

type Action =
  | { type: "FETCH" }
  | { type: "SUCCESS"; payload: Data }
  | { type: "ERROR"; payload: string }
  | { type: "CHANGE_TITLE"; payload: string }
  | { type: "EMPTY" };

export const Context = createContext<ContextType>({
  state: {
    tag: "idle",
    title: "Beranda",
    data: null,
    errorMessage: "",
  },
  commit() { },
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: State = {
    tag: "idle",
    title: "Beranda",
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
            console.log(action.payload, "action.payload");
            // Merge data payload with state data
            const prevState = state.data;
            const newState = action.payload;
            const mergedData = {
              ...prevState,
              ...newState,
            };

            return {
              ...state,
              tag: "success",
              data: mergedData,
            };
          }
          case "EMPTY": {
            return {
              ...state,
              tag: "empty",
            };
          }
          case "ERROR": {
            return {
              ...state,
              tag: "error",
              errorMessage: action.payload,
            };
          }
          default:
            return state;
        }
      }
      case "success": {
        switch (action.type) {
          case "FETCH": {
            console.log("fetch");

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
          case "CHANGE_TITLE": {
            return {
              ...state,
              title: action.payload,
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
          case "CHANGE_TITLE": {
            return {
              ...state,
              title: action.payload,
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
