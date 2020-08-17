import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { StoreContext } from '../store/GlobalState';
import {
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Cutout,
} from 'react95';

import news from '../assets/news.png';

function Clipping() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
      {state.news && (
        <Draggable bounds="parent" cancel="strong">
          <div
            style={{
              position: 'fixed',
              top: '7%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Window>
              <WindowHeader
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'move',
                }}
              >
                <span>kills.jpg</span>
                <Button
                  style={{ marginRight: '-6px', marginTop: '1px' }}
                  size={'sm'}
                  square
                  onClick={() => dispatch({ type: 'SET_NEWS', payload: false })}
                >
                  <span
                    style={{
                      fontWeight: 'bold',
                      transform: 'translateY(-1px)',
                    }}
                  >
                    x
                  </span>
                </Button>
              </WindowHeader>

              <Toolbar>
                <Button variant="menu" size="sm" disabled>
                  File
                </Button>
                <Button
                  variant="menu"
                  size="sm"
                  onClick={() => dispatch({ type: 'SET_NEWS', payload: false })}
                >
                  Exit
                </Button>
              </Toolbar>

              <Window>
                <strong>
                  <WindowContent>
                    <Cutout
                      style={{
                        width: '350px',
                        height: '500px',
                        background: '#ffffff',
                      }}
                    >
                      <img
                        src={news}
                        alt="document"
                        style={{
                          display: 'block',
                          width: '350px',
                          height: '500px',
                        }}
                      />
                    </Cutout>
                  </WindowContent>
                </strong>
              </Window>
            </Window>
          </div>
        </Draggable>
      )}
    </>
  );
}

export default Clipping;
