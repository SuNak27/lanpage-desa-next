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
  page: number;
  per_page: number;
  total_pages: number;
  total_data: number;
  slug?: string;
  errorMessage: string;
  filter?: {
    kategori?: string;
    search?: string;
  };
}

type Action =
  | { type: "FETCH" }
  | { type: "FETCH_DETAIL"; payload: string }
  | {
    type: "SUCCESS"; payload: {
      artikel: Artikel[],
      kategori: Kategori[],
      total_pages: number,
      per_page: number,
      total_data: number,
      filter?: {
        kategori?: string,
        search?: string,
      }
    }
  }
  | { type: "NEXT_PAGE" }
  | { type: "PREV_PAGE" }
  | { type: "SET_PAGE"; payload: number }
  | { type: "FILTER"; payload: { kategori?: string, search?: string } }
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
    page: 1,
    per_page: 10,
    total_pages: 0,
    total_data: 0,
    errorMessage: "",
    filter: {
      kategori: undefined,
      search: undefined,
    },
  },
  commit() { },
});

const initialState: State = {
  tag: "idle",
  data: {
    artikel: [],
    kategori: [],
  },
  page: 1,
  total_pages: 0,
  total_data: 0,
  errorMessage: "",
  per_page: 10,
};

export const reducer = (state: State, action: Action): State => {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return {
            data: {
              artikel: [],
              kategori: [],
            },
            tag: "loading",
            page: 1,
            total_pages: 0,
            total_data: 0,
            errorMessage: "",
            per_page: 10,
          };
        }
        case "FETCH_DETAIL": {
          return { ...state, tag: "detail", slug: action.payload };
        }
        case "FILTER": {
          return { ...state, tag: "loading", page: 1, filter: action.payload };
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
            },
            total_pages: action.payload.total_pages,
            per_page: action.payload.per_page,
            total_data: action.payload.total_data,
          };
        }
        case "ERROR": {
          return { ...state, tag: "error", errorMessage: action.payload };
        }
        case "EMPTY": {
          return {
            ...state,
            tag: "empty",
            data: {
              artikel: [],
              kategori: [],
            },
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
          return {
            data: {
              artikel: [],
              kategori: [],
            },
            tag: "loading",
            page: 1,
            total_pages: 0,
            total_data: 0,
            errorMessage: "",
            per_page: 10,
          };
        }
        case "FETCH_DETAIL": {
          return { ...state, tag: "detail", slug: action.payload };
        }
        case "NEXT_PAGE": {
          return { ...state, page: state.page + 1, tag: "loading" };
        }
        case "PREV_PAGE": {
          return { ...state, page: state.page - 1, tag: "loading" };
        }
        case "SET_PAGE": {
          return { ...state, page: action.payload, tag: "loading" };
        }
        case "FILTER": {
          return {
            ...state, tag: "loading", page: 1, filter: action.payload
          };
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
          return {
            data: {
              artikel: [],
              kategori: [],
            },
            tag: "loading",
            page: 1,
            total_pages: 0,
            total_data: 0,
            errorMessage: "",
            per_page: 10,
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
        // if (state.data.artikel.length > 0 && state.data.kategori.length > 0) {
        //   commit({
        //     type: "SUCCESS", payload: {
        //       artikel: state.data.artikel,
        //       kategori: state.data.kategori,
        //       total_pages: state.total_pages,
        //       per_page: state.per_page,
        //     }
        //   });
        //   return;
        // }
        Promise.all([
          api.get("/artikel?", { limit: state.per_page, page: state.page, ...state.filter }),
          api.get("/kategori"),
        ]).then((responses) => {
          const [artikel, kategori] = responses;
          if (artikel.data.length === 0) {
            commit({ type: "EMPTY" });
            return;
          }

          commit({
            type: "SUCCESS", payload: {
              artikel: artikel.data,
              kategori: kategori.data,
              total_pages: artikel.total_pages,
              per_page: artikel.per_page,
              total_data: artikel.total_data,
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
  }, [state.data, state.filter, state.filter?.kategori, state.page, state.per_page, state.slug, state.tag, state.total_pages]);

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

