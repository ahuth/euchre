"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var ReactTestUtils = require('react-addons-test-utils');
var Table = require("../../src/javascripts/components/table");
var Hand = require("../../src/javascripts/components/hand");
var Card = require("../../src/javascripts/components/card");

describe("Table", function () {
  var component, clickHandlerSpy;

  const hands = {
    north: [{face: "ace", suit: "clubs"}, {face: "king", suit: "hearts"}],
    south: [{face: "nine", suit: "clubs"}],
    east: [{face: "ten", suit: "clubs"}],
    west: [{face: "jack", suit: "clubs"}]
  };

  beforeEach(function () {
    clickHandlerSpy = jasmine.createSpy();
    component = ReactTestUtils.renderIntoDocument(<Table
      hands={hands}
      played={{face: "queen", suit: "diamonds"}}
      cardClick={clickHandlerSpy}
    />);
  });

  it("renders the hands", function () {
    var hands = ReactTestUtils.scryRenderedComponentsWithType(component, Hand)
    expect(hands.length).toBe(4);

    var [north, west, east, south] = [hands[0], hands[1], hands[2], hands[3]];
    expect(ReactTestUtils.scryRenderedComponentsWithType(north, Card).length).toBe(2);
    expect(ReactTestUtils.scryRenderedComponentsWithType(west, Card).length).toBe(1);
    expect(ReactTestUtils.scryRenderedComponentsWithType(east, Card).length).toBe(1);
    expect(ReactTestUtils.scryRenderedComponentsWithType(south, Card).length).toBe(1);
  });

  it("renders the played card if present", function () {
    var cards = ReactTestUtils.scryRenderedComponentsWithType(component, Card);
    const playedIndex = hands.north.length + hands.west.length;
    expect(cards[playedIndex].props).toEqual({face: "queen", suit: "diamonds"});
  });

  it("calls the click handler when a card in a hand is clicked", function () {
    var card = ReactTestUtils.scryRenderedComponentsWithType(component, Card)[0];
    var node = ReactDOM.findDOMNode(card);
    ReactTestUtils.Simulate.click(node);
    expect(clickHandlerSpy).toHaveBeenCalled();
    expect(clickHandlerSpy.calls.count()).toBe(1);
  });
});
