import React, { useContext } from "react";
import { StoreContext } from "../store/GlobalState";
import {
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Cutout,
} from "react95";

function Explorer() {
  const [state, dispatch] = useContext(StoreContext);


  return (
    <>
      {state.explorer && (
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
                cursor: "default",
              }}
            >
              <span>Documents</span>
              <Button
                style={{ marginRight: "-6px", marginTop: "1px" }}
                size={"sm"}
                square
                onClick={() =>
                  dispatch({ type: "SET_EXPLORER", payload: false })
                }
              >
                <span
                  style={{ fontWeight: "bold", transform: "translateY(-1px)" }}
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
                  dispatch({ type: "SET_EXPLORER", payload: false })
                }
              >
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
                  {state.guest && (
                    <>
                      <img
                        src={require("../assets/document.ico")}
                        alt="document"
                        style={{
                          position: "absolute",
                          top: 10,
                          left: 14,
                          width: "50px",
                          height: "50px",
                        }}
                        onDoubleClick={() =>
                          dispatch({ type: "SET_DOCUMENT", payload: true })
                        }
                      />
                      <span
                        style={{
                          fontSize: "13px",
                          position: "absolute",
                          top: 62,
                          left: 9,
                        }}
                      >
                        random.txt
                      </span>
                    </>
                  )}
                </Cutout>
              </WindowContent>
            </Window>
          </Window>
        </div>
      )}
    </>
  );
}

export default Explorer;
