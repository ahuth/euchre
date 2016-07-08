"use strict";

import passOrderUpFinal from "./pass-order-up-final";
import passOrderUpInitial from "./pass-order-up-initial";

function passOrderUp() {
  return function (dispatch, getState) {
    var positions = getState().positions;
    if (positions.current === positions.dealer) {
      dispatch(passOrderUpFinal());
    } else {
      dispatch(passOrderUpInitial());
    }
  };
}

export default passOrderUp;
