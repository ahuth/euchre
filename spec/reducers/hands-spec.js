"use strict";

import hands from "reducers/hands";
import {dealHands} from "../../app/actions";

describe("hands", function () {
  it("returns the current state for unknown actions", function () {
    var currentState = {
      south: [{face: "queen", suit: "hearts"}]
    }
    expect(hands(currentState, {type: "WAT"})).toEqual(currentState);
  });

  describe("for dealHands", function () {
    var action;

    beforeEach(function () {
      action = dealHands();
    });

    it("deals 5 objects", function () {
      var output = hands(null, action);
      expect(output.south.length).toBe(5);
    });

    it("deals objects that represents cards", function () {
      var output = hands(null, action);
      expect(output.south[0].face).toBeTruthy();
      expect(output.south[0].suit).toBeTruthy();
    });
  });
});
