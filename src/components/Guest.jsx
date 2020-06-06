import React, { useContext } from "react";
import { StoreContext } from "../store/GlobalState";
import Desktop from "./Desktop";

function Guest() {
  const [state] = useContext(StoreContext);

  return <>{state.guest && <Desktop />}</>;
}

export default Guest;
