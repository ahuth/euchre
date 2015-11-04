"use strict";

var React = require("react");
var Card = require("./card");

var Hand = React.createClass({
  getHandStyles: function () {
    var rotateStyles = this.props.orientation === "east" ? styles.handRotated : {};
    return Object.assign({}, styles.hand, rotateStyles);
  },

  getCardStyles: function () {
    return this.props.orientation === "east" ? styles.cardRotated : styles.card;
  },

  render: function () {
    return (
      <div className="hand" style={this.getHandStyles()}>
        {this.props.cards.map(function (card, index) {
          return (
            <div style={this.getCardStyles()} key={index} onClick={() => this.props.cardClick(card)}>
              <Card face={card.face} suit={card.suit} orientation={this.props.orientation} />
            </div>
          );
        }, this)}
      </div>
    );
  }
});

var styles={
  hand: {
    display: "flex",
    flexWrap: "wrap"
  },
  handRotated: {
    flexDirection: "column"
  },
  card: {
    marginRight: -40
  },
  cardRotated: {
    marginBottom: -100
  }
};

module.exports = Hand;
