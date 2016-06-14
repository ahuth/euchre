"use strict";

import playingCards from "utils/playing-cards";
import React from "react";
import Table from "components/table";
import {shallow} from "enzyme";

describe("<Table />", function () {
  var component;

  beforeEach(function () {
    var hands = {
      north: [playingCards.ace.hearts],
      south: [playingCards.ace.clubs],
      east: [playingCards.ace.diamonds],
      west: [playingCards.ace.spades]
    };
    component = shallow(<Table hands={hands} />);
  });

  it("renders four hands", function () {
    expect(component.find("Hand").length).toBe(4);
  });
});
