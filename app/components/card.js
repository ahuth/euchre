"use strict";

import React from "react";

const faceMapping = {nine: "9", ten: "10", jack: "J", queen: "Q", king: "K", ace: "A"};
const suitMapping = {spades: "♠", clubs: "♣", hearts: "♥", diamonds: "♦"};

function Card({face, suit}) {
  const faceCharacter = faceMapping[face];
  const suitCharacter = suitMapping[suit];
  return (
    <div style={styles}>
      <span>{faceCharacter}{suitCharacter}</span>
    </div>
  );
}

Card.propTypes = {
  face: React.PropTypes.string.isRequired,
  suit: React.PropTypes.string.isRequired
};

var styles = {};

export default Card;
