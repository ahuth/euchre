"use strict";

var React = require("react/addons");
var Pile = require("../../src/javascripts/components/pile");
var Card = require("../../src/javascripts/components/card");
var TestUtils = React.addons.TestUtils;

describe("Pile", function () {
  var shallowRenderer;
  var hearts_10 = {face: "ten", suit: "hearts"};
  var spades_queen = {face: "queen", suit: "spades"};
  var hearts_ace = {face: "ace", suit: "hearts"};
  var diamonds_10 = {face: "ten", suit: "diamonds"};

  beforeEach(function () {
    shallowRenderer = TestUtils.createRenderer();
  });

  it("renders cards into the correct spot", function () {
    shallowRenderer.render(<Pile west={hearts_10} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[1].props.children[0]).toEqual(
      <div>
        <Card face="ten" suit="hearts" />
      </div>
    );
  });

  it("renders no cards if none are passed in", function () {
    shallowRenderer.render(<Pile />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<div>{undefined}</div>);
    expect(component.props.children[1].props.children[0]).toEqual(<div>{undefined}</div>);
    expect(component.props.children[1].props.children[1]).toEqual(<div>{undefined}</div>);
    expect(component.props.children[2]).toEqual(<div>{undefined}</div>);
  });

  it("renders one card if one is passed in", function () {
    shallowRenderer.render(<Pile north={hearts_10} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<div><Card face="ten" suit="hearts" /></div>);
    expect(component.props.children[1].props.children[0]).toEqual(<div>{undefined}</div>);
    expect(component.props.children[1].props.children[1]).toEqual(<div>{undefined}</div>);
    expect(component.props.children[2]).toEqual(<div>{undefined}</div>);
  });

  it("renders two cards if two are passed in", function () {
    shallowRenderer.render(<Pile north={spades_queen} east={hearts_ace} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<div><Card face="queen" suit="spades" /></div>);
    expect(component.props.children[1].props.children[0]).toEqual(<div>{undefined}</div>);
    expect(component.props.children[1].props.children[1]).toEqual(<div><Card face="ace" suit="hearts" /></div>);
    expect(component.props.children[2]).toEqual(<div>{undefined}</div>);
  });

  it("renders three cards if three are passed in", function () {
    shallowRenderer.render(<Pile north={hearts_ace} east={hearts_10} south={diamonds_10} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<div><Card face="ace" suit="hearts" /></div>);
    expect(component.props.children[1].props.children[0]).toEqual(<div>{undefined}</div>);
    expect(component.props.children[1].props.children[1]).toEqual(<div><Card face="ten" suit="hearts" /></div>);
    expect(component.props.children[2]).toEqual(<div><Card face="ten" suit="diamonds" /></div>);
  });

  it("renders four cards if four are passed in", function () {
    shallowRenderer.render(<Pile north={hearts_ace} east={spades_queen} south={diamonds_10} west={hearts_10} />);
    var component = shallowRenderer.getRenderOutput();
    expect(component.props.children[0]).toEqual(<div><Card face="ace" suit="hearts" /></div>);
    expect(component.props.children[1].props.children[0]).toEqual(<div><Card face="ten" suit="hearts" /></div>);
    expect(component.props.children[1].props.children[1]).toEqual(<div><Card face="queen" suit="spades" /></div>);
    expect(component.props.children[2]).toEqual(<div><Card face="ten" suit="diamonds" /></div>);
  });
});
