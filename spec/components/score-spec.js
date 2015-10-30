"use strict";

var React = require("react");
var ReactTestUtils = require('react-addons-test-utils');
var Score = require("../../src/javascripts/components/score");

describe("Score", function () {
  var shallowRenderer;

  beforeEach(function () {
    shallowRenderer = ReactTestUtils.createRenderer();
  });

  it("renders cards with the correct suit", function () {
    shallowRenderer.render(<Score score="0" suit="hearts" />);
    var component = shallowRenderer.getRenderOutput();
    var firstCard = component.props.children[0].props.children;
    expect(firstCard.props.suit).toBe("hearts");
  });

  describe("selecting cards to render", function () {
    it("renders a six and a face-down card when the score is 0", function () {
      shallowRenderer.render(<Score score="0" suit="spades" />);
      var component = shallowRenderer.getRenderOutput();
      var firstCard = component.props.children[0].props.children;
      var secondCard = component.props.children[1].props.children;
      expect(firstCard.props.face).toBe("six");
      expect(secondCard.props.face).toBe("back");
    });

    it("renders a six and a face-down card when the score is less than 6", function () {
      shallowRenderer.render(<Score score="5" suit="spades" />);
      var component = shallowRenderer.getRenderOutput();
      var firstCard = component.props.children[0].props.children;
      var secondCard = component.props.children[1].props.children;
      expect(firstCard.props.face).toBe("six");
      expect(secondCard.props.face).toBe("back");
    });

    it("renders a four and six when the score is 6 or greater", function () {
      shallowRenderer.render(<Score score="6" suit="spades" />);
      var component = shallowRenderer.getRenderOutput();
      var firstCard = component.props.children[0].props.children;
      var secondCard = component.props.children[1].props.children;
      expect(firstCard.props.face).toBe("four");
      expect(secondCard.props.face).toBe("six");
    });

    it("renders a four and six when the score is 10", function () {
      shallowRenderer.render(<Score score="10" suit="spades" />);
      var component = shallowRenderer.getRenderOutput();
      var firstCard = component.props.children[0].props.children;
      var secondCard = component.props.children[1].props.children;
      expect(firstCard.props.face).toBe("four");
      expect(secondCard.props.face).toBe("six");
    });
  });

  describe("positioning cards", function () {
    it("renders the second card directly over the first when the score is 0", function () {
      shallowRenderer.render(<Score score="0" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 0, left: 0}));
    });

    it("uncovers 1 suit symbol when the score is 1", function () {
      shallowRenderer.render(<Score score="1" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 10, left: 18, transform: "rotate(36deg)"}));
    });

    it("uncovers 2 suit symbols when the score is 2", function () {
      shallowRenderer.render(<Score score="2" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 50, left: 0}));
    });

    it("uncovers 3 suit symbols when the score is 3", function () {
      shallowRenderer.render(<Score score="3" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 62, left: 18, transform: "rotate(30deg)"}));
    });

    it("uncovers 4 suit symbols when the score is 4", function () {
      shallowRenderer.render(<Score score="4" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 100, left: 0}));
    });

    it("uncovers 5 suit symbols when the score is 5", function () {
      shallowRenderer.render(<Score score="5" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 100, left: 50}));
    });

    it("renders the second card directly over the first when the score is 6", function () {
      shallowRenderer.render(<Score score="6" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 0, left: 0}));
    });

    it("uncovers 1 suit symbol when the score is 7", function () {
      shallowRenderer.render(<Score score="7" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 18, left: 26, transform: "rotate(28deg)"}));
    });

    it("uncovers 2 suit symbols when the score is 8", function () {
      shallowRenderer.render(<Score score="8" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 75, left: 0}));
    });

    it("uncovers 3 suit symbols when the score is 9", function () {
      shallowRenderer.render(<Score score="9" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 75, left: 50}));
    });

    it("uncovers both cards when the score is 10", function () {
      shallowRenderer.render(<Score score="10" suit="clubs" />);
      var component = shallowRenderer.getRenderOutput();
      var scoreCardStyles = component.props.children[1].props.style;
      expect(scoreCardStyles).toEqual(jasmine.objectContaining({top: 150, left: 0}));
    });
  });
});
