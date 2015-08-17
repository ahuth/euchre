"use strict";

var React = require("react");
var Card = require("./components/card");

var Index = React.createClass({
  render: function () {
    return <Card face="ace" suit="spades" />;
  }
});

React.render(<Index />, document.getElementById("content"));
