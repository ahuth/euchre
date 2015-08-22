"use strict";

var React = require("react");
var Hand = require("./hand");
var { createStore, combineReducers } = require("redux");
var reducers = require("../reducers");
var actions = require("../actions");
var app = combineReducers(reducers);
var store = createStore(app);

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

  render: function () {
    return (
      <div className="game">
        <Hand cards={this.state.hands.north} />
        <Hand cards={this.state.hands.east} />
        <Hand cards={this.state.hands.south} />
        <Hand cards={this.state.hands.west} />
      </div>
    );
  }
});

module.exports = Game;
