"use strict";

import {actionTypes} from "../constants";

function passOrderUp() {
  return {
    type: actionTypes.ORDER_UP_PASS
  };
}

export default passOrderUp;
