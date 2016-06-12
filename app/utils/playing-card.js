"use strict";

const faceMapping = {nine: "9", ten: "10", jack: "J", queen: "Q", king: "K", ace: "A"};
const suitMapping = {spades: "♠", clubs: "♣", hearts: "♥", diamonds: "♦"};

function PlayingCard({face, suit}) {
  this.face = face;
  this.suit = suit;
}

PlayingCard.prototype.toString = function () {
  const faceCharacter = faceMapping[this.face];
  const suitCharacter = suitMapping[this.suit];
  return `${faceCharacter}${suitCharacter}`;
};

PlayingCard.prototype.color = function () {
  const suitCharacter = suitMapping[this.suit];
  const isRed = suitCharacter == suitMapping.hearts || suitCharacter == suitMapping.diamonds;
  return isRed ? "red" : "black";
};

export default PlayingCard;
