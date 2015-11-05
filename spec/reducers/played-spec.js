"use strict";

var played = require("../../src/javascripts/reducers/played");
var actions = require("../../src/javascripts/actions");

describe("played", function () {
  it("responds to SELECT_CARDS by capturing the selected card", function () {
    var card = {face: "queen", suit: "diamonds"};
    var action = actions.selectCard(card, "north");
    var output = played(undefined, action);
    expect(output).toEqual({
      north: {face: "queen", suit: "diamonds"},
      south: {face: undefined, suit: undefined},
      east: {face: undefined, suit: undefined},
      west: {face: undefined, suit: undefined}
    });
  });

  it("responds to any other action by returning the current state", function () {
    var currentState = {
      north: {face: "ace", suit: "spades"},
      south: {face: "king", suit: "spades"},
      east: {face: "queen", suit: "clubs"},
      west: {face: "jack", suit: "clubs"}
    };
    expect(played(currentState, {type: "WAT"})).toEqual(currentState);
  });
});
