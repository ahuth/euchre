"use strict";

var React = require("react/addons");
var Game = require("../../src/javascripts/components/game");
var Pile = require("../../src/javascripts/components/pile");
var TestUtils = React.addons.TestUtils;

describe("Game", function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(<Game />);
  });

  it("renders a pile of cards", function () {
    expect(TestUtils.scryRenderedComponentsWithType(component, Pile).length).toBe(1);
  });
});
