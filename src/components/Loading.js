import React from "react";
import logo from "../lexe.logo.png";
import "../css/Loading.css";

function Loading() {
  return (
    <>
      <div className="show-div-no-text ">
        <div className="img-flex">
          <img src={logo} alt="Lexe Logo" />
        </div>
        <div className="span-flex">
          <span className=" loading"></span>
          <span className=" loading"></span>
          <span className=" loading"></span>
        </div>
      </div>
      <div className="standby-text lang_cyr">Дождитесь конца обработки вашего текста...</div>
    </>
  );
}

export default Loading;
