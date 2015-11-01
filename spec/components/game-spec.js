"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var ReactTestUtils = require('react-addons-test-utils');
var Game = require("../../src/javascripts/components/game");
var Hand = require("../../src/javascripts/components/hand");
var Card = require("../../src/javascripts/components/card");
var actions = require("../../src/javascripts/actions");

describe("Game", function () {
  var component;

  beforeEach(function () {
    component = ReactTestUtils.renderIntoDocument(<Game />);
  });

  it("deals four hands", function () {
    expect(ReactTestUtils.scryRenderedComponentsWithType(component, Hand).length).toBe(4);
  });

  describe("clicking a card in a hand", function () {
    it("triggers the SELECT_CARD action", function () {
      var selectCardSpy = spyOn(actions, "selectCard").and.callThrough();
      var hand = ReactTestUtils.scryRenderedComponentsWithType(component, Hand)[0];
      var card = ReactTestUtils.scryRenderedComponentsWithType(hand, Card)[0];
      var node = ReactDOM.findDOMNode(card);
      ReactTestUtils.Simulate.click(node);
      expect(selectCardSpy).toHaveBeenCalled();
      expect(selectCardSpy.calls.count()).toBe(1);
    });
  });
});
