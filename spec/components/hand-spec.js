"use strict";

import Card from "components/card";
import Hand from "components/hand";
import PlayingCard from "utils/playing-card";
import React from "react";
import {shallow} from "enzyme";

describe("<Hand />", function () {
  var component, right, left;

  beforeEach(function () {
    right = new PlayingCard({face: "jack", suit: "clubs"});
    left = new PlayingCard({face: "jack", suit: "spades"})
    component = shallow(<Hand cards={[right, left]} />);
  });

  it("renders a <Card> for each card", function () {
    var cards = component.find("Card")
    expect(cards.length).toBe(2);
    expect(cards.first().equals(<Card card={right} />)).toBe(true);
    expect(cards.last().equals(<Card card={left} />)).toBe(true);
  });
});
