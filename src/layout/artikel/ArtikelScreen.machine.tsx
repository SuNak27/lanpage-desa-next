import { api } from "@/utils/apiService";
import { Artikel, Kategori } from "@/utils/dataInterface";
import { createContext, useContext, useEffect, useReducer } from "react";

type State = {
  tag: "idle" | "loading" | "success" | "error" | "empty" | "detail" | "success_detail";
  data: {
    artikel: Artikel[];
    kategori: Kategori[];
    detail_artikel?: Artikel;
  };
  slug?: string;
  errorMessage: string;
}

type Action =
  | { type: "FETCH" }
  | { type: "FETCH_DETAIL"; payload: string }
  | { type: "SUCCESS"; payload: { artikel: Artikel[], kategori: Kategori[] } }
  | { type: "SUCCESS_DETAIL"; payload: Artikel }
  | { type: "ERROR"; payload: string }
  | { type: "EMPTY" };

type ArtikelContextType = {
  state: State;
  commit: React.Dispatch<Action>;
};

export const ArtikelContext = createContext<ArtikelContextType>({
  state: {
    tag: "idle",
    data: {
      artikel: [],
      kategori: [],
    },
    errorMessage: "",
  },
  commit() { },
});

const initialState: State = {
  tag: "idle",
  data: {
    artikel: [],
    kategori: [],
  },
  errorMessage: "",
};

export const reducer = (state: State, action: Action): State => {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return { ...state, tag: "loading" };
        }
        case "FETCH_DETAIL": {
          return { ...state, tag: "detail", slug: action.payload };
        }
        default: {
          return state;
        }
      }
    }
    case "detail": {
      switch (action.type) {
        case "SUCCESS_DETAIL": {
          return {
            ...state, tag: "success_detail", data: {
              ...state.data,
              detail_artikel: action.payload,
            }
          };
        }
        case "ERROR": {
          return { ...state, tag: "error", errorMessage: action.payload };
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
            ...state, tag: "success", data: {
              artikel: action.payload.artikel,
              kategori: action.payload.kategori,
            }
          };
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
        case "FETCH_DETAIL": {
          return { ...state, tag: "detail", slug: action.payload };
        }
        default: {
          return state;
        }
      }
    }
    case "success_detail": {
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

export const ArtikelProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, commit] = useReducer(reducer, initialState);
  const artikelProvider = {
    state,
    commit,
  };

  useEffect(() => {
    switch (state.tag) {
      case "detail": {
        api.get(`/artikel/${state.slug}`).then((response) => {
          commit({ type: "SUCCESS_DETAIL", payload: response.data });
        }).catch((error) => {
          commit({ type: "ERROR", payload: error.message });
        });
        break;
      }
      case "loading": {
        if (state.data.artikel.length > 0 && state.data.kategori.length > 0) {
          commit({
            type: "SUCCESS", payload: {
              artikel: state.data.artikel,
              kategori: state.data.kategori,
            }
          });
          return;
        }
        Promise.all([
          api.get("/artikel"),
          api.get("/kategori"),
        ]).then((responses) => {
          const [artikel, kategori] = responses;
          commit({
            type: "SUCCESS", payload: {
              artikel: artikel.data,
              kategori: kategori.data,
            }
          });
        }).catch((error) => {
          commit({ type: "ERROR", payload: error.message });
        });
        break;
      }
      default: {
        break;
      }
    }
  }, [state.data, state.slug, state.tag]);

  return (
    <ArtikelContext.Provider value={artikelProvider}>
      {children}
    </ArtikelContext.Provider>
  );
};

export const useArtikelContext = () => {
  const context = useContext(ArtikelContext);
  if (context === undefined) {
    throw new Error("useArtikelContext must be used within a ArtikelProvider");
  }
  return context;
};

