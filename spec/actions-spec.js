"use strict";

var actions = require("../src/javascripts/actions");

describe("actions", function () {
  describe("#dealHands", function () {
    it("returns the correct action", function () {
      expect(actions.dealHands()).toEqual({type: "DEAL_HANDS"});
    });
  });
});
