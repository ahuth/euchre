"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var Game = require("./components/game");

var Index = React.createClass({
  render: function () {
    return <Game />;
  }
});

ReactDOM.render(<Index />, document.getElementById("content"));
