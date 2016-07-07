"use strict";

import {actionTypes} from "./constants";

export function dealHands() {
  return {
    type: actionTypes.HANDS_DEAL
  };
}

export function acceptOrderUp(suit, caller) {
  return {
    type: actionTypes.ORDER_UP_ACCEPT,
    suit: suit,
    caller: caller
  };
}

export function passOrderUp() {
  return {
    type: actionTypes.ORDER_UP_PASS
  };
}

export function passOrderUpFinal() {
  return {
    type: actionTypes.ORDER_UP_PASS_FINAL
  };
}
