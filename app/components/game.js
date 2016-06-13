"use strict";

import Table from "./table";
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
        <Table
          hands={this.state.hands}
        />
      </div>
    );
  }
});

export default Game;
