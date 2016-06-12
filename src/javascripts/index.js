"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var Index = React.createClass({
  render: function () {
    return <div>hello world</div>;
  }
});

ReactDOM.render(<Index />, document.getElementById("content"));
