import React, { useState } from "react";
import Main from './Main';
import Bootup from "./Bootup";
import Desktop from "./Desktop";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


function App() {

    const [main, setMain] = useState(true);
    const [bootUp, setBootUp] = useState(false);
    const [desktop, setDesktop] = useState(false);

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

    function startDesktop(deskStartValue) {
        return setDesktop(deskStartValue);
    }

    return (
        <div>
        {main && <Main 
            onMainend = {endMain}
            onBootstart = {startBoot}
        />}

        {bootUp && <Bootup
            onBootend = {endBoot}
            onDeskstart = {startDesktop}
        />}

        {desktop && <Desktop />}
        </div>

    )
};

export default App;