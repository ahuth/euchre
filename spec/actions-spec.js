"use strict";

import * as actions from "../app/actions";

describe("actions", function () {
  describe("dealHands", function () {
    it("returns the correct action", function () {
      expect(actions.dealHands()).toEqual({type: "deal_hands"});
    });
  });

  describe("passOrderUp", function () {
    it("returns the correct action", function () {
      expect(actions.passOrderUp()).toEqual({type: "pass_order_up"});
    });
  });
});
