import React from "react";
import Store from '../store/GlobalState';
import { createGlobalStyle, ThemeProvider } from "styled-components";

//components
import Main from './Main';
import Bootup from "./Bootup";
import Login from "./Login";
import User from "./User";
import Guest from "./Guest";
import Explorer from './Explorer';

import { reset, themes } from 'react95';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {

    return (
        <Store>
        <ResetStyles />
          <ThemeProvider theme={themes.default}>
            <Main />
            <Bootup />
            <Login />
            <User />
            <Guest />
            <Explorer />
            </ThemeProvider>
        </Store>
    )
  
};

export default App;