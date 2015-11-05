"use strict";

var initialState = require("./initial-state");

function scores(state = initialState.scores, action) {
  switch (action.type) {
    default:
      return state;
  }
}

module.exports = scores;
