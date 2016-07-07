"use strict";

import initialState from "./initial-state";
import {actionTypes, phases} from "../constants";

function phase(state = initialState.phase, action) {
  switch (action.type) {
    case actionTypes.ORDER_UP_ACCEPT:
      return phases.TRICK_WINNING;
    case actionTypes.ORDER_UP_PASS_FINAL:
      return phases.PICK_TRUMP;
    default:
      return state;
  }
}

export default phase;
