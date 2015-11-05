"use strict";

var initialState = require("./initial-state");

function played(state = initialState.played, action) {
  switch (action.type) {
    case "SELECT_CARD":
      return Object.assign({}, state, capture(action.card, action.from));
    default:
      return state;
  }
}

function capture(card, player) {
  var output = {};
  output[player] = card;
  return output;
}

module.exports = played;
