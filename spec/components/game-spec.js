"use strict";

import Game from "components/game";
import React from "react";
import {shallow} from "enzyme";

describe("<Game />", function () {
  var component;

  beforeEach(function () {
    component = shallow(<Game />);
  });

  it("renders a table", function () {
    expect(component.find("Table").length).toBe(1);
  });
});
