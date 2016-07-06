"use strict";

import {actionTypes} from "./constants";

export function dealHands() {
  return {
    type: actionTypes.DEAL_HANDS
  };
}

export function acceptOrderUp() {
  return {
    type: actionTypes.ACCEPT_ORDER_UP
  };
}

export function passOrderUp() {
  return {
    type: actionTypes.PASS_ORDER_UP
  };
}
