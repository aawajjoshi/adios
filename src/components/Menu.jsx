import React, { useContext } from 'react';
import { StoreContext } from '../store/GlobalState';
import { Button, List, ListItem, Divider } from 'react95';

import useSound from 'use-sound';
import logoff from '../assets/logoff.mp3';

function Menu() {
  const [state, dispatch] = useContext(StoreContext);

  const [play] = useSound(logoff);

  function _handleClick() {
    dispatch({ type: 'SET_MENU', payload: !state.menu });
  }

  function _handleClose() {
    dispatch({ type: 'SET_MENU', payload: !state.menu });
  }

  function _handleGitHub() {
    const win = window.open('https://github.com/aawajjoshi', '_blank');
    win.focus();
  }

  function _handleLogOut() {
    dispatch({ type: 'SET_USER', payload: false });
    dispatch({ type: 'SET_GUEST', payload: false });
    dispatch({ type: 'SET_EXPLORER', payload: false });
    dispatch({ type: 'SET_TRASH', payload: false });
    dispatch({ type: 'SET_DOCUMENT', payload: false });
    dispatch({ type: 'SET_WINAMP', payload: false });
    dispatch({ type: 'SET_GIF', payload: false });
    dispatch({ type: 'SET_LOADING', payload: true });
    play();

    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
      dispatch({ type: 'SET_LOGIN', payload: true });
    }, 1000);
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {state.menu && (
        <List
          horizontalAlign="left"
          verticalAlign="bottom"
          open={state.menu}
          onClick={_handleClose}
        >
          <ListItem
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={_handleGitHub}
          >
            <img
              src={require('../assets/user.ico')}
              alt="user"
              style={{ width: 22, marginRight: 8 }}
            />
            GitHub
          </ListItem>

          <ListItem
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => dispatch({ type: 'SET_EXPLORER', payload: true })}
          >
            <img
              src={require('../assets/folder.ico')}
              alt="user"
              style={{ width: 22, marginRight: 8 }}
            />
            Documents
          </ListItem>

          <Divider />
          <ListItem
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={_handleLogOut}
          >
            <img
              src={require('../assets/logout.ico')}
              alt="user"
              style={{ width: 22, marginRight: 8 }}
            />
            Logout
          </ListItem>
        </List>
      )}
      <Button
        onClick={_handleClick}
        active={state.menu}
        style={{ fontWeight: 'bold' }}
      >
        <img
          src={require('../assets/start.ico')}
          alt="winlogo"
          style={{ marginLeft: -2, marginRight: 5, width: 20 }}
        />
        Start
      </Button>
    </div>
  );
}

export default Menu;
