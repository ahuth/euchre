"use strict";

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

      it("has two options", function () {
        expect(component.find("Answer").length).toBe(2);
      });

      describe("the option to pass", function () {
        var option;

        beforeEach(function () {
          option = component.find("Answer").first()
        });

        it("exists", function () {
          expect(option.equals(<Answer text="Pass" handleClick={passSpy} />)).toBe(true)
        });
      });

      describe("the option to order up", function () {
        var option;

        beforeEach(function () {
          option = component.find("Answer").last()
        });

        it("exists", function () {
          expect(option.equals(<Answer text="Order Up" handleClick={orderUpSpy} />)).toBe(true)
        });
      });
    });
  })
});
