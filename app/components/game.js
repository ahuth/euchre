"use strict";

import OrderUp from "./phases/order-up";
import React from "react";
import store from "../store";
import {dealHands} from "../actions";

var Game = React.createClass({
  getInitialState: function () {
    return store.getState();
  },

  componentWillMount: function () {
    this.unsubscribe = store.subscribe(this.onChange);
    store.dispatch(dealHands());
  },

  componentWillUnmount: function () {
    this.unsubscribe();
  },

  onChange: function () {
    this.setState(store.getState());
  },

  render: function () {
    return (
      <div style={styles.container} className="game">
        <OrderUp hands={this.state.hands} />
      </div>
    );
  }
});

var styles = {
  container: {
    height: "97vh"
  }
}

export default Game;
