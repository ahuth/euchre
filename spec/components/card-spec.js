"use strict";

import Card from "components/card";
import React from "react";
import {shallow} from "enzyme";

describe("<Card />", function () {
  var component;

  describe("the nine of spades", function () {
    beforeEach(function () {
      component = shallow(<Card face="nine" suit="spades" />);
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

  describe("the 10 if clubs", function () {
    beforeEach(function () {
      component = shallow(<Card face="ten" suit="clubs" />);
    });

    it("has the right text", function () {
      expect(component.text()).toBe("10♣")
    });

    it("has the right color", function () {
      expect(component.find("span").prop("style")).toEqual(jasmine.objectContaining({
        color: "black"
      }));
    });
  });

  describe("the jack of hearts", function () {
    beforeEach(function () {
      component = shallow(<Card face="jack" suit="hearts" />);
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

  describe("the queen of diamonds", function () {
    beforeEach(function () {
      component = shallow(<Card face="queen" suit="diamonds" />);
    });

    it("has the right text", function () {
      expect(component.text()).toBe("Q♦")
    });

    it("has the right color", function () {
      expect(component.find("span").prop("style")).toEqual(jasmine.objectContaining({
        color: "red"
      }));
    });
  });

  describe("the king of spades", function () {
    beforeEach(function () {
      component = shallow(<Card face="king" suit="spades" />);
    });

    it("has the right text", function () {
      expect(component.text()).toBe("K♠")
    });

    it("has the right color", function () {
      expect(component.find("span").prop("style")).toEqual(jasmine.objectContaining({
        color: "black"
      }));
    });
  });

  describe("the ace of hearts", function () {
    beforeEach(function () {
      component = shallow(<Card face="ace" suit="hearts" />);
    });

    it("has the right text", function () {
      expect(component.text()).toBe("A♥")
    });

    it("has the right color", function () {
      expect(component.find("span").prop("style")).toEqual(jasmine.objectContaining({
        color: "red"
      }));
    });
  });
});
