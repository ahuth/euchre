"use strict";

import Card from "components/card";
import PlayingCard from "utils/playing-card";
import React from "react";
import {shallow} from "enzyme";

describe("<Card />", function () {
  var component;

  describe("a spade", function () {
    beforeEach(function () {
      component = shallow(
        <Card card={new PlayingCard({face: "nine", suit: "spades"})} />
      );
    });

    it("has the right text", function () {
      expect(component.text()).toBe("9♠")
    });

    it("has the right color", function () {
      expect(component.find("span").prop("style")).toEqual(jasmine.objectContaining({
        color: "black"
      }));
    });
  });

  describe("a club", function () {
    beforeEach(function () {
      component = shallow(
        <Card card={new PlayingCard({face: "ace", suit: "clubs"})} />
      );
    });

    it("has the right text", function () {
      expect(component.text()).toBe("A♣")
    });

    it("has the right color", function () {
      expect(component.find("span").prop("style")).toEqual(jasmine.objectContaining({
        color: "black"
      }));
    });
  });

  describe("a heart", function () {
    beforeEach(function () {
      component = shallow(
        <Card card={new PlayingCard({face: "jack", suit: "hearts"})} />
      );
    });

    it("has the right text", function () {
      expect(component.text()).toBe("J♥")
    });

    it("has the right color", function () {
      expect(component.find("span").prop("style")).toEqual(jasmine.objectContaining({
        color: "red"
      }));
    });
  });

  describe("a diamond", function () {
    beforeEach(function () {
      component = shallow(
        <Card card={new PlayingCard({face: "ten", suit: "diamonds"})} />
      );
    });

    it("has the right text", function () {
      expect(component.text()).toBe("10♦")
    });

    it("has the right color", function () {
      expect(component.find("span").prop("style")).toEqual(jasmine.objectContaining({
        color: "red"
      }));
    });
  });
});
