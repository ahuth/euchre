"use strict";

var React = require("react");

var faceMapping = {four: 4, six: 6, nine: 9, ten: 10, jack: "J", queen: "Q", king: "K", ace: "A"};
var suitMapping = {clubs: "C", diamonds: "D", hearts: "H", spades: "S"};

var Card = React.createClass({
  getCardId: function () {
    const face = faceMapping[this.props.face];
    const suit = suitMapping[this.props.suit];
    return `${face}${suit}`;
  },

  renderSvgSprite: function () {
    return {__html: `<use xlink:href='images/spritesheets/sprites.svg#${this.getCardId()}' />`};
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
