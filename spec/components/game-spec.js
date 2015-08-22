"use strict";

var React = require("react/addons");
var Game = require("../../src/javascripts/components/game");
var Hand = require("../../src/javascripts/components/hand");
var TestUtils = React.addons.TestUtils;

describe("Game", function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(<Game />);
  });

  it("deals four hands", function () {
    expect(TestUtils.scryRenderedComponentsWithType(component, Hand).length).toBe(4);
  });
});
