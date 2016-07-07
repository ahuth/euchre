"use strict";

import initialState from "./initial-state";
import {actionTypes} from "../constants";

function trump(state = initialState.trump, action) {
  switch (action.type) {
    case actionTypes.ACCEPT_ORDER_UP:
      return Object.assign({}, state, {suit: action.suit, caller: action.caller});
    default:
      return state;
  }
}

export default trump;
