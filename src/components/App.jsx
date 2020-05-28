import React, { useState } from "react";
import Main from './Main';
import Bootup from "./Bootup";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {

    const [main, setMain] = useState(true);
    const [bootUp, setBootUp] = useState(false);

    function changeMain(mainValue) {
        setTimeout(() => {
            return setMain(mainValue);
        },800);
    }
    
    function changeBoot(bootValue) {
        setTimeout(() => {
            return setBootUp(bootValue)
        },800);
    }

    return (
        <div>
        {main && <Main 
            onMainshow = {changeMain}
            onBootshow = {changeBoot}
        />}
        {bootUp && <Bootup/>}
        </div>

    )
};

export default App;