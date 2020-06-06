import React, { useState, useContext } from "react";
import { StoreContext } from "../store/GlobalState";

import {
  TextField,
  Button,
  Select,
  Window,
  WindowContent,
  Cutout,
} from "react95";
import useSound from "use-sound";
import startup from "../assets/startup.mp3";


function Login() {
  const [state, dispatch] = useContext(StoreContext);

  const [user, setUser] = useState(1);
  const [password, setPassword] = useState("");

  const [play] = useSound(startup);

  const items = [
    { value: 1, label: "John" },
    { value: 2, label: "Guest" },
  ];

  const _userOnChange = (value) => setUser(value);

  function _passOnChange(event) {
    setPassword(event.target.value);
  }

  function _logIn() {
    if (user === 1 && password === "E(!PjR%vB#_9P&DJ") {
      setUser(1);
      dispatch({ type: "SET_LOGIN", payload: !state.login });
      dispatch({ type: "SET_LOADING", payload: true });

      setTimeout(() => {
        play();
      }, 2000);

      setTimeout(() => {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_USER", payload: true });
      }, 4000);
      
    } else if (user === 2 && password === "") {
      setUser(1);
      dispatch({ type: "SET_LOGIN", payload: !state.login });
      dispatch({ type: "SET_LOADING", payload: true });

      setTimeout(() => {
        play();
      }, 2000);

      setTimeout(() => {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_GUEST", payload: true });
      }, 4000);
      
    } else {
      return state;
    }
  }

  return (
    <>
      {state.login && (
        <div>
            <Window
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <WindowContent>
                <Cutout
                  style={{
                    padding: "1rem",
                    paddingBottom: "1rem",
                    background: "white",
                    width: "300px",
                  }}
                >
                  <p style={{ lineHeight: 1.3 }}>Login</p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "1.5rem",
                    }}
                  >
                    <label style={{ paddingRight: "0.5rem", fontSize: "1rem" }}>
                      User:
                    </label>
                    <Select
                      name="userSelect"
                      style={{ marginLeft: "2.3rem" }}
                      onChange={_userOnChange}
                      variant="flat"
                      items={items}
                      height={80}
                      width={150}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "1.5rem",
                    }}
                  >
                    <label style={{ paddingRight: "0.5rem", fontSize: "1rem" }}>
                      Password:
                    </label>
                    <TextField
                      type="password"
                      name="passwordSelect"
                      onChange={_passOnChange}
                      variant="flat"
                      placeholder="password..."
                      items={items}
                      width={150}
                    />
                  </div>

                  <Button
                    style={{ marginTop: "1.5rem", marginLeft: "35%" }}
                    onClick={_logIn}
                  >
                    Log In
                  </Button>
                </Cutout>
              </WindowContent>
            </Window>
        </div>
      )}
    </>
  );
}

export default Login;
