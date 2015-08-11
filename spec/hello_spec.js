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
    expect(component.getDOMNode().textContent).toMatch(/Hello World!/);
  });

  it("keeps track of clicks", function () {
    var button = TestUtils.findRenderedDOMComponentWithTag(component, "button");
    expect(component.getDOMNode().textContent).toMatch(/Clicks: 0/);

    TestUtils.Simulate.click(button);
    expect(component.getDOMNode().textContent).toMatch(/Clicks: 1/);

    TestUtils.Simulate.click(button);
    expect(component.getDOMNode().textContent).toMatch(/Clicks: 2/);
  });
});
