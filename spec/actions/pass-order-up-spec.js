import {actionTypes} from "constants";
import {passOrderUp, passOrderUpFinal, passOrderUpInitial} from "actions";

describe("actions", function () {
  describe("passOrderUp", function () {
    var dispatchSpy, getStateSpy;

    beforeEach(function () {
      dispatchSpy = jasmine.createSpy("dispatch");
      getStateSpy = jasmine.createSpy("getState");
    });

    describe("when the current position is the dealer", function () {
      beforeEach(function () {
        var state = {positions: {current: "a", dealer: "a"}};
        getStateSpy.and.returnValue(state);
      });

      describe("executing the thunk", function () {
        beforeEach(function () {
          var thunk = passOrderUp();
          thunk(dispatchSpy, getStateSpy);
        });

        it("dispatches the correct action", function () {
          var action = passOrderUpFinal();
          expect(dispatchSpy).toHaveBeenCalledWith(action);
        });
      });
    });

    describe("when the current position is not the dealer", function () {
      beforeEach(function () {
        var state = {positions: {current: "a", dealer: "b"}};
        getStateSpy.and.returnValue(state);
      });

      describe("executing the thunk", function () {
        beforeEach(function () {
          var thunk = passOrderUp();
          thunk(dispatchSpy, getStateSpy);
        });

        it("dispatches the correct action", function () {
          var action = passOrderUpInitial();
          expect(dispatchSpy).toHaveBeenCalledWith(action);
        });
      });
    });
  });
});
