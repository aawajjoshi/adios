import React from "react";
import useSound from 'use-sound';

import logo from '../assets/logo.png';
import powerIcon from '../assets/power.svg';
import keypress from '../assets/keypress.wav';

import themeMusic from '../assets/grace.wav';
var Sound = require('react-sound').default;

function Main(props) {


    const [play] = useSound(keypress);

    function handleClick() {
        props.onMainend(false);
        props.onBootstart(true);
        return play();
    }

    return (
        <div id="container">

            <Sound url={themeMusic}
                autoLoad={true}
                playStatus={Sound.status.PLAYING}
            />

           

            {/* <audio src={startup} autoPlay/> */}

            <article id="game-info">
                <p className="game-info-text">
                    Your journalist friend investigating an oligarch has gone missing.
                    Search their computer to see if you can find any clues on their whereabouts.
            </p>
            </article>
            <img className="logo" src={logo} alt="logo" />
            <button className="power-btn" onClick={handleClick}><img src={powerIcon} alt="POWER" /></button>
        </div>

    )
}

export default Main;