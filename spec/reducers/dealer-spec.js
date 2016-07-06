"use strict";

import positions from "reducers/positions";

describe("reducers", function () {
  describe("positions", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = "hi";
      expect(positions(currentState, {type: "WAT"})).toEqual(currentState);
    });
  });
});
