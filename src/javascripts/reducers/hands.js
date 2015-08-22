"use strict";

var Deck = require("../utils/deck");
var initialState = require("./initial-state");

function hands(state = initialState.hands, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      return dealHands();
    default:
      return state;
  }
}

function dealHands() {
  var deck = new Deck();
  return {
    north: dealFive(deck),
    south: dealFive(deck),
    east: dealFive(deck),
    west: dealFive(deck)
  };
}

function dealFive(deck) {
  return [0, 1, 2, 3, 4].map(function () {
    return deck.draw();
  });
}

module.exports = hands;
