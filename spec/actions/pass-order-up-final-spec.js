"use strict";

import passOrderUpFinal from "actions/pass-order-up-final";
import {actionTypes} from "../../app/constants";

describe("actions", function () {
  describe("passOrderUpFinal", function () {
    var action;

    beforeEach(function () {
      action = passOrderUpFinal();
    });

    it("returns the correct action", function () {
      expect(action).toEqual({type: actionTypes.ORDER_UP_PASS_FINAL});
    });
  });
});
