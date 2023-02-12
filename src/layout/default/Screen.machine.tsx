import { api } from "@/utils/apiService";
import { InfoDesa, MasterData } from "@/utils/dataInterface";
import { createContext, useContext, useEffect, useReducer } from "react";

type State = {
  tag: "idle" | "loading" | "success" | "error" | "empty";
  title: string;
  data: {
    master_data: MasterData | null;
    info_desa: InfoDesa | null;
  };
  errorMessage: string;
}

type Action =
  | { type: "FETCH" }
  |
  {
    type: "SUCCESS"; payload: {
      master_data: MasterData;
      info_desa: InfoDesa;
    }

  }
  | { type: "ERROR"; payload: string }
  | { type: "CHANGE_TITLE"; payload: string }
  | { type: "EMPTY" };

export const reducer = (state: State, action: Action): State => {
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
            title: state.title
          };
        }
        case "ERROR": {
          return { ...state, tag: "error", errorMessage: action.payload, title: state.title };
        }
        case "EMPTY": {
          return { ...state, tag: "empty", title: state.title };
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
    case "success": {
      switch (action.type) {
        case "FETCH": {
          return { ...state, tag: "loading", title: state.title };
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
    case "error": {
      switch (action.type) {
        case "FETCH": {
          return { ...state, tag: "loading", title: state.title };
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
    case "empty": {
      switch (action.type) {
        case "FETCH": {
          return { ...state, tag: "loading", title: state.title };
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
    default: {
      return state;
    }
  }
};

export const initialState: State = {
  tag: "idle",
  title: "Beranda",
  data: {
    master_data: null,
    info_desa: null,
  },
  errorMessage: "",
};

export const LayoutContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => { },
});

export const LayoutProvider = ({ children }: { children: React.ReactNode; }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    switch (state.tag) {
      case "loading":
        if (state.data?.master_data && state.data?.info_desa) {
          dispatch({
            type: "SUCCESS",
            payload: {
              info_desa: state.data.info_desa,
              master_data: state.data.master_data,
            },
          });
          return;
        }

        Promise.all([
          api.get("/desa"),
          api.get("/info-desa"),
        ]).then((responses) => {
          const [desa, infoDesa] = responses;
          dispatch({
            type: "SUCCESS",
            payload: {
              info_desa: desa.data,
              master_data: infoDesa.data,
            },
          });
        }).catch((error) => {
          dispatch({ type: "ERROR", payload: error.message });
        });
        break;
      default:
        break;
    }
  }, [state.data?.info_desa, state.data?.master_data, state.tag]);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};




