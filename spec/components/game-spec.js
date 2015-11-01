"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var ReactTestUtils = require('react-addons-test-utils');
var Game = require("../../src/javascripts/components/game");
var Table = require("../../src/javascripts/components/table");
var Card = require("../../src/javascripts/components/card");
var actions = require("../../src/javascripts/actions");

describe("Game", function () {
  var component;

  beforeEach(function () {
    component = ReactTestUtils.renderIntoDocument(<Game />);
  });

  it("renders a table", function () {
    expect(ReactTestUtils.scryRenderedComponentsWithType(component, Table).length).toBe(1);
  });

  it("deals five cards to each player and has a discard spot", function () {
    expect(ReactTestUtils.scryRenderedComponentsWithType(component, Card).length).toBe(21);
  });

  it("dispatches the SELECT_CARD action when a card is clicked", function () {
    var selectCardSpy = spyOn(actions, "selectCard").and.callThrough();
    var card = ReactTestUtils.scryRenderedComponentsWithType(component, Card)[0];
    var node = ReactDOM.findDOMNode(card);
    ReactTestUtils.Simulate.click(node);
    expect(selectCardSpy).toHaveBeenCalled();
  });
});
