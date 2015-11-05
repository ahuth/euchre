"use strict";

var React = require("react");
var ReactTestUtils = require('react-addons-test-utils');
var Pile = require("../../src/javascripts/components/pile");
var Card = require("../../src/javascripts/components/card");

describe("Pile", function () {
  var component;

  beforeEach(function () {
    var shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(<Pile
      north={{face: "ace", suit: "spades"}}
      south={{face: "ace", suit: "diamonds"}}
      east={{face: "ace", suit: "clubs"}}
      west={{face: "ace", suit: "hearts"}}
      middle={{face: "queen", suit: "hearts"}}
    />);
    component = shallowRenderer.getRenderOutput();
  });

  it("renders the North card", function () {
    var rows = component.props.children;
    var cell = rows[0].props.children[1];
    expect(cell.props.children).toEqual(<Card face="ace" suit="spades" />);
  });

  it("renders the South card", function () {
    var rows = component.props.children;
    var cell = rows[2].props.children[1];
    expect(cell.props.children).toEqual(<Card face="ace" suit="diamonds" />);
  });

  it("renders the East card", function () {
    var rows = component.props.children;
    var cell = rows[1].props.children[2];
    expect(cell.props.children).toEqual(<Card face="ace" suit="clubs" orientation="east" />);
  });

  it("renders the West card", function () {
    var rows = component.props.children;
    var cell = rows[1].props.children[0];
    expect(cell.props.children).toEqual(<Card face="ace" suit="hearts" orientation="east" />);
  });

  it("renders the middle card", function () {
    var rows = component.props.children;
    var cell = rows[1].props.children[1];
    expect(cell.props.children).toEqual(<Card face="queen" suit="hearts" />);
  });
});
