import Hand from "./hand";
import PlayingCard from "../utils/playing-card";
import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  row: {
    display: "flex",
    flex: "0 0 33.3333%"
  },
  top: {
    alignItems: "flex-start"
  },
  middle: {
    alignItems: "center"
  },
  bottom: {
    alignItems: "flex-end"
  },
  section: {
    flex: "0 0 33.3333%"
  }
};

function Table({hands}) {
  return (
    <div style={styles.container} className="table">
      <div style={Object.assign({}, styles.row, styles.top)}>
        <div style={styles.section}></div>
        <div style={styles.section}>
          <Hand cards={hands.north} />
        </div>
        <div style={styles.section}></div>
      </div>
      <div style={Object.assign({}, styles.row, styles.middle)}>
        <div style={styles.section}>
          <Hand cards={hands.west} />
        </div>
        <div style={styles.section}></div>
        <div style={styles.section}>
          <Hand cards={hands.east} />
        </div>
      </div>
      <div style={Object.assign({}, styles.row, styles.bottom)}>
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

export default Table;
