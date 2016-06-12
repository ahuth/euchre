"use strict";

import Deck from "utils/deck";
import initialState from "./initial-state";
import {actionTypes} from "../constants";

function hands(state = initialState.hands, action) {
  switch (action.type) {
    case actionTypes.DEAL_HANDS:
      return Object.assign({}, state, dealHands());
    default:
      return state;
  }
}

function dealHands() {
  var deck = new Deck();
  return {
    south: dealFive(deck)
  };
}

function dealFive(deck) {
  return [0, 1, 2, 3, 4].map(function () {
    return deck.draw();
  });
}

export default hands;
