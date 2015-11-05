"use strict";

var React = require("react");
var Table = require("./table");
var actions = require("../actions");
var store = require ("../store");

var Game = React.createClass({
  getInitialState: function () {
    return store.getState();
  },

  componentWillMount: function () {
    store.unsubscribe = store.subscribe(this.onChange);
    store.dispatch(actions.dealHands());
  },

  componentWillUnmount: function () {
    store.unsubscribe();
  },

  onChange: function () {
    this.setState(store.getState());
  },

  handleCardClick: function (card, from) {
    store.dispatch(actions.selectCard(card, from));
  },

  render: function () {
    return (
      <div className="game">
        <Table
          hands={this.state.hands}
          played={this.state.played}
          scores={this.state.scores}
          middle={this.state.upCard}
          cardClick={this.handleCardClick}
        />
      </div>
    );
  }
});

module.exports = Game;
