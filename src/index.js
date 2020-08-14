import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useImmerReducer } from "use-immer";
import { createBrowserHistory } from "history";
import "./css/index.css";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

//My Components
import TextEditor from "./components/TextEditor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Show from "./components/Show";
import FleshMessages from "./components/FleshMessages";

import Axios from "axios";
Axios.defaults.baseURL = "http://api.lexe.club";
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function Main() {
  const initialState = {
    btnInfo: [
      { classNames: "button-lvl-1 button-lvl-width", status: false },
      { classNames: "button-lvl-2 button-lvl-width", status: false },
      { classNames: "button-lvl-3 button-lvl-width", status: false },
      { classNames: "button-lvl-4 button-lvl-width", status: false },
      { classNames: "button-lvl-5 button-lvl-width", status: false },
      { classNames: "button-lvl-6 button-lvl-width", status: false },
    ],
    isLoading: true,
    style_lvl: [],
    txtComplexity: [],
    rdyToDiv: [],
    fleshMessageValue: "",
    fleshMessages: false,
    resInfo: {},
    bodyState: false,
    text: localStorage.getItem("determinantOfTextComplexityText"),
    textState: Boolean(localStorage.getItem("determinantOfTextComplexityText")),
  };

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  function ourReducer(draft, action) {
    switch (action.type) {
      case "setbtn1":
        draft.btnInfo[0] = action.btn;
        return;
      case "setbtn2":
        draft.btnInfo[1] = action.btn;
        return;
      case "setbtn3":
        draft.btnInfo[2] = action.btn;
        return;
      case "setbtn4":
        draft.btnInfo[3] = action.btn;
        return;
      case "setbtn5":
        draft.btnInfo[4] = action.btn;
        return;
      case "setbtn6":
        draft.btnInfo[5] = action.btn;
        return;
      case "setIsLoading":
        draft.isLoading = action.loading;
        return;
      case "setLevel1":
        draft.style_lvl[1] = action.style;
        return;
      case "setLevel2":
        draft.style_lvl[2] = action.style;
        return;
      case "setLevel3":
        draft.style_lvl[3] = action.style;
        return;
      case "setLevel4":
        draft.style_lvl[4] = action.style;
        return;
      case "setLevel5":
        draft.style_lvl[5] = action.style;
        return;
      case "setLevel6":
        draft.style_lvl[6] = action.style;
        return;
      case "setRdyToDiv":
        draft.rdyToDiv = action.data;
        return;
      case "setInfo":
        draft.resInfo = action.data;
        return;
      case "setText":
        draft.text = action.data;
        return;
      case "setTextState":
        draft.textState = true;
        return;
      case "clearText":
        draft.textState = false;
        draft.text = "";
        return;
      case "fleshMessagesOn":
        draft.fleshMessages = true;
        draft.fleshMessageValue = action.value;
        return;
      case "fleshMessagesOff":
        draft.fleshMessages = false;
        draft.fleshMessageValue = "";
        return;
      case "bodyStateOn":
        draft.bodyState = true;
        return;
      case "bodyStateOff":
        draft.bodyState = false;
        return;
    }
  }

  useEffect(() => {
    if (state.textState) {
      localStorage.setItem("determinantOfTextComplexityText", state.text);
    } else {
      localStorage.removeItem("determinantOfTextComplexityText");
    }
  }, [state.textState, state.text]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <FleshMessages value={state.fleshMessageValue} />
        <Header />
        {state.bodyState ? <Show /> : <TextEditor />}
        <Footer />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById("page-content"));
