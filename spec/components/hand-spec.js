"use strict";

import Card from "components/card";
import Hand from "components/hand";
import React from "react";
import {shallow} from "enzyme";

describe("<Hand />", function () {
  var component;

  beforeEach(function () {
    component = shallow(
      <Hand
        cards={[
          {face: "jack", suit: "clubs"},
          {face: "jack", suit: "spades"}
        ]}
      />
    );
  });

  it("renders a <Card> for each card", function () {
    var cards = component.find("Card")
    expect(cards.length).toBe(2);
    expect(cards.first().equals(<Card face="jack" suit="clubs" />)).toBe(true);
    expect(cards.last().equals(<Card face="jack" suit="spades" />)).toBe(true);
  });
});
