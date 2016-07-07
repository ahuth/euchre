"use strict";

import initialState from "./initial-state";
import {actionTypes, positions as positionTypes} from "../constants";

function positions(state = initialState.positions, action) {
  switch (action.type) {
    case actionTypes.ACCEPT_ORDER_UP:
      return Object.assign({}, state, {current: rotate(state.dealer), initial: rotate(state.dealer)});
    case actionTypes.PASS_ORDER_UP:
      return Object.assign({}, state, {current: rotate(state.current)});
    default:
      return state;
  }
}

function rotate(position) {
  switch (position) {
    case positionTypes.NORTH:
      return positionTypes.EAST;
    case positionTypes.SOUTH:
      return positionTypes.WEST;
    case positionTypes.EAST:
      return positionTypes.SOUTH;
    case positionTypes.WEST:
      return positionTypes.NORTH;
  }
}

export default positions;
