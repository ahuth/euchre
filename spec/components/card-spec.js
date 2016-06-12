"use strict";

import Card from "../../app/components/card";
import React from "react";
import {shallow} from "enzyme";

describe("<Card />", function () {
  var component;

  beforeEach(function () {
    component = shallow(<Card face="ace" suit="hearts" />);
  });

  it("says Hi", function () {
    expect(component.text()).toBe("Hi");
  });
});
