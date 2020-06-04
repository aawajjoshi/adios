import React from "react";
import Webamp from 'webamp';
import meme from '../assets/meme.mp3';

const { useState, useEffect } = React;

const config = {

    initialTracks: [
      {
        metaData: {
            title: "Journal Entry 01"
        },
        url: meme,      
        duration: 213
      }
    ]
  };


  function Player(props) {
    const [divRef, setDivRef] = useState(null);
  
    useEffect(() => {
      if (divRef == null) {
        return;
      }
      const webamp = new Webamp(config);
      webamp.renderWhenReady(divRef);

      webamp.onTrackDidChange((track => {
       if (props.play === true){
         props.play(false);
       }
       else {
        props.play(true);
       }
      }))
    

      return () => {
        webamp.dispose();
      };
    }, [divRef]);

  
  
  
    if (!Webamp.browserIsSupported()) {
      return <div>Not supported</div>;
    }


    return <div ref={setDivRef} style={{position: 'absolute', bottom: '50%',right: '50%'}}/>;

  }

  export default Player;