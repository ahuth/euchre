"use strict";

import dealer from "reducers/dealer";

describe("reducers", function () {
  describe("dealer", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = "hi";
      expect(dealer(currentState, {type: "WAT"})).toEqual(currentState);
    });
  });
});
