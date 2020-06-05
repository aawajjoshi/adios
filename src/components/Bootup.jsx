import React, { useContext } from "react";
import { StoreContext } from "../store/GlobalState";

import vid from "../assets/bootup.mp4";
import ReactPlayer from "react-player";

function Bootup() {
  const [state, dispatch] = useContext(StoreContext);

  function _handleVidFinish() {
    dispatch({ type: "SET_BOOT", payload: !state.boot });
    setTimeout(() => {
      dispatch({ type: "SET_LOGIN", payload: true });
    }, 800);
  }

  return (
    <>
      {state.boot && (
        <div classNmame="something">
          <div id="video-player">
            <ReactPlayer
              width="100%"
              height="100%"
              url={vid}
              playing
              onEnded={_handleVidFinish}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Bootup;
