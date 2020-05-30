import React from "react";
import vid from '../assets/bootup.mp4';
import ReactPlayer from 'react-player'

function Bootup(props) {

    function handleVidFinish() {
        props.onBootend(false);
        props.onDeskstart(true);
    }

    return (
        <div classNmame="something">
            <div id="video-player">
                <ReactPlayer width='100%'
          height='100%' url={vid} playing 
          onEnded={handleVidFinish}
          />
            </div>
        </div>
    )

}

export default Bootup;