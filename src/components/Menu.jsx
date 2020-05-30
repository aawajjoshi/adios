import React, { useState, useContext, useEffect } from 'react';
// import { StoreContext } from '../store';
import { Button, List, ListItem, Divider } from 'react95';
// import ClickAwayListener from 'react-click-away-listener';

function Menu() {
    const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {open && (
        <List horizontalAlign="left" verticalAlign="bottom" open={open} onClick={handleClose}>
          
          <ListItem>
          <img
            src={require('../assets/man.png')}
            alt="user"
            style={{width: 30, position: 'relative', top: 8, marginRight:'5px'}}
          />
          Profile</ListItem>

          <ListItem>📁 Documents</ListItem>
          <Divider />
          <ListItem disabled>🔙 Logout</ListItem>
        </List>
      )}
      <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
        {/* <LogoIcon style={{ marginLeft: -2, marginRight: 4 }} /> */}
        <img
            src={require('../assets/home.svg')}
            alt="winlogo"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
        Start
      </Button>
    </div>
  );
}

export default Menu;