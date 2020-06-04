import React, { useState } from "react";

import Main from './Main';
import Bootup from "./Bootup";

import Login from "./Login";
import User from "./User";
import Guest from "./Guest";

import useSound from 'use-sound';
import themeMusic from '../assets/grace.wav';
import startup from '../assets/startup.mp3';


import Explorer from './Explorer';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


function App() {

    const [main, setMain] = useState(true);
    const [bootUp, setBootUp] = useState(false);
    
    const [logIn, setLogIn] = useState(true);
   

    const [user, setUser] = useState(false);
    const [guest, setGuest] = useState(false);

    const [play] = useSound(startup);

    function endMain(mainEndValue) {
        setTimeout(() => {
            return setMain(mainEndValue);
        },800);
    }
    
    function startBoot(bootStartValue) {
        setTimeout(() => {
            return setBootUp(bootStartValue)
        },800);
    }

    function endBoot(bootEndValue) {
        return setBootUp(bootEndValue);
    }

    function startLogIn(loginStartValue) {
        setTimeout(() => {
            return setLogIn(loginStartValue);
        },800);
    }

    function checkLogin(logInValue) {
        if (logInValue === 1) {
            setLogIn(false);

            setTimeout(() => {
                play();
            },2000);

            setTimeout(() => {
                setUser(true);
            },4000);
        }

        else if (logInValue === 2) {
            setLogIn(false);

            setTimeout(() => {
                play();
            },2000);

            setTimeout(() => {
                setGuest(true);
            },4000);
        }

        else {
            setLogIn(true);
        }
    } 


    return (
        <div>
        
        {/* {main && <Main 
            onMainend = {endMain}
            onBootstart = {startBoot}
        />}

        {bootUp && <Bootup
            onBootend = {endBoot}
            onLogInstart = {startLogIn}
        />} */}

        {/* {desktop && <Desktop />} */}
        {/* <Desktop /> */}

        {/* {logIn && <Login 
            logInType = {checkLogin}
        />}
       
        {user && <User />}
        {guest && <Guest />} */}

        <Guest />
        {/* <Explorer /> */}
        </div>

    )
};

export default App;