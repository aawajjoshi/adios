import React from 'react';
import { Button, List, ListItem, Divider } from 'react95';

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
                            src={require('../assets/user.ico')}
                            alt="user"
                            style={{ width: 30, position: 'relative', top: 8, marginRight: '5px' }}
                        />
          Profile</ListItem>

                    <ListItem>
                        <img
                            src={require('../assets/folder.ico')}
                            alt="user"
                            style={{ width: 30, position: 'relative', top: 8, marginRight: '5px' }}
                        />
          Documents</ListItem>

                    <Divider />
                    <ListItem disabled>Logout</ListItem>
                </List>
            )}
            <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>

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