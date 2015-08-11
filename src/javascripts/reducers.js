var objectAssign = require("object-assign");

const initialState = {
  clicked: 0
};

var reducers = {
  clicked: function (state = initialState, action) {
    switch (action.type) {
      case "click":
        return objectAssign({}, state, {
          clicked: state.clicked + 1
        });
      default:
        return state;
    };
  }
};

module.exports = reducers;
