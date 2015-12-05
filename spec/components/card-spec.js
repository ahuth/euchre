"use strict";

var React = require("react");
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
    expect(path).toBe("images/cards/qh.svg");
  });

  it("uses the right image for the six of clubs", function () {
    shallowRenderer.render(<Card face="six" suit="clubs" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/cards/6c.svg");
  });

  it("uses the right image for the ace of diamonds", function () {
    shallowRenderer.render(<Card face="ace" suit="diamonds" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/cards/1d.svg");
  });

  it("uses the right image for the ten of spades", function () {
    shallowRenderer.render(<Card face="ten" suit="spades" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/cards/10s.svg");
  });

  it("uses the right image for the back of the card", function () {
    shallowRenderer.render(<Card face="back" />);
    var component = shallowRenderer.getRenderOutput();
    const path = component.props.src;
    expect(path).toBe("images/cards/back.svg");
  });

  it("does show anything if the card is not recognized", function () {
    shallowRenderer.render(<Card face="ninja" suit="turtles" />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.style).toEqual(jasmine.objectContaining({visibility: "hidden"}));
  });
});
