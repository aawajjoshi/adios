import React from "react";
import Webamp from 'webamp';
import meme from '../assets/meme.mp3';

const { useState, useEffect } = React;

const config = {

    initialTracks: [
      {
        metaData: {
            artist: "Rick Astley",
            title: "Never Gonna Give You Up"
        },
        // url: '../assets/meme.mp3'
        url: meme,      
        duration: 213
      }
    ]
  };


  function Player() {
    const [divRef, setDivRef] = useState(null);
  
    useEffect(() => {
      if (divRef == null) {
        return;
      }
      const webamp = new Webamp(config);
      webamp.renderWhenReady(divRef);
  
      return () => {
        webamp.dispose();
      };
    }, [divRef]);
  
    if (!Webamp.browserIsSupported()) {
      return <div>Not supported</div>;
    }

    return <div ref={setDivRef} />;

  }

  export default Player;