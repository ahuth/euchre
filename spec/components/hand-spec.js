"use strict";

var React = require("react");
var ReactTestUtils = require('react-addons-test-utils');
var Hand = require("../../src/javascripts/components/hand");

describe("Hand", function () {
  var shallowRenderer;

  beforeEach(function () {
    shallowRenderer = ReactTestUtils.createRenderer();
  });

  describe("rendering cards", function () {
    it("does not render anything if no cards are passed in", function () {
      shallowRenderer.render(<Hand cards={[]} />);
      var component = shallowRenderer.getRenderOutput();
      var cards = component.props.children;
      expect(cards).toEqual([]);
    });

    it("renders one card if one is passed in", function () {
      shallowRenderer.render(<Hand cards={[{face: "jack", suit: "hearts"}]} />);
      var component = shallowRenderer.getRenderOutput();
      var cards = component.props.children;
      expect(cards.length).toBe(1);
      expect(cards[0].props.children.props).toEqual(jasmine.objectContaining({face: "jack", suit: "hearts"}));
    });

    it("renders many cards if many are passed in", function () {
      shallowRenderer.render(<Hand cards={[
        {face: "jack", suit: "hearts"},
        {face: "four", suit: "clubs"},
        {face: "king", suit: "diamonds"}
      ]} />);
      var component = shallowRenderer.getRenderOutput();
      var cards = component.props.children;
      expect(cards.length).toBe(3);
      expect(cards[0].props.children.props).toEqual(jasmine.objectContaining({face: "jack", suit: "hearts"}));
      expect(cards[1].props.children.props).toEqual(jasmine.objectContaining({face: "four", suit: "clubs"}));
      expect(cards[2].props.children.props).toEqual(jasmine.objectContaining({face: "king", suit: "diamonds"}));
    });
  });

  describe("orientation", function () {
    it("is oriented towards the North player by default", function () {
      shallowRenderer.render(<Hand cards={[{face: "jack", suit: "hearts"}]} />);
      var component = shallowRenderer.getRenderOutput();
      expect(component.props.style.flexDirection).not.toBeDefined();
      expect(component.props.children[0].props.children.props.orientation).not.toBeDefined();
    });

    it("can be oriented towards the East player", function () {
      shallowRenderer.render(<Hand cards={[{face: "jack", suit: "hearts"}]} orientation="east" />);
      var component = shallowRenderer.getRenderOutput();
      expect(component.props.style.flexDirection).toBe("column")
      expect(component.props.children[0].props.children.props.orientation).toBe("east");
    });
  });
});
