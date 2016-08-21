import passOrderUpFinal from "./pass-order-up-final";
import passOrderUpInitial from "./pass-order-up-initial";

function passOrderUp() {
  return function (dispatch, getState) {
    if (isLastTurn(getState())) {
      dispatch(passOrderUpFinal());
    } else {
      dispatch(passOrderUpInitial());
    }
  };
}

function isLastTurn({positions}) {
  return positions.current === positions.dealer;
}

export default passOrderUp;
