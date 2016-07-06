"use strict";

import * as actions from "../app/actions";

describe("actions", function () {
  describe("dealHands", function () {
    it("returns the correct action", function () {
      expect(actions.dealHands()).toEqual({type: "deal_hands"});
    });
  });

  describe("acceptOrderUp", function () {
    it("returns the correct action", function () {
      expect(actions.acceptOrderUp()).toEqual({type: "accept_order_up"});
    });
  });

  describe("passOrderUp", function () {
    it("returns the correct action", function () {
      expect(actions.passOrderUp()).toEqual({type: "pass_order_up"});
    });
  });
});
