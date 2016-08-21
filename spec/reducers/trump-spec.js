import trump from "reducers/trump";
import {acceptOrderUp} from "actions";

describe("reducers", function () {
  describe("trump", function () {
    it("returns the current state for unknown actions", function () {
      var currentState = "hi";
      expect(trump(currentState, {type: "WAT"})).toEqual(currentState);
    });

    describe("for acceptOrderUp", function () {
      var state;

      beforeEach(function () {
        var action = acceptOrderUp("hearts", "north");
        state = {suit: "spades", caller: "south"};
        state = trump(state, action);
      });

      it("sets the suit", function () {
        expect(state.suit).toBe("hearts");
      });

      it("sets the caller", function () {
        expect(state.caller).toBe("north");
      });
    });
  });
});
