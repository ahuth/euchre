"use strict";

var React = require("react/addons");
var Card = require("../../src/javascripts/components/card");
var TestUtils = React.addons.TestUtils;

describe("Card", function () {
  it("uses the right sprite for the queen of hearts", function () {
    var component = TestUtils.renderIntoDocument(<Card face="queen" suit="hearts" />);
    var importedSprite = component.getDOMNode().querySelector("use");
    const spritePath = importedSprite.attributes["xlink:href"].value;
    expect(spritePath).toBe("images/spritesheets/sprites.svg#QH");
  });

  it("uses the right sprite for the six of clubs", function () {
    var component = TestUtils.renderIntoDocument(<Card face="six" suit="clubs" />);
    var importedSprite = component.getDOMNode().querySelector("use");
    const spritePath = importedSprite.attributes["xlink:href"].value;
    expect(spritePath).toBe("images/spritesheets/sprites.svg#6C");
  });

  it("uses the right sprite for the ace of diamonds", function () {
    var component = TestUtils.renderIntoDocument(<Card face="ace" suit="diamonds" />);
    var importedSprite = component.getDOMNode().querySelector("use");
    const spritePath = importedSprite.attributes["xlink:href"].value;
    expect(spritePath).toBe("images/spritesheets/sprites.svg#AD");
  });

  it("uses the right sprite for the ten of spades", function () {
    var component = TestUtils.renderIntoDocument(<Card face="ten" suit="spades" />);
    var importedSprite = component.getDOMNode().querySelector("use");
    const spritePath = importedSprite.attributes["xlink:href"].value;
    expect(spritePath).toBe("images/spritesheets/sprites.svg#10S");
  });
});
