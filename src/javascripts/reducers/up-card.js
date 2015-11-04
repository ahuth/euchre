"use strict";

var initialState = require("./initial-state");

function upCard(state = initialState.scores, action) {
  switch (action.type) {
    default:
      return state;
  }
}

module.exports = upCard;
