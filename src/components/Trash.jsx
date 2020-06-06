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

function Trash() {

    const [state, dispatch] = useContext(StoreContext);

    return (
        <>
          {state.trash && (
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
                  <span>Recyle Bin</span>
                  <Button
                    style={{ marginRight: "-6px", marginTop: "1px" }}
                    size={"sm"}
                    square
                    onClick={() =>
                      dispatch({ type: "SET_TRASH", payload: false })
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
                      dispatch({ type: "SET_TRASH", payload: false })
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
                    </Cutout>
                  </WindowContent>
                </Window>
              </Window>
            </div>
          )}
        </>
      );
    }
    
export default Trash;