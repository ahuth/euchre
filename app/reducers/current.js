"use strict";

import initialState from "./initial-state";
import {actionTypes} from "../constants";

function current(state = initialState.current, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default current;
