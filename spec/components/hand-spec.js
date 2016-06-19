"use strict";

import Card from "components/card";
import Hand from "components/hand";
import React from "react";
import {jack} from "utils/playing-cards";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Hand />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Hand cards={[jack.clubs, jack.spades]} />);
    });

    it("renders a <Card> for each card", function () {
      var cards = component.find("Card")
      expect(cards.length).toBe(2);
      expect(cards.first().equals(<Card card={jack.clubs} />)).toBe(true);
      expect(cards.last().equals(<Card card={jack.spades} />)).toBe(true);
    });
  });
});
