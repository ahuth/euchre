"use strict";

import playingCards from "./playing-cards";
import shuffle from "shuffle-array";

var cards = [
  playingCards.nine.hearts, playingCards.nine.clubs, playingCards.nine.diamonds, playingCards.nine.spades,
  playingCards.ten.hearts, playingCards.ten.clubs, playingCards.ten.diamonds, playingCards.ten.spades,
  playingCards.jack.hearts, playingCards.jack.clubs, playingCards.jack.diamonds, playingCards.jack.spades,
  playingCards.queen.hearts, playingCards.queen.clubs, playingCards.queen.diamonds, playingCards.queen.spades,
  playingCards.king.hearts, playingCards.king.clubs, playingCards.king.diamonds, playingCards.king.spades,
  playingCards.ace.hearts, playingCards.ace.clubs, playingCards.ace.diamonds, playingCards.ace.spades
];

function Deck() {
  this.cards = shuffle(cards, {copy: true})
};

Deck.prototype.draw = function (num = 1) {
  var cards = times(num).map(() => {
    return this.cards.pop();
  });
  return compact(cards);
};

function compact(array) {
  return array.filter(function (item) {
    return item;
  });
}

function times(num) {
  return Array(num).fill();
}

export default Deck;
