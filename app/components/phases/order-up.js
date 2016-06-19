"use strict";

import Kitty from "../kitty";
import PlayingCard from "../../utils/playing-card";
import React from "react";
import Table from "../table";

function OrderUp({hands}) {
  return (
    <div style={styles.container} className="order-up">
      <Table hands={{north: hands.north, south: hands.south, east: hands.east, west: hands.west}} />
      <div style={styles.kitty}>
        <Kitty cards={hands.kitty} />
      </div>
    </div>
  );
}

OrderUp.propTypes = {
  hands: React.PropTypes.shape({
    north: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired,
    south: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired,
    east: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired,
    west: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired,
    kitty: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired
  }).isRequired
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
  }
}

export default OrderUp;
