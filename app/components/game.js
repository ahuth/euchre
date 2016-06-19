"use strict";

import Kitty from "./kitty";
import Table from "./table";
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
        <Table hands={this.state.hands} />
        <div style={styles.kitty}>
          <Kitty cards={this.state.hands.kitty} />
        </div>
      </div>
    );
  }
});

var styles = {
  container: {
    height: "97vh",
    position: "relative"
  },
  kitty: {
    position: "absolute",
    top: "calc(50% - 51px)",
    right: "calc(50% - 31px)"
  }
}

export default Game;
