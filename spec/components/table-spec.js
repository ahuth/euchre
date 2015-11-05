"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var ReactTestUtils = require('react-addons-test-utils');
var Table = require("../../src/javascripts/components/table");
var Hand = require("../../src/javascripts/components/hand");
var Card = require("../../src/javascripts/components/card");
var Pile = require("../../src/javascripts/components/pile");
var Score = require("../../src/javascripts/components/score");

describe("Table", function () {
  var component, clickHandlerSpy;

  const hands = {
    north: [{face: "ace", suit: "clubs"}, {face: "king", suit: "hearts"}],
    south: [{face: "nine", suit: "clubs"}],
    east: [{face: "ten", suit: "clubs"}],
    west: [{face: "jack", suit: "clubs"}]
  };

  const played = {
    north: {face: "king", suit: "hearts"},
    south: {face: "king", suit: "clubs"},
    east: {face: "king", suit: "diamonds"},
    west: {face: "king", suit: "spades"}
  };

  beforeEach(function () {
    clickHandlerSpy = jasmine.createSpy();
    component = ReactTestUtils.renderIntoDocument(<Table
      hands={hands}
      played={played}
      cardClick={clickHandlerSpy}
      scores={{north: 5, west: 6}}
      middle={{face: "queen", suit: "diamonds"}}
    />);
  });

  it("renders the hands", function () {
    var hands = ReactTestUtils.scryRenderedComponentsWithType(component, Hand);
    expect(hands.length).toBe(4);

    var [north, west, east, south] = [hands[0], hands[1], hands[2], hands[3]];
    expect(ReactTestUtils.scryRenderedComponentsWithType(north, Card).length).toBe(2);
    expect(ReactTestUtils.scryRenderedComponentsWithType(west, Card).length).toBe(1);
    expect(ReactTestUtils.scryRenderedComponentsWithType(east, Card).length).toBe(1);
    expect(ReactTestUtils.scryRenderedComponentsWithType(south, Card).length).toBe(1);
  });

  it("renders the pile", function () {
    var piles = ReactTestUtils.scryRenderedComponentsWithType(component, Pile);
    expect(piles.length).toBe(1);
    expect(piles[0].props).toEqual({
      north: {face: "king", suit: "hearts"},
      south: {face: "king", suit: "clubs"},
      east: {face: "king", suit: "diamonds"},
      west: {face: "king", suit: "spades"},
      middle: {face: "queen", suit: "diamonds"}
    });
  });

  it("renders the score cards", function () {
    var scoreCards = ReactTestUtils.scryRenderedComponentsWithType(component, Score);
    expect(scoreCards.length).toBe(2);
    expect(scoreCards[0].props).toEqual({score: 6, suit: "spades"});
    expect(scoreCards[1].props).toEqual({score: 5, suit: "hearts"});
  });

  it("calls the click handler when a card in a hand is clicked", function () {
    var hand = ReactTestUtils.scryRenderedComponentsWithType(component, Hand)[0];
    var card = ReactTestUtils.scryRenderedComponentsWithType(hand, Card)[0];
    var node = ReactDOM.findDOMNode(card);
    ReactTestUtils.Simulate.click(node);
    expect(clickHandlerSpy).toHaveBeenCalled();
    expect(clickHandlerSpy.calls.count()).toBe(1);
  });
});
