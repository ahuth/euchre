"use strict";

var React = require("react");

var Suits = React.createClass({
  render: function () {
    return (
      <div className="suits" style={styles.container}>
        <span style={Object.assign({}, styles.card, styles.black)}>♠</span>
        <span style={Object.assign({}, styles.card, styles.red)}>♥</span>
        <span style={Object.assign({}, styles.card, styles.red)}>♦</span>
        <span style={Object.assign({}, styles.card, styles.black)}>♣</span>
      </div>
    );
  }
});

var styles={
  container: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "1.4rem"
  },
  card: {
    padding: "0.5em",
    border: "1px solid darkgray",
    borderRadius: "6px"
  },
  black: {
    color: "black"
  },
  red: {
    color: "red"
  }
};

module.exports = Suits;
