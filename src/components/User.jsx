import React, { useContext } from 'react';
import { StoreContext } from '../store/GlobalState';

import Desktop from './Desktop';

import Player from './Webamp';

import rick from '../assets/rick.gif';

function User() {
  const [state] = useContext(StoreContext);

  return (
    <>
      {state.user && (
        <div>
          <Desktop />

          {state.winamp && <Player />}

          {state.gif && (
            <img
              src={rick}
              alt="rick"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '10%',
                width: 400,
                height: 400,
                zIndex: 10,
              }}
            />
          )}
        </div>
      )}
    </>
  );
}

export default User;
