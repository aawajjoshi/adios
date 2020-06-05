import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});

const initialState = {
  main: true,
  boot: false,
  login: false,
  user: false,
  guest: false,
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
