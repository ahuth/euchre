import head from "lodash/head"

function getHand(state, position) {
  return state.hands[position]
}

function getPhase(state) {
  return state.phase;
}

function getUpCard(state) {
  return head(state.hands.kitty)
}

export default {
  getHand,
  getPhase,
  getUpCard,
}
