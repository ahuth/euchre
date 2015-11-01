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

  handleCardClick: function (card) {
    store.dispatch(actions.selectCard(card));
  },

  render: function () {
    return (
      <div className="game">
        <Table
          hands={this.state.hands}
          played={this.state.played}
          cardClick={this.handleCardClick}
        />
      </div>
    );
  }
});

module.exports = Game;
