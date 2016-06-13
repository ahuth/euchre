"use strict";

import Hand from "./hand";
import React from "react";
import store from "../store";
import {dealHands} from "../actions";

var Game = React.createClass({
  getInitialState: function () {
    return store.getState();
  },

  componentWillMount: function () {
    store.unsubscribe = store.subscribe(this.onChange);
    store.dispatch(dealHands());
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
        <Hand cards={this.state.hands.west} />
        <Hand cards={this.state.hands.east} />
        <Hand cards={this.state.hands.south} />
      </div>
    );
  }
});

export default Game;
