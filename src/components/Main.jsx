import React, { useContext } from 'react';
import { StoreContext } from '../store/GlobalState';

import useSound from 'use-sound';

import logo from '../assets/logo.png';
import powerIcon from '../assets/power.svg';
import keypress from '../assets/keypress.wav';

import themeMusic from '../assets/grace.wav';
var Sound = require('react-sound').default;
window.soundManager.setup({ debugMode: false });

function Main() {
  const [state, dispatch] = useContext(StoreContext);

  const [play] = useSound(keypress);

  function _handleClick() {
    play();

    setTimeout(() => {
      dispatch({ type: 'SET_MAIN', payload: !state.main });
      dispatch({ type: 'SET_BOOT', payload: true });
    }, 800);
  }

  return (
    <>
      {state.main && (
        <div className="container">
          <Sound
            url={themeMusic}
            autoLoad={true}
            playStatus={Sound.status.PLAYING}
          />

          <article className="game-info">
            <p className="game-info-text">
              Your journalist friend investigating a scandal revolving around an
              oligarch has gone missing. Search their computer to see if you can
              find any clues on their whereabouts.
            </p>
          </article>
          <img className="logo" src={logo} alt="logo" />
          <button className="power-btn" onClick={_handleClick}>
            <img src={powerIcon} alt="POWER" />
          </button>
        </div>
      )}
    </>
  );
}

export default Main;
