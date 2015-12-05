"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var ReactTestUtils = require('react-addons-test-utils');
var Card = require("../../src/javascripts/components/card");

describe("Card", function () {
  var shallowRenderer;

  beforeEach(function () {
    shallowRenderer = ReactTestUtils.createRenderer();
  });

  it("uses the right image for the queen of hearts", function () {
    shallowRenderer.render(<Card face="queen" suit="hearts" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/qh.svg");
  });

  it("uses the right image for the six of clubs", function () {
    shallowRenderer.render(<Card face="six" suit="clubs" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/6c.svg");
  });

  it("uses the right image for the ace of diamonds", function () {
    shallowRenderer.render(<Card face="ace" suit="diamonds" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/1d.svg");
  });

  it("uses the right image for the ten of spades", function () {
    shallowRenderer.render(<Card face="ten" suit="spades" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/10s.svg");
  });

  it("uses the right image for the back of the card", function () {
    shallowRenderer.render(<Card face="back" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/back.svg");
  });

  it("does not have a src attribute if the card is not recognized", function () {
    shallowRenderer.render(<Card face="ninja" suit="turtles" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("");
  });
});
