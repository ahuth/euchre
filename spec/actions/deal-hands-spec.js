"use strict";

import dealHands from "actions/deal-hands";
import {actionTypes} from "constants";

describe("actions", function () {
  describe("dealHands", function () {
    var action;

    beforeEach(function () {
      action = dealHands();
    });

    it("returns the correct action", function () {
      expect(action).toEqual({type: actionTypes.HANDS_DEAL});
    });
  });
});
