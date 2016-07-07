"use strict";

import * as actions from "../app/actions";

describe("actions", function () {
  describe("dealHands", function () {
    it("returns the correct action", function () {
      expect(actions.dealHands()).toEqual({type: "hands_deal"});
    });
  });

  describe("acceptOrderUp", function () {
    it("returns the correct action", function () {
      expect(actions.acceptOrderUp("clubs", "west")).toEqual({
        type: "order_up_accept",
        suit: "clubs",
        caller: "west"
      });
    });
  });

  describe("passOrderUp", function () {
    it("returns the correct action", function () {
      expect(actions.passOrderUp()).toEqual({type: "order_up_pass"});
    });
  });

  describe("passOrderUpFinal", function () {
    it("returns the correct action", function () {
      expect(actions.passOrderUpFinal()).toEqual({type: "order_up_pass_final"});
    });
  });
});
