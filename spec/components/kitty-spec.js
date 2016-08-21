import Card from "components/card";
import Kitty from "components/kitty";
import React from "react";
import {king, queen} from "utils/playing-cards";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Kitty />", function () {
    var component;

    beforeEach(function () {
      component = shallow(<Kitty cards={[king.hearts, queen.hearts]} />);
    });

    it("renders a <Card> for the first card", function () {
      var cards = component.find("Card")
      expect(cards.length).toBe(1);
      expect(cards.first().equals(<Card card={king.hearts} />)).toBe(true);
    });
  });
});
