"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var ReactTestUtils = require('react-addons-test-utils');
var Suits = require("../../src/javascripts/components/suits");

describe("Suits", function () {
  describe("rendering", function () {
    var shallowRenderer, component, suits;

    beforeEach(function () {
      shallowRenderer = ReactTestUtils.createRenderer();
      shallowRenderer.render(<Suits />);
      component = shallowRenderer.getRenderOutput();
      suits = component.props.children;
    });

    it("shows the four suits", function () {
      expect(suits.length).toBe(4);

      expect(suits[0].props.children).toBe("♠");
      expect(suits[1].props.children).toBe("♥");
      expect(suits[2].props.children).toBe("♦");
      expect(suits[3].props.children).toBe("♣");

      expect(suits[0].props.style).toEqual(jasmine.objectContaining({color: "black"}));
      expect(suits[1].props.style).toEqual(jasmine.objectContaining({color: "red"}));
      expect(suits[2].props.style).toEqual(jasmine.objectContaining({color: "red"}));
      expect(suits[3].props.style).toEqual(jasmine.objectContaining({color: "black"}));
    });
  });

  describe("click handling", function () {
    var component, suits, clickHandlerSpy;

    beforeEach(function () {
      clickHandlerSpy = jasmine.createSpy("click handler");
      component = ReactTestUtils.renderIntoDocument(<Suits suitClick={clickHandlerSpy} />);
      suits = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, "span");
    });

    it("calls the click handler with the correct suit when clicking one of the suits", function () {
      var hearts = ReactDOM.findDOMNode(suits[1]);
      ReactTestUtils.Simulate.click(hearts);
      expect(clickHandlerSpy).toHaveBeenCalledWith("hearts");
    });
  });
});
