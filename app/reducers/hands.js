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
    north: deck.draw(5),
    south: deck.draw(5),
    east: deck.draw(5),
    west: deck.draw(5),
    kitty: deck.draw(4)
  };
}

export default hands;
