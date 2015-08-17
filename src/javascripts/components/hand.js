"use strict";

var React = require("react");
var Card = require("./card");

var Hand = React.createClass({
  render: function () {
    return (
      <div className="hand">
        {this.props.cards.map(function (card, index) {
          return <Card key={index} face={card.face} suit={card.suit} />;
        })}
      </div>
    );
  }
});

module.exports = Hand;
