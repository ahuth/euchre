"use strict";

var React = require("react");
var Score = require("./score");

var Game = React.createClass({
  getInitialState: function () {
    return {score: 0};
  },

  drawCard: function () {
    this.setState({
      score: this.state.score < 10 ? this.state.score + 1 : 0
    });
  },

  render: function () {
    return (
      <div>
        <button onClick={this.drawCard}>Draw!</button>
        <Score score={this.state.score} suit="hearts" />
      </div>
    );
  }
});

module.exports = Game;
