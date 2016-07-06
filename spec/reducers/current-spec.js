"use strict";

import current from "reducers/current";

describe("reducers", function () {
  describe("current", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = "hi";
      expect(current(currentState, {type: "WAT"})).toEqual(currentState);
    });
  });
});
