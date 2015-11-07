"use strict";

var React = require("react");
var Card = require("./card");

var Pile = React.createClass({
  render: function () {
    return (
      <div className="pile">
        <div style={styles.row}>
          <div style={styles.cell}></div>
          <div style={styles.cell}><Card face={this.props.north.face} suit={this.props.north.suit} /></div>
          <div style={styles.cell}></div>
        </div>
        <div style={styles.row}>
          <div style={styles.cell}><Card face={this.props.west.face} suit={this.props.west.suit} /></div>
          <div style={styles.cell}><Card face={this.props.middle.face} suit={this.props.middle.suit} /></div>
          <div style={styles.cell}><Card face={this.props.east.face} suit={this.props.east.suit} /></div>
        </div>
        <div style={styles.row}>
          <div style={styles.cell}></div>
          <div style={styles.cell}><Card face={this.props.south.face} suit={this.props.south.suit} /></div>
          <div style={styles.cell}></div>
        </div>
      </div>
    );
  }
});

var styles = {
  row: {
    display: "flex"
  },
  cell: {
    flex: 1
  }
};

module.exports = Pile;
