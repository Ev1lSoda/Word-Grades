import React, { useContext, useEffect } from "react";
import "../css/Show.css";
import Loading from "./Loading";
import ComplexityShow from "./ComplexityShow";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import Axios from "axios";

function Show() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  useEffect(() => {
    let symbolsandWords = appState.text;

    symbolsandWords = symbolsandWords.replace(/(\s{2,})/gm, " ");
    symbolsandWords = symbolsandWords
      .split(/([a-zA-Z0-9&']+[-][a-zA-Z0-9&']+|[^\s.,!?-]+)/gm)
      .filter((el) => el !== "");
    appDispatch({ type: "setRdyToDiv", data: symbolsandWords });

    const ourRequest = Axios.CancelToken.source();

    async function fetchPosts() {
      try {
        const response = await Axios.post(`/api/wcomplx`, {
          srcText: appState.text,
          cancelToken: ourRequest.token,
        });
        appDispatch({
          type: "setInfo",
          data: response.data.results,
        });
        appDispatch({
          type: "setIsLoading",
          loading: false,
        });
      } catch (e) {}
    }
    fetchPosts();
    return () => {
      ourRequest.cancel();
    };
  }, [appDispatch, appState.text]);

  return (
    <div className="area">
      {appState.isLoading ? <Loading /> : <ComplexityShow />}
    </div>
  );
}

export default Show;
