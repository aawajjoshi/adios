import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes, AppBar, Toolbar, TextField, Window, WindowContent, WindowHeader, Button } from 'react95';
import Menu from './Menu';
import Explorer from './Explorer';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function Desktop() {

    function localTime() {
        const date = new Date();
        return date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
    }
    function doSomething() {
       return <Explorer />
    }

    return (

        <div className="test">

            <ResetStyles />
            <ThemeProvider theme={themes.default}>

                <AppBar style={{ zIndex: 1 }}>
                    <Toolbar style={{ justifyContent: 'space-between' }}>
                        <Menu />
                        <TextField placeholder={localTime()} disabled width={100} style={{ WebkitTextFillColor: "black", opacity: "1", color: "black" }} />
                    </Toolbar>
                </AppBar>
            </ThemeProvider>

            <button onDoubleClick={doSomething}><img src={require('../assets/folder.ico')} alt="folder" style={{ position: "absolute", top: 60, left: 25 }} /></button>

        </div>
    )
};


export default Desktop;




