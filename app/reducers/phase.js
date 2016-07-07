"use strict";

import initialState from "./initial-state";
import {actionTypes, phases} from "../constants";

function phase(state = initialState.phase, action) {
  switch (action.type) {
    case actionTypes.ACCEPT_ORDER_UP:
      return phases.TRICK_WINNING;
    default:
      return state;
  }
}

export default phase;
