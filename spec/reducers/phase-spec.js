"use strict";

import phase from "reducers/phase";
import {dealHands} from "../../app/actions";

describe("phase", function () {
  it("returns the current state for unknown actions", function () {
    var currentState = "hi";
    expect(phase(currentState, {type: "WAT"})).toEqual(currentState);
  });
});
