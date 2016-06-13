"use strict";

import Hand from "./hand";
import PlayingCard from "../utils/playing-card";
import React from "react";

function Table({hands}) {
  return (
    <div className="table">
      <Hand cards={hands.north} />
      <Hand cards={hands.west} />
      <Hand cards={hands.east} />
      <Hand cards={hands.south} />
    </div>
  );
}

Table.propTypes = {
  hands: React.PropTypes.shape({
    north: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired,
    south: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired,
    east: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired,
    west: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PlayingCard)).isRequired
  }).isRequired
};

export default Table;
