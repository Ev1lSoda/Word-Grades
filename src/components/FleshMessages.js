import React, { useEffect, useContext, useState } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

function FleshMessages(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [divStyle, setDivStyle] = useState({
    visibility: "hidden",
  });

  useEffect(() => {
    if (appState.fleshMessages) {
      setDivStyle({ visibility: "visible" });
      appDispatch({ type: "setBtn", status: true });
      const timer = setInterval(() => {
        setDivStyle({ visibility: "hidden" });
        appDispatch({ type: "fleshMessagesOff" });
        appDispatch({ type: "setBtn", status: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [appState.fleshMessages, appDispatch]);

  return (
    <div id="content" style={divStyle}>
      <div>{props.value}</div>
    </div>
  );
}

export default FleshMessages;
