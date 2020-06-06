import React, { useState, useContext } from "react";
import { StoreContext } from "../store/GlobalState";
import { Toolbar, Window, WindowContent, WindowHeader, Button, Cutout, } from "react95";


function Explorer() {

  const [state, dispatch] = useContext(StoreContext);

  return (
    <>
    {state.explorer && 
    <div>

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
              onClick={() => dispatch({ type: "SET_EXPLORER", payload: false })}
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
    </div>
    }
    </>
  );
}

export default Explorer;
