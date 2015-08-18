"use strict";

var React = require("react");

var faceMappings = {four: 4, six: 6, nine: 9, ten: 10, jack: "J", queen: "Q", king: "K", ace: "A"};
var suitMappings = {clubs: "C", diamonds: "D", hearts: "H", spades: "S"};

var Card = React.createClass({
  getCardId: function () {
    const face = faceMappings[this.props.face];
    const suit = suitMappings[this.props.suit];
    return `${face}${suit}`;
  },

  dangerouslyRenderSvgSprite: function () {
    return {__html: `<use xlink:href='images/spritesheets/sprites.svg#${this.getCardId()}' />`};
  },

  render: function () {
    return (
      <div className="card" style={styles.card}>
        <svg viewBox="0 0 167 242.6" dangerouslySetInnerHTML={this.dangerouslyRenderSvgSprite()}></svg>
      </div>
    );
  }
});

var styles = {
  card: {
    width: 167,
    height: 242.6
  }
};

module.exports = Card;
