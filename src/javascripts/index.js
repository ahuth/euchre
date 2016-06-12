"use strict";

import Game from "./components/game";
import React from "react";
import ReactDOM from "react-dom";

function Index() {
  return <Game />;
}

ReactDOM.render(<Index />, document.getElementById("content"));
