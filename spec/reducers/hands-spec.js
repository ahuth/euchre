"use strict";

import hands from "reducers/hands";
import PlayingCard from "utils/playing-card";
import playingCards from "utils/playing-cards";
import {dealHands} from "../../app/actions";

describe("hands", function () {
  it("returns the current state for unknown actions", function () {
    var currentState = {
      south: [playingCards.queen.hearts]
    }
    expect(hands(currentState, {type: "WAT"})).toEqual(currentState);
  });

  describe("for dealHands", function () {
    var action;

    beforeEach(function () {
      action = dealHands();
    });

    it("deals 5 objects to each player", function () {
      var output = hands(null, action);
      expect(output.north.length).toBe(5);
      expect(output.south.length).toBe(5);
      expect(output.east.length).toBe(5);
      expect(output.west.length).toBe(5);
    });

    it("deals objects that represents cards", function () {
      var output = hands(null, action);
      expect(output.south[0] instanceof PlayingCard).toBe(true);
    });
  });
});
