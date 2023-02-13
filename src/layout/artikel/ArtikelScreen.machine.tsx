import { api } from "@/utils/apiService";
import { Artikel, Kategori } from "@/utils/dataInterface";
import { createContext, useContext, useEffect, useReducer } from "react";

type State = {
  tag: "idle" | "loading" | "success" | "error" | "empty" | "detail" | "success_detail";
  data: {
    artikel: {
      data: Artikel[];
      page: number;
      total_data: number;
      total_pages: number;
      per_page: number;
    };
    kategori: {
      data: Kategori[];
      page: number;
      total_data: number;
      total_pages: number;
      per_page: number;
    };
    detail_artikel?: Artikel;
  };
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
      artikel: {
        data: Artikel[],
        total_data: number,
        total_pages: number,
        per_page: number,
        page: number,
      },
      kategori: {
        data: Kategori[],
        total_data: number,
        total_pages: number,
        per_page: number,
      },
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
  | { type: "ALL_KATEGORI" }
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
      artikel: {
        data: [],
        page: 1,
        total_data: 0,
        total_pages: 0,
        per_page: 10,
      },
      kategori: {
        data: [],
        page: 1,
        total_data: 0,
        total_pages: 0,
        per_page: 10,
      }
    },
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
    artikel: {
      data: [],
      page: 1,
      total_data: 0,
      total_pages: 0,
      per_page: 10,
    },
    kategori: {
      data: [],
      page: 1,
      total_data: 0,
      total_pages: 0,
      per_page: 10,
    },
  },
  errorMessage: "",
};

export const reducer = (state: State, action: Action): State => {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return {
            data: {
              artikel: {
                data: [],
                page: state.data.artikel.page,
                total_data: 0,
                total_pages: 0,
                per_page: 10,
              },
              kategori: {
                data: [],
                page: 1,
                total_data: 0,
                total_pages: 0,
                per_page: 10,
              },
            },
            tag: "loading",
            errorMessage: "",
          };
        }
        case "FETCH_DETAIL": {
          return { ...state, tag: "detail", slug: action.payload };
        }
        case "FILTER": {
          return {
            ...state,
            tag: "loading",
            filter: action.payload,
            data: {
              ...state.data,
              artikel: { ...state.data.artikel, page: 1 },
            }
          };
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
            ...state,
            tag: "success",
            data: {
              artikel: {
                data: action.payload.artikel.data,
                page: state.data.artikel.page,
                total_data: action.payload.artikel.total_data,
                total_pages: action.payload.artikel.total_pages,
                per_page: action.payload.artikel.per_page,
              },
              kategori: {
                data: action.payload.kategori.data,
                page: 1,
                total_data: action.payload.kategori.total_data,
                total_pages: action.payload.kategori.total_pages,
                per_page: action.payload.kategori.per_page,
              },
            },
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
              artikel: {
                data: [],
                page: 1,
                total_data: 0,
                total_pages: 0,
                per_page: 10,
              },
              kategori: {
                data: [],
                page: 1,
                total_data: 0,
                total_pages: 0,
                per_page: 10,
              },
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
              artikel: {
                data: [],
                page: 1,
                total_data: 0,
                total_pages: 0,
                per_page: 10,
              },
              kategori: {
                data: [],
                page: 1,
                total_data: 0,
                total_pages: 0,
                per_page: 10,
              },
            },
            tag: "loading",
            errorMessage: "",
          };
        }
        case "FETCH_DETAIL": {
          return { ...state, tag: "detail", slug: action.payload };
        }
        case "NEXT_PAGE": {
          return {
            ...state,
            tag: "loading",
            data: {
              ...state.data,
              artikel: { ...state.data.artikel, page: state.data.artikel.page + 1 }
            },
          }
        }
        case "PREV_PAGE": {
          return {
            ...state,
            tag: "loading",
            data: {
              ...state.data,
              artikel: { ...state.data.artikel, page: state.data.artikel.page - 1 }
            },
          };
        }
        case "SET_PAGE": {
          return {
            ...state,
            tag: "loading",
            data: {
              ...state.data,
              artikel: { ...state.data.artikel, page: action.payload }
            },
          };
        }
        case "FILTER": {
          return {
            ...state,
            tag: "loading",
            filter: action.payload,
            data: {
              ...state.data,
              artikel: { ...state.data.artikel, page: 1 },
              kategori: { ...state.data.kategori, page: 1, per_page: 10 },
            }
          };
        }
        case "ALL_KATEGORI": {
          return {
            ...state,
            tag: "loading",
            data: {
              ...state.data,
              kategori: { ...state.data.kategori, page: 1, total_data: 0, total_pages: 0, per_page: 100 },
            }
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
        case "FETCH_DETAIL": {
          return { ...state, tag: "detail", slug: action.payload };
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
              artikel: {
                data: [],
                page: 1,
                total_data: 0,
                total_pages: 0,
                per_page: 10,
              },
              kategori: {
                data: [],
                page: 1,
                total_data: 0,
                total_pages: 0,
                per_page: 10,
              },
            },
            tag: "loading",
            errorMessage: "",
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
          api.get("/artikel?", { limit: state.data.artikel.per_page, page: state.data.artikel.page, ...state.filter }),
          api.get("/kategori?", { limit: state.data.kategori.per_page, page: state.data.kategori.page }),
        ]).then((responses) => {
          const [artikel, kategori] = responses;
          if (artikel.data.length === 0) {
            commit({ type: "EMPTY" });
            return;
          }

          commit({
            type: "SUCCESS", payload: {
              artikel: {
                data: artikel.data,
                page: state.data.artikel.page,
                total_data: artikel.total_data,
                total_pages: artikel.total_pages,
                per_page: artikel.per_page,
              },
              kategori: {
                data: kategori.data,
                total_data: kategori.total_data,
                total_pages: kategori.total_pages,
                per_page: kategori.per_page,
              },
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
  }, [state.data.artikel.page, state.data.artikel.per_page, state.data.kategori.page, state.data.kategori.per_page, state.filter, state.slug, state.tag]);

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

