"use strict";

import React from "react";

const faceMapping = {nine: "9", ten: "10", jack: "J", queen: "Q", king: "K", ace: "A"};
const suitMapping = {spades: "♠", clubs: "♣", hearts: "♥", diamonds: "♦"};

function isRed(suitCharacter) {
  return [suitMapping.hearts, suitMapping.diamonds].indexOf(suitCharacter) >= 0;
}

function Card({face, suit}) {
  const faceCharacter = faceMapping[face];
  const suitCharacter = suitMapping[suit];
  const suitColor = isRed(suitCharacter) ? "red" : "black";
  return (
    <div style={styles.card} className="card">
      <span style={{color: suitColor}}>{faceCharacter}{suitCharacter}</span>
    </div>
  );
}

Card.propTypes = {
  face: React.PropTypes.oneOf(Object.keys(faceMapping)).isRequired,
  suit: React.PropTypes.oneOf(Object.keys(suitMapping)).isRequired
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