"use strict";

var React = require("react");

var Card = React.createClass({
  renderSvgSprite: function () {
    return {__html: `<use xlink:href='images/spritesheets/sprites.svg#${this.props.id}' />`};
  },

  render: function () {
    return (
      <div className="card">
        <svg viewBox="0 0 1 1" dangerouslySetInnerHTML={this.renderSvgSprite()}></svg>
      </div>
    );
  }
});

module.exports = Card;
