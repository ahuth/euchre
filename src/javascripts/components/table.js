"use strict";

var React = require("react");
var Hand = require("./hand");
var Card = require("./card");

var Table = React.createClass({
  handleCardClick: function (card) {
    if (this.props.cardClick) {
      this.props.cardClick(card);
    }
  },

  render: function () {
    return (
      <div className="table" style={styles.container}>
        <Hand cards={this.props.hands.north} cardClick={this.handleCardClick} />
        <div style={styles.middle}>
          <Hand cards={this.props.hands.west} cardClick={this.handleCardClick} />
          <Card face={this.props.played.face} suit={this.props.played.suit} />
          <Hand cards={this.props.hands.east} cardClick={this.handleCardClick} />
        </div>
        <Hand cards={this.props.hands.south} cardClick={this.handleCardClick} />
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

module.exports = Table;
