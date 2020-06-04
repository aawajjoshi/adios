import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, AppBar, Toolbar, TextField, Window, WindowContent, WindowHeader, Button, Cutout, } from "react95";

const ResetStyles = createGlobalStyle`
  ${reset}
`;



function Explorer() {
  return (
    <div>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Window
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <WindowHeader
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Documents</span>
            <Button
              style={{ marginRight: "-6px", marginTop: "1px" }}
              size={"sm"}
              square
            >
              <span
                style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
              >
                x
              </span>
            </Button>
          </WindowHeader>
          <Toolbar>
            <Button variant="menu" size="sm">
              File
            </Button>
            <Button variant="menu" size="sm">
              Exit
            </Button>
          </Toolbar>

          <Window>
            <WindowContent>
              <Cutout
                style={{
                  width: "400px",
                  height: "200px",
                  background: "#ffffff",
                }}
              >
                <h1
                  style={{
                    fontFamily: "times new roman",
                    textAlign: "center",
                    fontSize: "3rem",
                    marginTop: "0.5rem",
                  }}
                >
                  This is where the documents go
                </h1>
              </Cutout>
            </WindowContent>
          </Window>
        </Window>
      </ThemeProvider>
    </div>
  );
}

export default Explorer;
