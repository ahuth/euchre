"use strict";

import passOrderUpInitial from "actions/pass-order-up-initial";
import {actionTypes} from "constants";

describe("actions", function () {
  describe("passOrderUpInitial", function () {
    var action;

    beforeEach(function () {
      action = passOrderUpInitial();
    });

    it("returns the correct action", function () {
      expect(action).toEqual({type: actionTypes.ORDER_UP_PASS_INITIAL});
    });
  });
});
