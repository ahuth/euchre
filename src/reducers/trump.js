import initialState from "./initial-state";
import {actionTypes} from "../constants";

function trump(state = initialState.trump, action) {
  switch (action.type) {
    case actionTypes.ORDER_UP_ACCEPT:
      return Object.assign({}, state, {suit: action.suit, caller: action.caller});
    default:
      return state;
  }
}

export default trump;
