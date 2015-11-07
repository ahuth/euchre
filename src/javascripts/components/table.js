"use strict";

var React = require("react");
var Hand = require("./hand");
var Card = require("./card");
var Score = require("./score");
var Pile = require("./pile");

var Table = React.createClass({
  createClickHandler: function (from) {
    return function (card) {
      this.props.cardClick(card, from);
    }.bind(this);
  },

  render: function () {
    return (
      <div className="table">
        <div style={styles.row}>
          <div style={styles.side}><Score score={this.props.scores.west} suit="spades" /></div>
          <div style={styles.middle}><Hand cards={this.props.hands.north} cardClick={this.createClickHandler("north")} /></div>
          <div style={styles.side}></div>
        </div>
        <div style={styles.row}>
          <div style={styles.side}><Hand cards={this.props.hands.west} cardClick={this.createClickHandler("west")} /></div>
          <div style={styles.middle}>
            <Pile
              north={this.props.played.north}
              south={this.props.played.south}
              east={this.props.played.east}
              west={this.props.played.west}
              middle={this.props.middle}
            />
          </div>
          <div style={styles.side}><Hand cards={this.props.hands.east} cardClick={this.createClickHandler("east")} /></div>
        </div>
        <div style={styles.row}>
          <div style={styles.side}></div>
          <div style={styles.middle}><Hand cards={this.props.hands.south} cardClick={this.createClickHandler("south")} /></div>
          <div style={styles.side}><Score score={this.props.scores.north} suit="hearts" /></div>
        </div>
      </div>
    );
  }
});

var styles = {
  row: {
    display: "flex"
  },
  side: {
    flex: 1
  },
  middle: {
    flex: 2
  }
};

module.exports = Table;
