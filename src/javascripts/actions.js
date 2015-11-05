"use strict";

function dealHands() {
  return {type: "DEAL_HANDS"};
}

function selectCard(card, from) {
  return {type: "SELECT_CARD", card: card, from: from};
}

module.exports = {
  dealHands,
  selectCard
};
