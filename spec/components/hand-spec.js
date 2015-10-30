"use strict";

var React = require("react");
var ReactTestUtils = require('react-addons-test-utils');
var Hand = require("../../src/javascripts/components/hand");

describe("Hand", function () {
  var shallowRenderer;

  beforeEach(function () {
    shallowRenderer = ReactTestUtils.createRenderer();
  });

  it("does not render anything if no cards are passed in", function () {
    shallowRenderer.render(<Hand cards={[]} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children).toEqual([]);
  });

  it("renders one card if one is passed in", function () {
    shallowRenderer.render(<Hand cards={[{face: "jack", suit: "hearts"}]} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children.length).toBe(1);
    expect(component.props.children[0].props.children.props).toEqual({face: "jack", suit: "hearts"});
  });

  it("renders many cards if many are passed in", function () {
    shallowRenderer.render(<Hand cards={[
      {face: "jack", suit: "hearts"},
      {face: "four", suit: "clubs"},
      {face: "king", suit: "diamonds"}
    ]} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children.length).toBe(3);
    expect(component.props.children[0].props.children.props).toEqual({face: "jack", suit: "hearts"});
    expect(component.props.children[1].props.children.props).toEqual({face: "four", suit: "clubs"});
    expect(component.props.children[2].props.children.props).toEqual({face: "king", suit: "diamonds"});
  });
});
