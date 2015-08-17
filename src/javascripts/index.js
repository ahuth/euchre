"use strict";

var React = require("react");
var Card = require("./components/card");

var Index = React.createClass({
  render: function () {
    return <Card id="AS" />;
  }
});

React.render(<Index />, document.getElementById("content"));
