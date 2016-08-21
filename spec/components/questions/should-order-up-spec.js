import Answer from "components/answer";
import ShouldOrderUp from "components/questions/should-order-up";
import React from "react";
import {shallow} from "enzyme";

describe("components", function () {
  describe("questions", function () {
    describe("<ShouldOrderUp />", function () {
      var component, orderUpSpy, passSpy;

      beforeEach(function() {
        orderUpSpy = jasmine.createSpy("orderUpSpy");
        passSpy = jasmine.createSpy("passSpy");
        component = shallow(
          <ShouldOrderUp
            handleOrderUp={orderUpSpy}
            handlePass={passSpy}
          />
        );
      });

      it("has the option to pass", function () {
        var option = <Answer text="Pass" handleClick={passSpy} />;
        expect(component.contains(option)).toBe(true);
      });

      it("has the option to order up", function () {
        var option = <Answer text="Order Up" handleClick={orderUpSpy} />;
        expect(component.contains(option)).toBe(true);
      });
    });
  })
});
