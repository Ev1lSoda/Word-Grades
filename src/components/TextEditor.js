import React, { useState, useContext, useEffect } from "react";
import "../css/TextEditor.css";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function TextEditor() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const [symbolCounter, setSymbolCounter] = useState(0);

  useEffect(() => {
    if (appState.text) {
      setSymbolCounter(appState.text.length);
    } else {
      setSymbolCounter(0);
    }
  }, [appState.text]);

  function textAreaFunc(e) {
    appDispatch({ type: "setText", data: e });
  }

  function submitButton() {
    if (appState.text === "") {
      appDispatch({
        type: "fleshMessagesOn",
        value: "You must type some text!",
      });
    } else {
      appDispatch({ type: "setTextState" });
      appDispatch({ type: "bodyStateOn" });
    }
  }
  function clearButton() {
    setSymbolCounter(0);
    appDispatch({ type: "clearText" });
  }

  return (
    <div className="area">
      <textarea
        id="textEditorArea"
        onChange={(e) => textAreaFunc(e.target.value)}
        value={appState.text}
        maxLength="1000"
        cols="30"
        rows="20"
        wrap="soft"
        className="lexe-txt-area lang_en"
      ></textarea>
      <div id="symbolCount">{symbolCounter}/1000</div>
      <div className="lexe-btn-set lang_cyr">
        <button
          className="lexe-btn-reset lang_cyr"
          onClick={clearButton}
          disabled={appState.btnStatus}
        >
          <span>Clear</span>
        </button>
        <button
          className="lexe-btn lang_cyr"
          onClick={submitButton}
          disabled={appState.btnStatus}
        >
          <span>Compile</span>
        </button>
      </div>
    </div>
  );
}

export default TextEditor;
