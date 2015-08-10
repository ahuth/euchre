"use strict";

var React = require("react");
var Hello = require("./hello");

var Index = React.createClass({
  render: function () {
    return <Hello />;
  }
});

React.render(<Index />, document.getElementById("content"));
