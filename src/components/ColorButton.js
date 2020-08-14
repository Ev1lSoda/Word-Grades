import React, { useContext } from "react";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function ColorButton(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  function btnLevelOn() {
    if (!appState.btnInfo[props.buttonNumber].status) {
      if (props.buttonNumber === 0) {
        appDispatch({
          type: "setbtn1",
          btn: {
            classNames: "button-lvl-1 button-lvl-width onButton-lvl-1",
            status: true,
          },
        });
        appDispatch({ type: "setLevel1", style: "lvl_1" });
      } else {
        appDispatch({
          type: "setbtn1",
          btn: { classNames: "button-lvl-1 button-lvl-width", status: false },
        });
        appDispatch({ type: "setLevel1", style: "" });
      }
      if (props.buttonNumber === 1) {
        appDispatch({
          type: "setbtn2",
          btn: {
            classNames: "button-lvl-2 button-lvl-width onButton-lvl-2",
            status: true,
          },
        });
        appDispatch({ type: "setLevel2", style: "lvl_2" });
      } else {
        appDispatch({
          type: "setbtn2",
          btn: { classNames: "button-lvl-2 button-lvl-width", status: false },
        });
        appDispatch({ type: "setLevel2", style: "" });
      }
      if (props.buttonNumber === 2) {
        appDispatch({
          type: "setbtn3",
          btn: {
            classNames: "button-lvl-3 button-lvl-width onButton-lvl-3",
            status: true,
          },
        });
        appDispatch({ type: "setLevel3", style: "lvl_3" });
      } else {
        appDispatch({
          type: "setbtn3",
          btn: { classNames: "button-lvl-3 button-lvl-width", status: false },
        });
        appDispatch({ type: "setLevel3", style: "" });
      }
      if (props.buttonNumber === 3) {
        appDispatch({
          type: "setbtn4",
          btn: {
            classNames: "button-lvl-4 button-lvl-width onButton-lvl-4",
            status: true,
          },
        });
        appDispatch({ type: "setLevel4", style: "lvl_4" });
      } else {
        appDispatch({
          type: "setbtn4",
          btn: { classNames: "button-lvl-4 button-lvl-width", status: false },
        });
        appDispatch({ type: "setLevel4", style: "" });
      }
      if (props.buttonNumber === 4) {
        appDispatch({
          type: "setbtn5",
          btn: {
            classNames: "button-lvl-5 button-lvl-width onButton-lvl-5",
            status: true,
          },
        });
        appDispatch({ type: "setLevel5", style: "lvl_5" });
      } else {
        appDispatch({
          type: "setbtn5",
          btn: { classNames: "button-lvl-5 button-lvl-width", status: false },
        });
        appDispatch({ type: "setLevel5", style: "" });
      }
      if (props.buttonNumber === 5) {
        appDispatch({
          type: "setbtn6",
          btn: {
            classNames: "button-lvl-6 button-lvl-width onButton-lvl-6",
            status: true,
          },
        });
        appDispatch({ type: "setLevel6", style: "lvl_6" });
      } else {
        appDispatch({
          type: "setbtn6",
          btn: { classNames: "button-lvl-6 button-lvl-width", status: false },
        });
        appDispatch({ type: "setLevel6", style: "" });
      }
    } else {
      appDispatch({
        type: "setbtn1",
        btn: { classNames: "button-lvl-1 button-lvl-width", status: false },
      });
      appDispatch({ type: "setLevel1", style: "" });
      appDispatch({
        type: "setbtn2",
        btn: { classNames: "button-lvl-2 button-lvl-width", status: false },
      });
      appDispatch({ type: "setLevel2", style: "" });
      appDispatch({
        type: "setbtn3",
        btn: { classNames: "button-lvl-3 button-lvl-width", status: false },
      });
      appDispatch({ type: "setLevel3", style: "" });
      appDispatch({
        type: "setbtn4",
        btn: { classNames: "button-lvl-4 button-lvl-width", status: false },
      });
      appDispatch({ type: "setLevel4", style: "" });
      appDispatch({
        type: "setbtn5",
        btn: { classNames: "button-lvl-5 button-lvl-width", status: false },
      });
      appDispatch({ type: "setLevel5", style: "" });
      appDispatch({
        type: "setbtn6",
        btn: { classNames: "button-lvl-6 button-lvl-width", status: false },
      });
      appDispatch({ type: "setLevel6", style: "" });
    }
  }
  return (
    <button
      className={appState.btnInfo[props.buttonNumber].classNames}
      onClick={btnLevelOn}
    >
      {props.buttonNumber + 1}
    </button>
  );
}

export default ColorButton;
