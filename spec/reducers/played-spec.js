"use strict";

var played = require("../../src/javascripts/reducers/played");
var actions = require("../../src/javascripts/actions");

describe("played", function () {
  it("responds to SELECT_CARDS by capturing the selected card", function () {
    var action = actions.selectCard({
      face: "queen",
      suit: "diamonds"
    });
    var output = played(null, action);
    expect(output).toEqual({
      face: "queen",
      suit: "diamonds"
    });
  });

  it("responds to any other action by returning the current state", function () {
    var currentState = {
      face: "ace",
      suit: "spades"
    };
    expect(played(currentState, {type: "WAT"})).toEqual(currentState);
  });
});
