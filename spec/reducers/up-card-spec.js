"use strict";

var upCard = require("../../src/javascripts/reducers/up-card");
var actions = require("../../src/javascripts/actions");

describe("upCard", function () {
  it("responds to any other action by returning the current state", function () {
    var currentState = {
      face: "nine",
      west: "diamonds"
    };
    expect(upCard(currentState, {type: "WAT"})).toEqual(currentState);
  });
});
