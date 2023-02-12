import { api } from "@/utils/apiService";
import { Statistik } from "@/utils/dataInterface";
import { createContext, useContext, useEffect, useReducer } from "react";

type State = {
  tag: "idle" | "loading" | "success" | "error" | "empty";
  data: Statistik | null;
  errorMessage: string;
}

type Action =
  | { type: "FETCH" }
  | { type: "SUCCESS"; payload: Statistik }
  | { type: "ERROR"; payload: string }
  | { type: "EMPTY" };

type StatistikContextType = {
  state: State;
  commit: React.Dispatch<Action>;
};

export const StatistikContext = createContext<StatistikContextType>({
  state: {
    tag: "idle",
    data: null,
    errorMessage: "",
  },
  commit() { },
});

const initialState: State = {
  tag: "idle",
  data: null,
  errorMessage: "",
};

export const reducer = (state: State, action: Action): State => {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return { ...state, tag: "loading" };
        }
        default: {
          return state;
        }
      }
    }
    case "loading": {
      switch (action.type) {
        case "SUCCESS": {
          return { ...state, tag: "success", data: action.payload };
        }
        case "ERROR": {
          return { ...state, tag: "error", errorMessage: action.payload };
        }
        default: {
          return state;
        }
      }
    }
    case "success": {
      switch (action.type) {
        case "FETCH": {
          return { ...state, tag: "loading" };
        }
        default: {
          return state;
        }
      }
    }
    case "error": {
      switch (action.type) {
        case "FETCH": {
          return { ...state, tag: "loading" };
        }
        default: {
          return state;
        }
      }
    }
    case "empty": {
      switch (action.type) {
        case "FETCH": {
          return { ...state, tag: "loading" };
        }
        default: {
          return state;
        }
      }
    }
    default: {
      return state;
    }
  }
};

export const StatistikProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, commit] = useReducer(reducer, initialState);
  const statistikProvider = {
    state,
    commit,
  };

  useEffect(() => {
    switch (state.tag) {
      case "loading": {
        if (state.data != null) {
          commit({ type: "SUCCESS", payload: state.data });
          return;
        }
        api.get("/statistik").then((res) => {
          commit({ type: "SUCCESS", payload: res.data });
        }).catch((err) => {
          commit({ type: "ERROR", payload: err.message });
        });
        break;
      }
      default: {
        break;
      }
    }
  }, [state.data, state.tag]);

  return (
    <StatistikContext.Provider value={statistikProvider}>
      {children}
    </StatistikContext.Provider>
  );
};

export const useStatistikContext = () => {
  const context = useContext(StatistikContext);
  if (context === undefined) {
    throw new Error("useStatistikContext must be used within a StatistikProvider");
  }
  return context;
};

