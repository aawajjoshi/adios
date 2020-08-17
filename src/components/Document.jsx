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

function Document() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
      {state.document && (
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
                <span>random.txt</span>
                <Button
                  style={{ marginRight: '-6px', marginTop: '1px' }}
                  size={'sm'}
                  square
                  onClick={() =>
                    dispatch({ type: 'SET_DOCUMENT', payload: false })
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
                    dispatch({ type: 'SET_DOCUMENT', payload: false })
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
                        width: '500px',
                        height: '300px',
                        background: '#ffffff',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '20px',
                          position: 'absolute',
                          top: 20,
                          left: 20,
                        }}
                      >
                        E(!PjR%vB#_9P&DJ
                      </span>
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

export default Document;
