import React from 'react';
import { StoreContext } from '../store/GlobalState';
import Webamp from 'webamp';
import meme from '../assets/meme.mp3';

const { useState, useEffect, useContext } = React;

const config = {
  initialTracks: [
    {
      metaData: {
        title: 'Journal Entry 01',
      },
      url: meme,
      duration: 213,
    },
  ],
};

function Player(props) {
  const [state, dispatch] = useContext(StoreContext);

  const [divRef, setDivRef] = useState(null);

  useEffect(() => {
    if (divRef == null) {
      return;
    }
    const webamp = new Webamp(config);
    webamp.renderWhenReady(divRef);

    webamp.onTrackDidChange(() => {
      if (webamp.getMediaStatus() === 'PLAYING') {
        dispatch({ type: 'SET_GIF', payload: true });
      } else if (webamp.getMediaStatus() === 'STOPPED') {
        dispatch({ type: 'SET_GIF', payload: false });
      }
    });

    webamp.onClose(() => {
      dispatch({ type: 'SET_WINAMP', payload: false });
    });

    return () => {
      webamp.dispose();
    };
  }, [divRef, dispatch]);

  if (!Webamp.browserIsSupported()) {
    return <div>Not supported</div>;
  }

  return (
    <div
      ref={setDivRef}
      style={{ position: 'absolute', bottom: '50%', right: '50%' }}
    />
  );
}

export default Player;
