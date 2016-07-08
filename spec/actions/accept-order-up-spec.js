"use strict";

import acceptOrderUp from "actions/accept-order-up";
import {actionTypes} from "constants";

describe("actions", function () {
  describe("acceptOrderUp", function () {
    var action;

    beforeEach(function () {
      action = acceptOrderUp("clubs", "west");
    });

    it("returns the correct action", function () {
      expect(action).toEqual({
        type: actionTypes.ORDER_UP_ACCEPT,
        suit: "clubs",
        caller: "west"
      });
    });
  });
});
