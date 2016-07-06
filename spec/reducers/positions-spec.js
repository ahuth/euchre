"use strict";

import positions from "reducers/positions";
import {passOrderUp} from "../../app/actions";

describe("reducers", function () {
  describe("positions", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = "hi";
      expect(positions(currentState, {type: "WAT"})).toEqual(currentState);
    });

    describe("for passOrderUp", function () {
      var action, state;

      beforeEach(function () {
        action = passOrderUp();
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
  });
});
