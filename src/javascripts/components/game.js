"use strict";

var React = require("react");
var Hand = require("./hand");
var Deck = require("../utils/deck");

var Game = React.createClass({
  getInitialState: function () {
    return {cards: []};
  },

  componentWillMount: function () {
    this.deck = new Deck();
  },

  drawCard: function () {
    if (!this.deck.isEmpty()) {
      this.setState({
        cards: this.state.cards.concat([this.deck.draw()])
      });
    }
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
