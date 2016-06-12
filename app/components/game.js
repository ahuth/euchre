"use strict";

import Card from "./card";
import React from "react";
import store from "../store";

var Game = React.createClass({
  getInitialState: function () {
    return store.getState();
  },

  componentWillMount: function () {
    store.unsubscribe = store.subscribe(this.onChange);
  },

  componentWillUnmount: function () {
    store.unsubscribe();
  },

  onChange: function () {
    this.setState(store.getState());
  },

  render: function () {
    return <Card face="ten" suit="spades" />;
  }
});

export default Game;
