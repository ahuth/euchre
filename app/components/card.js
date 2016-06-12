"use strict";

import PlayingCard from "../utils/playing-card";
import React from "react";

function Card({face, suit}) {
  const card = new PlayingCard({face: face, suit: suit});
  return (
    <div style={styles.card} className="card">
      <span style={{color: card.color()}}>{card.toString()}</span>
    </div>
  );
}

Card.propTypes = {
  face: React.PropTypes.oneOf(["nine", "ten", "jack", "queen", "king", "ace"]).isRequired,
  suit: React.PropTypes.oneOf(["spades", "clubs", "hearts", "diamonds"]).isRequired
};

var styles = {
  card: {
    height: 100,
    width: 75,
    border: "1px solid black",
    borderRadius: 5,
    fontSize: 22
  }
};

export default Card;
