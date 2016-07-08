"use strict";

import phase from "reducers/phase";
import {acceptOrderUp, dealHands, passOrderUpFinal} from "actions";
import {phases} from "constants";

describe("reducers", function () {
  describe("phase", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = "hi";
      expect(phase(currentState, {type: "WAT"})).toEqual(currentState);
    });

    describe("for acceptOrderUp", function () {
      var state;

      beforeEach(function () {
        var action = acceptOrderUp("hearts", "north");
        state = phase(phases.ORDER_UP, action);
      });

      it("sets the phase to the trick-winning phase", function () {
        expect(state).toBe(phases.TRICK_WINNING);
      });
    });

    describe("for passOrderUpFinal", function () {
      var state;

      beforeEach(function () {
        var action = passOrderUpFinal();
        state = phase(phases.ORDER_UP, action);
      });

      it("sets the phase to the trump-picking phase", function () {
        expect(state).toBe(phases.PICK_TRUMP);
      });
    });
  });
});
