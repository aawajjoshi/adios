import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});

const initialState = {
  main: false,
  boot: false,
  login: false,
  user: true,
  guest: false,
  menu: false,
  explorer: false,
  winamp: false
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MAIN":
      return {
        ...state,
        main: action.payload,
      };
    case "SET_BOOT":
      return {
        ...state,
        boot: action.payload,
      };
    case "SET_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_GUEST":
      return {
        ...state,
        guest: action.payload,
      };
    case "SET_MENU":
      return {
          ...state,
          menu: action.payload,
      };
    case "SET_EXPLORER":
        return {
            ...state,
            explorer: action.payload,
        };
    case "SET_WINAMP":
        return {
            ...state,
            winamp: action.payload
        };
    default:
      return state;
  }
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
