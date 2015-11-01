"use strict";

var React = require("react");
var Hand = require("./hand");
var Card = require("./card");
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

  handleCardClick: function (card) {
    store.dispatch(actions.selectCard(card));
  },

  render: function () {
    return (
      <div className="game" style={styles.container}>
        <Hand cards={this.state.hands.north} cardClick={this.handleCardClick} />
        <div style={styles.middle}>
          <Hand cards={this.state.hands.west} cardClick={this.handleCardClick} />
          <Card face={this.state.played.face} suit={this.state.played.suit} />
          <Hand cards={this.state.hands.east} cardClick={this.handleCardClick} />
        </div>
        <Hand cards={this.state.hands.south} cardClick={this.handleCardClick} />
      </div>
    );
  }
});

var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
};

module.exports = Game;
