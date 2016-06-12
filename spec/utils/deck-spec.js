"use strict";

import Deck from "utils/deck";

describe("Deck", function () {
  var deck;

  beforeEach(function () {
    deck = new Deck();
  });

  describe("#draw", function () {
    it("returns an array of objects representing cards", function () {
      var cards = deck.draw(4);
      expect(cards.length).toBe(4);
      expect(cards[0].face).toBeTruthy();
      expect(cards[0].suit).toBeTruthy();
    });

    it("returns any number of cards", function () {
      var cards = deck.draw(7);
      expect(cards.length).toBe(7);
    });

    it("returns one card by default", function () {
      var cards = deck.draw();
      expect(cards.length).toBe(1);
    });

    it("stops returning cards once they're gone", function () {
      var numCards = deck.cards.length
      expect(numCards).toBeGreaterThan(0);
      deck.draw(numCards - 1);
      var cards = deck.draw(3);
      expect(cards.length).toBe(1);
    });
  });
});
