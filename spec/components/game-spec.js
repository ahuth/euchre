"use strict";

import Game from "components/game";
import React from "react";
import {shallow} from "enzyme";

describe("<Game />", function () {
  var component;

  beforeEach(function () {
    component = shallow(<Game />);
  });

  it("renders the order-up phase", function () {
    expect(component.find("OrderUp").length).toBe(1);
  });
});
