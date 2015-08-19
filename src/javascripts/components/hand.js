"use strict";

var React = require("react");
var Card = require("./card");

var Hand = React.createClass({
  render: function () {
    return (
      <div className="hand" style={styles.hand}>
        {this.props.cards.map(function (card, index) {
          return <Card key={index} face={card.face} suit={card.suit} />;
        })}
      </div>
    );
  }
});

var styles={
  hand: {
    display: "flex",
    flexWrap: "wrap"
  }
};

module.exports = Hand;
