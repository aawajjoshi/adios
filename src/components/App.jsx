import React from "react";
import '../App.css';
import Store from '../store/GlobalState';
import { createGlobalStyle, ThemeProvider } from "styled-components";

//components
import Main from './Main';
import Bootup from "./Bootup";
import Login from "./Login";
import User from "./User";
import Guest from "./Guest";
import Explorer from './Explorer';
import Trash from './Trash';
import Document from './Document';
import Clipping from './Clipping';
import Loading from './Loading';

import { reset, themes } from 'react95';



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
            <Trash />
            <Document />
            <Clipping />
            <Loading />
            </ThemeProvider>
        </Store>
    )
  
};

export default App;