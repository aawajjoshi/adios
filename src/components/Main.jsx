import React from "react";
import useSound from 'use-sound';

import logo from '../assets/logo.png';
import powerIcon from '../assets/power.svg';
import keypress from '../assets/keypress.wav';

function Main(props) {

    const [play] = useSound(keypress);
    
    function handleClick() {
        props.onMainend(false);
        props.onBootstart(true);
        return play();
    }

    return (
        <div id="container">
            <img className="logo" src={logo} alt="logo" />
            <button className="power-btn" onClick={handleClick}><img src={powerIcon} alt="POWER"/></button>
        </div>
    
    )
}

export default Main;