"use strict";

import Hand from "./hand";
import PlayingCard from "../utils/playing-card";
import React from "react";

function Table({hands}) {
  return (
    <div style={styles.container} className="table">
      <div style={styles.row}>
        <div style={styles.section}></div>
        <div style={styles.section}>
          <Hand cards={hands.north} />
        </div>
        <div style={styles.section}></div>
      </div>
      <div style={styles.row}>
        <div style={styles.section}>
          <Hand cards={hands.west} />
        </div>
        <div style={styles.section}></div>
        <div style={styles.section}>
          <Hand cards={hands.east} />
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.section}></div>
        <div style={styles.section}>
          <Hand cards={hands.south} />
        </div>
        <div style={styles.section}></div>
      </div>
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

var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  row: {
    display: "flex"
  },
  section: {
    flex: 1
  }
};

export default Table;
