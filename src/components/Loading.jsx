import React, { useContext } from 'react';
import { StoreContext } from '../store/GlobalState';
import { Hourglass } from 'react95';

function Loading() {
  const [state] = useContext(StoreContext);

  return (
    <>
      {state.loading && (
        <Hourglass
          style={{
            size: 40,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </>
  );
}

export default Loading;
