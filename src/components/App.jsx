import React from "react";
import Store from '../store/GlobalState';

//components
import Main from './Main';
import Bootup from "./Bootup";
import Login from "./Login";
import User from "./User";
import Guest from "./Guest";
// import Explorer from './Explorer';



// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";



function App() {

    return (
        <Store>
            <Main />
            <Bootup />
            <Login />
            <User />
            <Guest />
        </Store>
    )
  
};

export default App;