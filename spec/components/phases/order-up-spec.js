"use strict";

import OrderUp from "components/phases/order-up";
import React from "react";
import {ace, nine} from "utils/playing-cards";
import {shallow} from "enzyme";

describe("<OrderUp />", function () {
  var component;

  beforeEach(function () {
    component = shallow(
      <OrderUp
        hands={{
          north: [nine.clubs],
          south: [nine.spades],
          east: [nine.hearts],
          west: [nine.diamonds],
          kitty: [ace.clubs]
        }}
      />
    );
  });

  it("renders a table", function () {
    expect(component.find("Table").length).toBe(1);
  });

  it("renders the kitty", function () {
    expect(component.find("Kitty").length).toBe(1);
  });
});
