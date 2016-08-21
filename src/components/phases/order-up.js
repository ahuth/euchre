import Kitty from "../kitty";
import PlayingCard from "../../utils/playing-card";
import React from "react";
import ShouldOrderUp from "../questions/should-order-up";
import Table from "../table";
import {acceptOrderUp, passOrderUp} from "../../actions";

var OrderUp = React.createClass({
  handlePass: function () {
    this.props.dispatch(passOrderUp());
  },

  handleOrderUp: function () {
    this.props.dispatch(acceptOrderUp());
  },

  render: function () {
    return (
      <div style={styles.container} className="order-up">
        <Table hands={{north: this.props.hands.north, south: this.props.hands.south, east: this.props.hands.east, west: this.props.hands.west}} />
        <div style={styles.kitty}>
          <Kitty cards={this.props.hands.kitty} />
        </div>
        <div style={styles.question}>
          <ShouldOrderUp handlePass={this.handlePass} handleOrderUp={this.handleOrderUp} />
        </div>
      </div>
    );
  }
});

OrderUp.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  hands: React.PropTypes.object.isRequired
};

var styles = {
  container: {
    height: "100%",
    position: "relative"
  },
  kitty: {
    position: "absolute",
    top: "calc(50% - 51px)",
    right: "calc(50% - 31px)"
  },
  question: {
    position: "absolute",
    bottom: 120,
    width: "100%",
    textAlign: "center"
  }
}

export default OrderUp;
