"use strict";

var React = require("react");

var faceMappings = {four: 4, six: 6, nine: 9, ten: 10, jack: "j", queen: "q", king: "k", ace: "1"};
var suitMappings = {clubs: "c", diamonds: "d", hearts: "h", spades: "s"};

var Card = React.createClass({
  getCardId: function () {
    if (this.props.face === "back") { return "back"; }
    const face = faceMappings[this.props.face];
    const suit = suitMappings[this.props.suit];
    return `${face}${suit}`;
  },

  render: function () {
    const identifier = this.getCardId();
    const filename = identifier ? `images/${this.getCardId()}.svg` : ""
    return (
      <img src={filename} style={styles.card} />
    );
  }
});

var styles = {
  card: {
    width: 90,
    height: 130
  }
};

module.exports = Card;
