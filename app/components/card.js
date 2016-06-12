"use strict";

import React from "react";

const faceMapping = {nine: "9", ten: "10", jack: "J", queen: "Q", king: "K", ace: "A"};
const suitMapping = {spades: "♠", clubs: "♣", hearts: "♥", diamonds: "♦"};

function Card({face, suit}) {
  const faceCharacter = faceMapping[face];
  const suitCharacter = suitMapping[suit];
  const suitColor = [suitMapping.hearts, suitMapping.diamonds].indexOf(suitCharacter) >= 0 ? "red" : "black";
  return (
    <div>
      <span style={{color: suitColor}}>{faceCharacter}{suitCharacter}</span>
    </div>
  );
}

Card.propTypes = {
  face: React.PropTypes.oneOf(Object.keys(faceMapping)).isRequired,
  suit: React.PropTypes.oneOf(Object.keys(suitMapping)).isRequired
};

var styles = {};

export default Card;
