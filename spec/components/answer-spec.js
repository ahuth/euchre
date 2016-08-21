import Answer from "components/answer";
import React from "react";
import {shallow} from "enzyme";

describe("components", function () {
  describe("<Answer />", function () {
    var component, callback;

    beforeEach(function() {
      callback = jasmine.createSpy("callback");
      component = shallow(
        <Answer
          text="Sure, why not?"
          handleClick={callback}
        />
      );
    });

    it("shows the text", function () {
      expect(component.text()).toBe("Sure, why not?");
    });

    it("triggers the callback when clicked", function () {
      expect(callback).not.toHaveBeenCalled();
      component.simulate("click");
      expect(callback).toHaveBeenCalled();
    });
  });
});
