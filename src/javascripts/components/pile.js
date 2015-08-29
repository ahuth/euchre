"use strict";

var React = require("react");
var Card = require("./card");

var Pile = React.createClass({
  renderCard: function (card) {
    if (card) {
      return <Card face={card.face} suit={card.suit} />;
    }
    return false;
  },

  render: function () {
    return (
      <div className="pile" style={styles.container}>
        {this.renderCard(this.props.north)}
        <div style={styles.middle}>
          {this.renderCard(this.props.west)}
          {this.renderCard(this.props.east)}
        </div>
        {this.renderCard(this.props.south)}
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
