"use strict";

var React = require("react");
var Game = require("./components/game");

var Index = React.createClass({
  render: function () {
    return <Game />;
  }
});

React.render(<Index />, document.getElementById("content"));
