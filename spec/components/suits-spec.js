"use strict";

var React = require("react");
var ReactTestUtils = require('react-addons-test-utils');
var Suits = require("../../src/javascripts/components/suits");

describe("Suits", function () {
  var shallowRenderer, component, clickHandlerSpy;
  const blackCardStyles = {padding: "0.5em", border: "1px solid darkgray", borderRadius: "6px", color: "black"};
  const redCardStyles = {padding: "0.5em", border: "1px solid darkgray", borderRadius: "6px", color: "red"};

  beforeEach(function () {
    clickHandlerSpy = jasmine.createSpy();
    shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(<Suits />);
    component = shallowRenderer.getRenderOutput();
  });

  it("shows the four suits", function () {
    expect(component.props.children).toEqual([
      <span style={blackCardStyles}>♠</span>,
      <span style={redCardStyles}>♥</span>,
      <span style={redCardStyles}>♦</span>,
      <span style={blackCardStyles}>♣</span>
    ]);
  });
});
