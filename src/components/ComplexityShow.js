import React, { useContext, useEffect, useState, useRef } from "react";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import ChartBar from "./ChartBar";
import ChartDoughnut from "./ChartDoughnut";
import ColorButton from "./ColorButton";
import TextInfo from "./TextInfo";
import "../css/ComplexityShow.css";
import "../css/Tabs.css";

function ComplexityShow(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const myRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  let counter = 0;
  const [showBar, setShowBar] = useState(false);
  const [showDoughnut, setShowDoughnut] = useState(false);
  const [showEnLevel, setShowEnLevel] = useState(true);
  const [barButton, setBarButton] = useState("tablinks");
  const [doughnutButton, setDoughnutButton] = useState("tablinks");
  const [enLevelButton, setEnLevelButton] = useState("tablinks active");

  function openBar() {
    setShowBar(true);
    setShowDoughnut(false);
    setShowEnLevel(false);
    setBarButton("tablinks active");
    setDoughnutButton("tablinks");
    setEnLevelButton("tablinks");
  }
  function openDoughnut() {
    setShowBar(false);
    setShowDoughnut(true);
    setShowEnLevel(false);
    setBarButton("tablinks");
    setDoughnutButton("tablinks active");
    setEnLevelButton("tablinks");
  }
  function openEnLevel() {
    setShowBar(false);
    setShowDoughnut(false);
    setShowEnLevel(true);
    setBarButton("tablinks");
    setDoughnutButton("tablinks");
    setEnLevelButton("tablinks active");
  }
  let complexityOfWordsWithAll = [0, 0, 0, 0, 0, 0, 0];
  let complexityOfWords = [0, 0, 0, 0, 0, 0];
  for (let wordLevels of appState.resInfo) {
    for (let i = 0; i < 7; i++) {
      complexityOfWordsWithAll[i] += wordLevels.complexity[i];
    }
    for (let i = 1; i < 7; i++) {
      complexityOfWords[i - 1] += wordLevels.complexity[i];
    }
  }
  useEffect(() => {
    if (!complexityOfWordsWithAll[0]) {
      appDispatch({
        type: "fleshMessagesOn",
        value: "Sorry didn't find any words levels.",
      });
      appDispatch({ type: "bodyStateOff" });
      appDispatch({ type: "setIsLoading", loading: true });
    }
  }, [complexityOfWordsWithAll[0]]);
  const mainText = appState.rdyToDiv.map((part) => {
    counter++;
    // let finTextSpans = ``;
    // let finTextCounter = 0;
    for (let uniqueWords of appState.resInfo) {
      if (part === uniqueWords.word) {
        let classCreator = ``;
        for (let i = 1; i < 7; i++) {
          if (uniqueWords.complexity[i] === 1) {
            classCreator += `${appState.style_lvl[i]} `;
          }
        }
        return (
          <span key={counter} className={classCreator}>
            {part}
          </span>
        );
      }
    }
    return <span key={counter}>{part}</span>;
  });

  function ChangeContent() {
    appDispatch({ type: "bodyStateOff" });
    appDispatch({ type: "setIsLoading", loading: true });
  }

  function scrollToText() {
    scrollToRef(myRef);
  }

  useEffect(() => scrollToText(), []);

  return (
    <>
      <div className="show-grid-container lang_en">
        <div className="show-grid-item-1">
          <div className="show-grid-item-1-flex-1">YOUR TEXT</div>
          <div className="show-grid-item-1-flex-2">
            <div className="spanTextJustify">{mainText}</div>
          </div>
        </div>
        <div className="show-grid-item-2">
          <div className="tab">
            <button className={enLevelButton} onClick={openEnLevel}>
              English Level
            </button>
            <button className={barButton} onClick={openBar}>
              Bar
            </button>
            <button className={doughnutButton} onClick={openDoughnut}>
              Doughnut
            </button>
          </div>
          {showBar ? <ChartBar data={complexityOfWords} /> : <></>}
          {showDoughnut ? <ChartDoughnut data={complexityOfWords} /> : <></>}
          {showEnLevel ? <TextInfo /> : <></>}
        </div>
        <div className="show-grid-item-3" ref={myRef}>
          <div className="show-btn">
            <div>Select level: </div>
            <ColorButton buttonNumber={0} />
            <ColorButton buttonNumber={1} />
            <ColorButton buttonNumber={2} />
            <ColorButton buttonNumber={3} />
            <ColorButton buttonNumber={4} />
            <ColorButton buttonNumber={5} />
          </div>
          <button className="goBackBtn lang_en" onClick={ChangeContent}>
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ComplexityShow;
