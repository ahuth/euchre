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

  it("responds to SELECT_CARD by removing that card from itself", function () {
    var currentState = {
      north: [{ face: "ace", suit: "clubs" }, { face: "king", suit: "diamonds" }],
      south: [{ face: "ten", suit: "spades" }],
      east: [{ face: "queen", suit: "diamonds" }],
      west: [{ face: "jack", suit: "hearts" }, { face: "ace", suit: "diamonds" }]
    };
    var action = actions.selectCard({face: "ace", suit: "clubs"});
    expect(hands(currentState, action)).toEqual({
      north: [{ face: "king", suit: "diamonds" }],
      south: [{ face: "ten", suit: "spades" }],
      east: [{ face: "queen", suit: "diamonds" }],
      west: [{ face: "jack", suit: "hearts" }, { face: "ace", suit: "diamonds" }]
    })
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
