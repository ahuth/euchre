"use strict";

var React = require("react");
var { composeReducers, createStore } = require("redux");
var reducers = require("./reducers");
var actions = require("./actions");
var app = composeReducers(reducers);
var store = createStore(app);

var Hello = React.createClass({
  componentWillMount: function () {
    store.unsubscribe = store.subscribe(this.onChange);
  },

  componentWillUnmount: function () {
    store.unsubscribe();
  },

  getInitialState: function () {
    return store.getState();
  },

  handleClick: function () {
    store.dispatch(actions.click());
  },

  onChange: function () {
    this.setState(store.getState());
  },

  render: function () {
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={this.handleClick}>Click!</button>
        <span>Clicks: {this.state.clicked}</span>
      </div>
    );
  }
});

module.exports = Hello;
