import React from "react";
import vid from '../assets/bootup1.mp4';
import ReactPlayer from 'react-player'

function Bootup() {

    return (
        <div classNmame="something">
            <div id="video-player">
                <ReactPlayer width='100%'
          height='100%' url={vid} playing />
            </div>
        </div>
    )

}

export default Bootup;