"use strict";

var scores = require("../../src/javascripts/reducers/scores");
var actions = require("../../src/javascripts/actions");

describe("scores", function () {
  it("responds to any other action by returning the current state", function () {
    var currentState = {
      north: 6,
      west: 4
    };
    expect(scores(currentState, {type: "WAT"})).toEqual(currentState);
  });
});
