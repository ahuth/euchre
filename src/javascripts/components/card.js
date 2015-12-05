"use strict";

var React = require("react");

var faceMappings = {four: 4, six: 6, nine: 9, ten: 10, jack: "j", queen: "q", king: "k", ace: "1", back: "back"};
var suitMappings = {clubs: "c", diamonds: "d", hearts: "h", spades: "s"};

var Card = React.createClass({
  getCardId: function () {
    if (this.props.face === "back") { return "back"; }
    const face = faceMappings[this.props.face];
    const suit = suitMappings[this.props.suit];
    return face && suit ? `${face}${suit}` : false;
  },

  render: function () {
    const identifier = this.getCardId();
    const filename = identifier ? `images/cards/${this.getCardId()}.svg` : "";
    const cardStyles = filename ? styles.card : styles.noCard;
    return <img src={filename} style={cardStyles} />;
  }
});

var styles = {
  card: {
    width: 90,
    height: 130,
    boxSizing: "border-box",
    border: "1px solid lightgrey",
    borderRadius: "4px"
  },
  noCard: {
    width: 90,
    height: 130,
    visibility: "hidden"
  }
};

module.exports = Card;
