"use strict";

import hands from "reducers/hands";
import {dealHands} from "../../app/actions";

describe("hands", function () {
  it("deals 5 random cards for dealHands", function () {
    var action = dealHands();
    var output = hands(null, action);
    expect(output.south.length).toBe(5);
    expect(output.south[0].face).toBeTruthy();
    expect(output.south[0].suit).toBeTruthy();
  });

  it("returns the current state for any unknown action", function () {
    var currentState = {
      south: [{face: "queen", suit: "hearts"}]
    }
    expect(hands(currentState, {type: "WAT"})).toEqual(currentState);
  });
});
