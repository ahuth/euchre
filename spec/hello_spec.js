"use strict";

var React = require("react/addons");
var Hello = require("../src/javascripts/hello");

var TestUtils = React.addons.TestUtils;

describe("Hello", function () {
  var component;

  beforeEach(function () {
    component = TestUtils.renderIntoDocument(<Hello />);
  });

  it("renders the correct text", function () {
    expect(component.getDOMNode().textContent).toBe("Hello World!");
  });
});
