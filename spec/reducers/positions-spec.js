"use strict";

import positions from "reducers/positions";
import {acceptOrderUp, passOrderUpInitial, passOrderUpFinal} from "actions";

describe("reducers", function () {
  describe("positions", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = "hi";
      expect(positions(currentState, {type: "WAT"})).toEqual(currentState);
    });

    describe("for acceptOrderUp", function () {
      var state;

      beforeEach(function () {
        var action = acceptOrderUp();
        state = {current: "west", dealer: "north", initial: "south"};
        state = positions(state, action);
      });

      it("sets the current position to left of the dealer", function () {
        expect(state.current).toBe("east");
      });

      it("sets the initial position to left of the dealer", function () {
        expect(state.initial).toBe("east");
      });
    });

    describe("for passOrderUpInitial", function () {
      var action, state;

      beforeEach(function () {
        action = passOrderUpInitial();
        state = {current: "west", dealer: "south", initial: "west"};
        state = positions(state, action);
      });

      it("rotates the current position clockwise", function () {
        expect(state.current).toBe("north");
        state = positions(state, action);
        expect(state.current).toBe("east");
        state = positions(state, action);
        expect(state.current).toBe("south");
        state = positions(state, action);
        expect(state.current).toBe("west");
      });
    });

    describe("for passOrderUpFinal", function () {
      var state;

      beforeEach(function () {
        var action = passOrderUpFinal();
        state = {current: "north", dealer: "south", initial: "east"};
        state = positions(state, action);
      });

      it("sets the current position to left of the dealer", function () {
        expect(state.current).toBe("west");
      });

      it("sets the initial position to left of the dealer", function () {
        expect(state.initial).toBe("west");
      });
    });
  });
});
