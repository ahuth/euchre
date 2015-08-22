"use strict";

var hands = require("../../src/javascripts/reducers/hands");
var actions = require("../../src/javascripts/actions");

describe("hands", function () {
  it("responds to DEAL_HANDS by dealing 5 random cards to each player", function () {
    var action = actions.dealHands();
    var output = hands(null, action);
    expect(output.north.length).toBe(5);
    expect(output.south.length).toBe(5);
    expect(output.east.length).toBe(5);
    expect(output.west.length).toBe(5);
  });

  it("responds to any other action by returning the current state", function () {
    var currentState = {
      north: [{ card: "a" }],
      south: [{ card: "b" }],
      east: [{ card: "c" }],
      west: [{ card: "d" }]
    }
    expect(hands(currentState, {type: "WAT"})).toEqual(currentState);
  });
});
