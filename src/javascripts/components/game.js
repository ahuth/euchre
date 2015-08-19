"use strict";

var React = require("react");
var Hand = require("./hand");

var Game = React.createClass({
  getInitialState: function () {
    return {cards: []};
  },

  drawCard: function () {
    this.setState({
      cards: this.state.cards.concat([{face: "ace", suit: "spades"}])
    });
  },

  render: function () {
    return (
      <div>
        <button onClick={this.drawCard}>Draw!</button>
        <Hand cards={this.state.cards} />
      </div>
    );
  }
});

module.exports = Game;
