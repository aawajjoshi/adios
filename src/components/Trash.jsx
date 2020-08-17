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

function Trash() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
      {state.trash && (
        <Draggable bounds="parent" cancel="strong">
          <div
            style={{
              position: 'fixed',
              top: '30%',
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
                <span>Recyle Bin</span>
                <Button
                  style={{ marginRight: '-6px', marginTop: '1px' }}
                  size={'sm'}
                  square
                  onClick={() =>
                    dispatch({ type: 'SET_TRASH', payload: false })
                  }
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
                  onClick={() =>
                    dispatch({ type: 'SET_TRASH', payload: false })
                  }
                >
                  Exit
                </Button>
              </Toolbar>

              <Window>
                <strong>
                  <WindowContent>
                    <Cutout
                      style={{
                        width: '400px',
                        height: '200px',
                        background: '#ffffff',
                      }}
                    >
                      {state.user && (
                        <>
                          <img
                            src={news}
                            alt="document"
                            style={{
                              position: 'absolute',
                              top: 10,
                              left: 14,
                              width: '50px',
                              height: '70px',
                            }}
                            onDoubleClick={() =>
                              dispatch({ type: 'SET_NEWS', payload: true })
                            }
                          />
                          <span
                            style={{
                              fontSize: '13px',
                              position: 'absolute',
                              top: 85,
                              left: 16,
                            }}
                          >
                            kills.jpg
                          </span>
                        </>
                      )}
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

export default Trash;
