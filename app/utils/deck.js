"use strict";

import PlayingCard from "./playing-card";
import shuffle from "shuffle-array";

var cards = [
  {face: "nine", suit: "hearts"}, {face: "nine", suit: "clubs"}, {face: "nine", suit: "diamonds"}, {face: "nine", suit: "spades"},
  {face: "ten", suit: "hearts"}, {face: "ten", suit: "clubs"}, {face: "ten", suit: "diamonds"}, {face: "ten", suit: "spades"},
  {face: "jack", suit: "hearts"}, {face: "jack", suit: "clubs"}, {face: "jack", suit: "diamonds"}, {face: "jack", suit: "spades"},
  {face: "queen", suit: "hearts"}, {face: "queen", suit: "clubs"}, {face: "queen", suit: "diamonds"}, {face: "queen", suit: "spades"},
  {face: "king", suit: "hearts"}, {face: "king", suit: "clubs"}, {face: "king", suit: "diamonds"}, {face: "king", suit: "spades"},
  {face: "ace", suit: "hearts"}, {face: "ace", suit: "clubs"}, {face: "ace", suit: "diamonds"}, {face: "ace", suit: "spades"}
];

var Deck = function () {
  this.cards = shuffle(cards, {copy: true}).map(function (card) {
    return new PlayingCard(card);
  });
};

Deck.prototype.draw = function (num = 1) {
  var cards = Array(num).fill().map(() => {
    return this.cards.pop();
  });
  return compact(cards);
};

function compact(array) {
  return array.filter(function (item) {
    return item;
  });
}

export default Deck;
