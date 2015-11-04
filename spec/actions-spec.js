"use strict";

var actions = require("../src/javascripts/actions");

describe("actions", function () {
  describe("#dealHands", function () {
    it("returns the correct action", function () {
      expect(actions.dealHands()).toEqual({type: "DEAL_HANDS"});
    });
  });

  describe("#selectCard", function () {
    it("returns the correct action", function () {
      expect(actions.selectCard({face: "ten", suit: "clubs"}, "west")).toEqual({
        type: "SELECT_CARD",
        card: {face: "ten", suit: "clubs"},
        from: "west"
      });
    });
  });
});
