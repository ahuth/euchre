"use strict";

import OrderUp from "./phases/order-up";
import React from "react";
import store from "../store";
import {dealHands} from "../actions";
import {phases} from "../constants";

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

  renderPhase: function (phase) {
    switch (phase) {
      case phases.ORDER_UP:
        return <OrderUp dispatch={store.dispatch} hands={this.state.hands} />;
    }
  },

  render: function () {
    return (
      <div style={styles.container} className="game">
        {this.renderPhase(this.state.phase)}
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
