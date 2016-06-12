"use strict";

import Deck from "utils/deck";

describe("Deck", function () {
  var deck;

  beforeEach(function () {
    deck = new Deck();
  });

  describe("#draw", function () {
    it("returns an object representing a card", function () {
      var card = deck.draw();
      expect(card.face).toBeTruthy();
      expect(card.suit).toBeTruthy();
    });

    it("returns undefined when there are no more cards", function () {
      expect(deck.cards.length).toBeGreaterThan(0);
      for(let n = 0; n < 24; n++) {
        deck.draw();
      }
      expect(deck.cards.length).toBe(0);
      expect(deck.draw()).toBeUndefined();
    });
  });
});
