"use strict";

import passOrderUp from "actions/pass-order-up";
import {actionTypes} from "../../app/constants";

describe("actions", function () {
  describe("passOrderUp", function () {
    var action;

    beforeEach(function () {
      action = passOrderUp();
    });

    it("returns the correct action", function () {
      expect(action).toEqual({type: actionTypes.ORDER_UP_PASS});
    });
  });
});
