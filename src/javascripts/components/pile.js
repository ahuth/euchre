"use strict";

var React = require("react");
var Card = require("./card");

var Pile = React.createClass({
  renderCard: function (card) {
    if (card) {
      return <Card face={card.face} suit={card.suit} />;
    }
  },

  render: function () {
    return (
      <div className="pile" style={styles.container}>
        <div>{this.renderCard(this.props.north)}</div>
        <div style={styles.middle}>
          <div>{this.renderCard(this.props.west)}</div>
          <div>{this.renderCard(this.props.east)}</div>
        </div>
        <div>{this.renderCard(this.props.south)}</div>
      </div>
    );
  }
});

var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
};

module.exports = Pile;
