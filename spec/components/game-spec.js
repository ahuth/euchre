"use strict";

var React = require("react/addons");
var Game = require("../../src/javascripts/components/game");
var Hand = require("../../src/javascripts/components/hand");
var Card = require("../../src/javascripts/components/card");
var TestUtils = React.addons.TestUtils;

describe("Game", function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(<Game />);
  });

  it("renders a hand with no cards", function () {
    expect(TestUtils.scryRenderedComponentsWithType(component, Hand).length).toBe(1);
    expect(TestUtils.scryRenderedComponentsWithType(component, Card).length).toBe(0);
  });

  it("adds a card when the button is clicked", function () {
    var button = TestUtils.findRenderedDOMComponentWithTag(component, "button");
    expect(TestUtils.scryRenderedComponentsWithType(component, Card).length).toBe(0);
    TestUtils.Simulate.click(button);
    expect(TestUtils.scryRenderedComponentsWithType(component, Card).length).toBe(1);
    TestUtils.Simulate.click(button);
    expect(TestUtils.scryRenderedComponentsWithType(component, Card).length).toBe(2);
    TestUtils.Simulate.click(button);
    expect(TestUtils.scryRenderedComponentsWithType(component, Card).length).toBe(3);
  });
});
