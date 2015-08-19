"use strict";

var Deck = require("../../src/javascripts/utils/deck");

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
  });

  describe("#isEmpty", function () {
    it("returns false when there are still cards", function () {
      expect(deck.cards.length).toBeGreaterThan(0);
      expect(deck.isEmpty()).toBe(false);
      deck.draw();
      expect(deck.cards.length).toBeGreaterThan(0);
      expect(deck.isEmpty()).toBe(false);
    });

    it("returns true when there are no more cards", function () {
      expect(deck.cards.length).toBeGreaterThan(0);
      expect(deck.isEmpty()).toBe(false);
      for(let n = 0; n < 24; n++) {
        deck.draw();
      }
      expect(deck.cards.length).toBe(0);
      expect(deck.isEmpty()).toBe(true);
    });
  });
});
