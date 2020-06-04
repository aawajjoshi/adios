import React, { useState } from "react";
import Desktop from "./Desktop";

import Player from "./Webamp";

import rick from "../assets/rick.gif";

function User() {
  const [isPlaying, setIsPlaying] = useState(false);

  function test(something) {
    setIsPlaying(something);
}

  return (
    <div>
      <Desktop />
      <Player 
          play={test}
      />
      {isPlaying && <img src={rick} alt="rick" style={{ position: 'absolute', top: 20, left: 20, width: 400, height: 400, zIndex: 10 }}  />}
    </div>
  );
}

export default User;
