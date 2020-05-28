import React from "react";
import useSound from 'use-sound';

import logo from '../assets/logo.png';
import powerIcon from '../assets/power.svg';
import keypress from '../assets/keypress.wav';

function Main() {

    const [play] = useSound(keypress);

    return (
        <div id="container">
            <img className="logo" src={logo} alt="logo" />
            <button className="power-btn" onClick={play}><img src={powerIcon} alt="POWER"/></button> 
        </div>
    
    )
}

export default Main;