"use strict";

function dealHands() {
  return {type: "DEAL_HANDS"};
}

function selectCard(card) {
  return {type: "SELECT_CARD", card: card};
}

module.exports = {
  dealHands,
  selectCard
};
