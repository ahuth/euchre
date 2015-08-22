"use strict";

var React = require("react");
var Pile = require("./pile");
var Deck = require("../utils/deck");

var Game = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentWillMount: function () {
    this.deck = new Deck();
  },

  drawCard: function () {
    if (!this.state.north) {
      this.setState({north: this.deck.draw()});
    } else if (!this.state.east) {
      this.setState({east: this.deck.draw()});
    } else if (!this.state.south) {
      this.setState({south: this.deck.draw()});
    } else if (!this.state.west) {
      this.setState({west: this.deck.draw()});
    }
  },

  render: function () {
    return (
      <div className="game">
        <button onClick={this.drawCard}>Draw!</button>
        <Pile
          north={this.state.north}
          east={this.state.east}
          south={this.state.south}
          west={this.state.west}
        />
      </div>
    );
  }
});

module.exports = Game;
