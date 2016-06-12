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
    south: deck.draw(5)
  };
}

export default hands;
