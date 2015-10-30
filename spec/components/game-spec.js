"use strict";

var React = require("react");
var ReactTestUtils = require('react-addons-test-utils');
var Game = require("../../src/javascripts/components/game");
var Hand = require("../../src/javascripts/components/hand");

describe("Game", function () {
  var component;

  beforeEach(function () {
    component = ReactTestUtils.renderIntoDocument(<Game />);
  });

  it("deals four hands", function () {
    expect(ReactTestUtils.scryRenderedComponentsWithType(component, Hand).length).toBe(4);
  });
});
