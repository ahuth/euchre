"use strict";

import Card from "./card";
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
        {this.state.hands.south.map(function (card, index) {
          return <Card face={card.face} suit={card.suit} key={index} />;
        })}
      </div>
    );
  }
});

export default Game;
