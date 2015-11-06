"use strict";

var Deck = require("../utils/deck");
var initialState = require("./initial-state");

function hands(state = initialState.hands, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      return dealHands();
    case "SELECT_CARD":
      return Object.assign({}, state, removeCard(state, action.card, action.from));
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

function removeCard(state, card, from) {
  var output = {};
  output[from] = state[from].filter(function (item) {
    return !areEqual(card, item);
  });
  return output;
}

function dealFive(deck) {
  return [0, 1, 2, 3, 4].map(function () {
    return deck.draw();
  });
}

function areEqual(card, otherCard) {
  return card.face === otherCard.face && card.suit === otherCard.suit;
}

module.exports = hands;
