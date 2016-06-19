"use strict";

import initialState from "./initial-state";
import {actionTypes} from "../constants";

function phase(state = initialState.phase, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default phase;
