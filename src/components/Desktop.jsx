import React, { useEffect, useState, useContext } from "react";
import { StoreContext } from "../store/GlobalState";
import { AppBar, Toolbar, TextField } from "react95";
import Menu from "./Menu";

function Desktop() {

  const [state, dispatch] = useContext(StoreContext);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let mounted = false;
    if (!mounted){
    var timeID = setInterval(() => localTime(), 60000);
    }
    return () => {
    mounted = true;
    clearInterval(timeID);
    }
  }, []);

  function localTime() {
    setTime(new Date());
  }

  function _openDocuments() {
    dispatch({ type: "SET_EXPLORER", payload: true });
  }

  function _openTrash(){
    dispatch({ type: "SET_TRASH", payload: true });
  }

  function _openWinamp() {
    dispatch({ type: "SET_WINAMP", payload: true  });
  }

  return (
    <div className="test">
      <AppBar style={{ zIndex: 1 }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Menu />
          <TextField
            placeholder={time.toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
            disabled
            width={100}
            style={{
              WebkitTextFillColor: "black",
              opacity: "1",
              color: "black",
            }}
          />
        </Toolbar>
      </AppBar>

      <button onDoubleClick={_openDocuments}>
        <img
          src={require("../assets/folder.ico")}
          alt="folder"
          style={{ position: "absolute", top: 60, left: 25 }}
        />
      </button>

      <button onDoubleClick={_openTrash}>
        <img
          src={require("../assets/recycle-bin.ico")}
          alt="folder"
          style={{ position: "absolute", top: 150, left: 25 }}
        />
      </button>

      {state.user && 
      <button onDoubleClick={_openWinamp}>
        <img
          src={require("../assets/winamp.ico")}
          alt="winamp"
          style={{
            position: "absolute",
            top: 240,
            left: 20,
            height: "60px",
            width: "60px",
          }}
        />
      </button>
      }

    </div>
  );
}

export default Desktop;
