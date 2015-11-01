"use strict";

var initialState = require("./initial-state");

function played(state = initialState.played, action) {
  switch (action.type) {
    case "SELECT_CARD":
      return Object.assign({}, action.card);
    default:
      return state;
  }
}

module.exports = played;
