"use strict";

var React = require("react");
var Card = require("./card");
var objectAssign = require('object-assign');

var backPositions = {
  0: {top: 0, left: 0},
  1: {top: 0, left: 50},
  2: {top: 50, left: 0},
  3: {top: 50, left: 50},
  4: {top: 100, left: 0},
  5: {top: 100, left: 50}
};

var sixPositions = {
  6: {top: 0, left: 0},
  7: {top: 0, left: 50},
  8: {top: 75, left: 0},
  9: {top: 75, left: 50},
  10: {top: 150, left: 0}
};

var Score = React.createClass({
  renderLowScore: function () {
    var backStyles = backPositions[this.props.score];
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <Card face="six" suit={this.props.suit} />
        </div>
        <div style={objectAssign({}, styles.card, backStyles)}>
          <Card face="back" />
        </div>
      </div>
    );
  },

  renderHighScore: function () {
    var sixStyles = sixPositions[this.props.score];
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <Card face="four" suit={this.props.suit} />
        </div>
        <div style={objectAssign({}, styles.card, sixStyles)}>
          <Card face="six" suit={this.props.suit} />
        </div>
      </div>
    );
  },

  render: function () {
    if (this.props.score < 6) {
      return this.renderLowScore();
    }
    return this.renderHighScore();
  }
});

var styles = {
  container: {
    position: "relative"
  },
  card: {
    position: "absolute"
  }
};

module.exports = Score;
