"use strict";

import * as actions from "../app/actions";

describe("actions", function () {
  describe("dealHands", function () {
    it("returns the correct action", function () {
      expect(actions.dealHands()).toEqual({type: "deal_hands"});
    });
  });
});
