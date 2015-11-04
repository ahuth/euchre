"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var ReactTestUtils = require('react-addons-test-utils');
var Card = require("../../src/javascripts/components/card");

describe("Card", function () {
  describe("showing the correct sprite", function () {
    it("uses the right sprite for the queen of hearts", function () {
      var component = ReactTestUtils.renderIntoDocument(<Card face="queen" suit="hearts" />);
      var importedSprite = ReactDOM.findDOMNode(component).querySelector("use");
      const spritePath = importedSprite.attributes["xlink:href"].value;
      expect(spritePath).toBe("images/spritesheets/sprites.svg#QH");
    });

    it("uses the right sprite for the six of clubs", function () {
      var component = ReactTestUtils.renderIntoDocument(<Card face="six" suit="clubs" />);
      var importedSprite = ReactDOM.findDOMNode(component).querySelector("use");
      const spritePath = importedSprite.attributes["xlink:href"].value;
      expect(spritePath).toBe("images/spritesheets/sprites.svg#6C");
    });

    it("uses the right sprite for the ace of diamonds", function () {
      var component = ReactTestUtils.renderIntoDocument(<Card face="ace" suit="diamonds" />);
      var importedSprite = ReactDOM.findDOMNode(component).querySelector("use");
      const spritePath = importedSprite.attributes["xlink:href"].value;
      expect(spritePath).toBe("images/spritesheets/sprites.svg#AD");
    });

    it("uses the right sprite for the ten of spades", function () {
      var component = ReactTestUtils.renderIntoDocument(<Card face="ten" suit="spades" />);
      var importedSprite = ReactDOM.findDOMNode(component).querySelector("use");
      const spritePath = importedSprite.attributes["xlink:href"].value;
      expect(spritePath).toBe("images/spritesheets/sprites.svg#10S");
    });

    it("uses the right sprite for the back of the card", function () {
      var component = ReactTestUtils.renderIntoDocument(<Card face="back" />);
      var importedSprite = ReactDOM.findDOMNode(component).querySelector("use");
      const spritePath = importedSprite.attributes["xlink:href"].value;
      expect(spritePath).toBe("images/spritesheets/sprites.svg#back");
    });
  });

  describe("orientation", function () {
    var shallowRenderer;

    beforeEach(function () {
      shallowRenderer = ReactTestUtils.createRenderer();
    });

    it("is vertically orientated by default", function () {
      shallowRenderer.render(<Card face="queen" suit="hearts" />);
      var component = shallowRenderer.getRenderOutput();
      expect(component.props.style.transform).not.toBeDefined();
      expect(component.props.style.transformOrigin).not.toBeDefined();
    });

    it("can be horizontally orientated", function () {
      shallowRenderer.render(<Card face="queen" suit="hearts" orientation="horizontal" />);
      var component = shallowRenderer.getRenderOutput();
      expect(component.props.style.transform).toBe("rotate(90deg)");
      expect(component.props.style.transformOrigin).toBe("72% 48%");
    });
  });
});
