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
  }
}

export default OrderUp;
