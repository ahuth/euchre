import {actionTypes} from "../constants";

function acceptOrderUp(suit, caller) {
  return {
    type: actionTypes.ORDER_UP_ACCEPT,
    suit: suit,
    caller: caller
  };
}

export default acceptOrderUp;
