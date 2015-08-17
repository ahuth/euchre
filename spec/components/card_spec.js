"use strict";

var React = require("react/addons");
var Card = require("../../src/javascripts/components/card");
var TestUtils = React.addons.TestUtils;

describe("Card", function () {
  var component;

  it("uses the right sprite for the queen of hearts", function () {
    component = TestUtils.renderIntoDocument(<Card id="QH" />);
    var importedSprite = component.getDOMNode().querySelector("use");
    const spritePath = importedSprite.attributes["xlink:href"].value;
    expect(spritePath).toBe("images/spritesheets/sprites.svg#QH");
  });

  it("uses the right sprite for the six of clubs", function () {
    component = TestUtils.renderIntoDocument(<Card id="SC" />);
    var importedSprite = component.getDOMNode().querySelector("use");
    const spritePath = importedSprite.attributes["xlink:href"].value;
    expect(spritePath).toBe("images/spritesheets/sprites.svg#SC");
  });
});
