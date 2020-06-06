import React, { useState, useContext } from "react";
import { StoreContext } from '../store/GlobalState';

import Desktop from "./Desktop";

import Player from "./Webamp";

import rick from "../assets/rick.gif";

import powerIcon from "../assets/power.svg";

function User() {

  const [state, dispatch] = useContext(StoreContext);

  const [isPlaying, setIsPlaying] = useState(false);


  function _test(something) {
    setIsPlaying(something);
}


  return (
    <>
    {state.user && 
    <div>
    
      <Desktop />

      {state.winamp &&
      <Player 
          play={_test}
      />
      }
      {isPlaying && <img src={rick} alt="rick" style={{ position: 'absolute', top: 20, left: 20, width: 400, height: 400, zIndex: 10 }}  />}

    </div>
    }
    </>
  );
}

export default User;
