import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes, AppBar, Toolbar, TextField } from 'react95';
import Menu from './Menu'
import Player from './Webamp';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function Desktop() {

    function localTime() {
        const date = new Date();
        return date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
    }

    return (
        <div className="test">
            <ResetStyles />
            <ThemeProvider theme={themes.default}>

                <AppBar>
                    <Toolbar style={{ justifyContent: 'space-between' }}>
                        <Menu />
                        <TextField placeholder={localTime()} disabled width={100} style={{ WebkitTextFillColor: "black", opacity: "1", color: "black" }} />
                    </Toolbar>
                </AppBar>

                <Player />
            </ThemeProvider>
        </div>
    )
};


export default Desktop;




