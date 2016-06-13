"use strict";

import PlayingCard from "utils/playing-card";
import React from "react";
import Table from "components/table";
import {shallow} from "enzyme";

describe("<Table />", function () {
  var component;

  beforeEach(function () {
    var hands = {
      north: [new PlayingCard({face: "ace", suit: "hearts"})],
      south: [new PlayingCard({face: "ace", suit: "clubs"})],
      east: [new PlayingCard({face: "ace", suit: "diamonds"})],
      west: [new PlayingCard({face: "ace", suit: "spades"})]
    };
    component = shallow(<Table hands={hands} />);
  });

  it("renders four hands", function () {
    expect(component.find("Hand").length).toBe(4);
  });
});
