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
  const isRed = this.suit === "hearts" || this.suit === "diamonds"
  return isRed ? "red" : "black";
};

export default PlayingCard;
