"use strict";

var Deck = require("../utils/deck");
var initialState = require("./initial-state");

function hands(state = initialState.hands, action) {
  switch (action.type) {
    case "DEAL_HANDS":
      return dealHands();
    case "SELECT_CARD":
      return removeCard(state, action.card);
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

function removeCard(state, card) {
  var notCard = function (item) {
    return !(item.face === card.face && item.suit === card.suit);
  };
  return {
    north: state.north.filter(notCard),
    south: state.south.filter(notCard),
    east: state.east.filter(notCard),
    west: state.west.filter(notCard)
  };
}

function dealFive(deck) {
  return [0, 1, 2, 3, 4].map(function () {
    return deck.draw();
  });
}

module.exports = hands;
