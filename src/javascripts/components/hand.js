"use strict";

var React = require("react");
var Card = require("./card");

var Hand = React.createClass({
  render: function () {
    return (
      <div className="hand" style={styles.hand}>
        {this.props.cards.map(function (card, index) {
          return (
            <div style={styles.card} key={index} onClick={() => this.props.cardClick(card)}>
              <Card face={card.face} suit={card.suit} />
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
  card: {
    marginRight: -40
  }
};

module.exports = Hand;
