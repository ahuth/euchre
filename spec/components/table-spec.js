"use strict";

import React from "react";
import Table from "components/table";
import {ace} from "utils/playing-cards";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Table />", function () {
    var component;

    beforeEach(function () {
      var hands = {
        north: [ace.hearts],
        south: [ace.clubs],
        east: [ace.diamonds],
        west: [ace.spades]
      };
      component = shallow(<Table hands={hands} />);
    });

    it("renders four hands", function () {
      expect(component.find("Hand").length).toBe(4);
    });
  });
});
