"use strict";

var React = require("react");

var Index = React.createClass({
  render: function () {
    return <span>hello world</span>;
  }
});

React.render(<Index />, document.getElementById("content"));
