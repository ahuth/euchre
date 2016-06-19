"use strict";

import Game from "components/game";
import React from "react";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Game />", function () {
    var component;

    describe("rendering the correct phase", function () {
      beforeEach(function () {
        component = shallow(<Game />);
      });

      describe("when in the order-up phase", function () {
        beforeEach(function () {
          expect(component.state("phase")).toBe("order_up");
        });

        it("renders the correct component", function () {
          expect(component.find("OrderUp").length).toBe(1);
        });
      });
    });
  });
});
