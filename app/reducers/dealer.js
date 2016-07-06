"use strict";

import initialState from "./initial-state";
import {actionTypes} from "../constants";

function dealer(state = initialState.dealer, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default dealer;
