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
  trash: false,
  document: false,
  loading: false,
  winamp: false,
  gif: false,
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
    case "SET_TRASH":
      return {
        ...state,
        trash: action.payload,
      };
    case "SET_DOCUMENT":
      return {
        ...state,
        document: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_WINAMP":
      return {
        ...state,
        winamp: action.payload,
      };
    case "SET_GIF":
      return {
        ...state,
        gif: action.payload,
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
