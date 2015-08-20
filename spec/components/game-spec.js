"use strict";

var React = require("react/addons");
var Game = require("../../src/javascripts/components/game");
var Score = require("../../src/javascripts/components/score");
var TestUtils = React.addons.TestUtils;

describe("Game", function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(<Game />);
  });

  it("renders some score keeping cards", function () {
    expect(TestUtils.scryRenderedComponentsWithType(component, Score).length).toBe(1);
  });
});
