import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { TextField, Button, reset, themes, Select, Window, WindowContent, Cutout } from "react95";
import styled from "styled-components";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function Login(props) {

  const [user, setUser] = useState(1);
  const [password, setPassword] = useState("");
  

  const items = [
    { value: 1, label: "⚡ John" },
    { value: 2, label: "🌿 Guest" },
  ];

  const Wrapper = styled.div`
    background: ${({ theme }) => theme.material};
    padding: 5rem;
  `;


  const userOnChange = value => setUser(value);

  function passOnChange(event) {
    setPassword(event.target.value);
  }

  function logIn() {
    if (user === 1 && password === "something"){
      props.logInType(1);
    }
    else if (user === 2 && password === "") {
     props.logInType(2); 
    }
    else {
      props.logInType(3);
    }
  }


  return (
    <div>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Window
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
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
                <Select name="userSelect" style={{ marginLeft: "2.3rem"}} onChange={userOnChange} variant="flat" items={items} height={80} width={150} />
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
                <TextField type="password" name="passwordSelect"  onChange={passOnChange} variant="flat" placeholder="password..." items={items} width={150} />
              </div>
              
              <Button style={{marginTop: '1.5rem', marginLeft: '35%'}} onClick={logIn}>Log In</Button>


            </Cutout>
          </WindowContent>
        </Window>
      </ThemeProvider>
    </div>
  );
}

export default Login;
